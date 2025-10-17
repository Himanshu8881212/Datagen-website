import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, phone, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get Resend API key from environment variables
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('Missing RESEND_API_KEY environment variable');
      return NextResponse.json(
        {
          success: false,
          message: 'Server configuration error: RESEND_API_KEY not set',
        },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Send email using Resend with verified domain
    const { data, error } = await resend.emails.send({
      from: 'DataGen Contact Form <contact@datagen.in>', // Your verified domain
      to: ['info@datagen.in'], // Send to your business email
      replyTo: email, // Allow replying directly to the customer
      subject: `You got a message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-top: 0; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
              📬 You got a message!
            </h2>

            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #4b5563;">Subject:</strong> <span style="color: #1f2937;">${subject}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #4b5563;">From:</strong> <span style="color: #1f2937;">${name}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #4b5563;">Phone:</strong> <span style="color: #1f2937;">${phone || 'Not provided'}</span></p>
            </div>

            <div style="margin-top: 20px; padding: 20px; background-color: #f3f4f6; border-left: 4px solid #3b82f6; border-radius: 4px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #4b5563;">Message:</strong></p>
              <p style="color: #1f2937; line-height: 1.6; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This message was sent via the DataGen contact form
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error(error.message || 'Failed to send email');
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Email sending error:', error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to send email',
      },
      { status: 500 }
    );
  }
}

