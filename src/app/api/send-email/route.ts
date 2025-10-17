import { NextRequest, NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get EmailJS credentials from environment variables (server-side)
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    console.log('Server-side EmailJS config:', {
      serviceId: serviceId ? 'SET' : 'NOT SET',
      templateId: templateId ? 'SET' : 'NOT SET',
      publicKey: publicKey ? 'SET' : 'NOT SET',
    });

    if (!serviceId || !templateId || !publicKey) {
      const missingVars = [];
      if (!serviceId) missingVars.push('EMAILJS_SERVICE_ID');
      if (!templateId) missingVars.push('EMAILJS_TEMPLATE_ID');
      if (!publicKey) missingVars.push('EMAILJS_PUBLIC_KEY');

      console.error('Missing EmailJS configuration:', missingVars);

      return NextResponse.json(
        {
          success: false,
          message: `Server configuration error: ${missingVars.join(', ')} not set`,
        },
        { status: 500 }
      );
    }

    // Initialize EmailJS
    emailjs.init(publicKey);

    // Send email using EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: phone || 'Not provided',
      message: message,
      to_email: 'info@datagen.in',
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );

    console.log('EmailJS response:', response);

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

