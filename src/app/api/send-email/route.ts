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
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
            <tr>
              <td align="center">
                <table width="600" cellpadding

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px; background-color: #ffffff;">

                      <!-- Title -->
                      <h1 style="color: #000000; font-size: 24px; font-weight: 700; margin: 0 0 10px 0;">
                        📬 You got a message!
                      </h1>
                      <p style="color: #6b7280; font-size: 15px; margin: 0 0 30px 0;">
                        New inquiry from your website
                      </p>

                      <!-- Subject Badge -->
                      <div style="margin-bottom: 30px;">
                        <span style="background-color: #3b82f6; color: #ffffff; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; display: inline-block;">
                          ${subject}
                        </span>
                      </div>

                      <!-- Contact Information -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="padding: 20px; background-color: #f9fafb; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">FROM</span>
                                  <p style="margin: 5px 0 0 0; color: #000000; font-size: 16px; font-weight: 600;">${name}</p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">EMAIL</span>
                                  <p style="margin: 5px 0 0 0;">
                                    <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 15px; font-weight: 500;">${email}</a>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">PHONE</span>
                                  <p style="margin: 5px 0 0 0; color: #000000; font-size: 15px;">${phone || 'Not provided'}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Message -->
                      <div style="margin-bottom: 30px;">
                        <h3 style="color: #000000; font-size: 14px; font-weight: 700; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 0.5px;">
                          MESSAGE
                        </h3>
                        <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px;">
                          <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                        </div>
                      </div>

                      <!-- Action Button -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 20px 0;">
                            <a href="mailto:${email}" style="background-color: #000000; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 15px; font-weight: 600; display: inline-block;">
                              Reply to ${name.split(' ')[0]}
                            </a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer - Simple and Professional -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 30px; border-top: 1px solid #e5e7eb;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <!-- Logo -->
                            <div style="margin-bottom: 20px;">
                              <img src="https://datagen.in/logo.svg" alt="DataGen" width="180" height="45" style="display: block; margin: 0 auto; height: auto;" />
                            </div>

                            <!-- Contact Info -->
                            <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0; line-height: 1.6;">
                              <strong style="color: #000000;">DataGen</strong> - AI and Synthetic Data Solutions
                            </p>
                            <p style="color: #6b7280; font-size: 13px; margin: 0 0 15px 0;">
                              <a href="https://datagen.in" style="color: #3b82f6; text-decoration: none;">datagen.in</a> |
                              <a href="mailto:info@datagen.in" style="color: #3b82f6; text-decoration: none;">info@datagen.in</a>
                            </p>

                            <!-- Divider -->
                            <div style="height: 1px; background-color: #e5e7eb; margin: 20px 0;"></div>

                            <!-- Copyright -->
                            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                              © ${new Date().getFullYear()} DataGen. All rights reserved.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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

