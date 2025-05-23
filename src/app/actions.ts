'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

// Define the schema for contact form validation
const contactFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

// Removed unused type - keeping file for future use

// Create a transporter for sending emails
// Note: In production, you should use environment variables for these credentials
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your email
    pass: process.env.EMAIL_PASS || 'your-app-password', // Replace with your app password
  },
});

export async function submitContactForm(formData: FormData) {
  try {
    // Check for CSRF token
    const csrfToken = formData.get('csrf_token');
    if (!csrfToken) {
      return {
        success: false,
        message: "Security validation failed. Please refresh the page and try again."
      };
    }

    // Extract form data
    const data = {
      email: formData.get('email') as string,
      name: formData.get('name') as string,
      phone: formData.get('phone') as string || '',
      message: formData.get('message') as string,
    };

    // Validate form data
    const validatedData = contactFormSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        success: false,
        errors: validatedData.error.flatten().fieldErrors
      };
    }

    // Format the email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${validatedData.data.name}</p>
      <p><strong>Email:</strong> ${validatedData.data.email}</p>
      <p><strong>Phone:</strong> ${validatedData.data.phone || 'Not provided'}</p>
      <h3>Message:</h3>
      <p>${validatedData.data.message.replace(/\n/g, '<br>')}</p>
    `;

    // Send the email
    const mailOptions = {
      from: process.env.EMAIL_FROM || '"DataGen Website" <noreply@datagen.in>',
      to: 'info@datagen.in',
      subject: `New Contact Form Submission from ${validatedData.data.name}`,
      html: emailContent,
      replyTo: validatedData.data.email,
    };

    try {
      await transporter.sendMail(mailOptions);

      return {
        success: true,
        message: "Thank you for your message! We'll get back to you soon."
      };
    } catch (emailError) {
      console.error('Error sending email:', emailError);

      // Fallback: If email sending fails, log the data for manual handling
      console.log('Contact form submission data:', {
        name: validatedData.data.name,
        email: validatedData.data.email,
        phone: validatedData.data.phone,
        message: validatedData.data.message,
        timestamp: new Date().toISOString()
      });

      return {
        success: true, // Still return success to the user
        message: "Thank you for your message! We've received your submission and will get back to you soon."
      };
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: "An error occurred while submitting the form. Please try again."
    };
  }
}
