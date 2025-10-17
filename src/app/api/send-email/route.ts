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
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                  <!-- Header with DataGen Branding -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <!-- DataGen Logo -->
                            <div style="margin-bottom: 15px;">
                              <svg width="180" height="45" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(0, 12)">
                                  <circle cx="19" cy="18" r="18" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.9"/>
                                  <g transform="translate(7, 6)">
                                    <circle cx="12" cy="12" r="3.5" fill="#ffffff" stroke="#ffffff" stroke-width="1"/>
                                    <path d="M12 2 L12 8.5 M12 15.5 L12 22 M2 12 L8.5 12 M15.5 12 L22 12" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
                                    <circle cx="6" cy="6" r="2" fill="#ffffff"/>
                                    <circle cx="18" cy="6" r="2" fill="#ffffff"/>
                                    <circle cx="6" cy="18" r="2" fill="#ffffff"/>
                                    <circle cx="18" cy="18" r="2" fill="#ffffff"/>
                                    <path d="M9.5 9.5 L6 6 M14.5 9.5 L18 6 M9.5 14.5 L6 18 M14.5 14.5 L18 18" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M12 5 L12 6.5 M12 17.5 L12 19 M5 12 L6.5 12 M17.5 12 L19 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
                                  </g>
                                </g>
                                <text x="49" y="32" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="22" font-weight="800" fill="#ffffff" letter-spacing="-0.5px">DataGen</text>
                                <text x="49" y="46" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="600" fill="#ffffff" letter-spacing="0.2px">AI and Synthetic Data Solutions</text>
                              </svg>
                            </div>
                            <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 20px 0 10px 0; letter-spacing: -0.5px;">
                              📬 You got a message!
                            </h1>
                            <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin: 0; font-weight: 500;">
                              New inquiry from your website
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">

                      <!-- Subject Badge -->
                      <div style="margin-bottom: 30px;">
                        <span style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; display: inline-block;">
                          ${subject}
                        </span>
                      </div>

                      <!-- Contact Information -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">From</span>
                                  <p style="margin: 5px 0 0 0; color: #1f2937; font-size: 16px; font-weight: 600;">${name}</p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                                  <p style="margin: 5px 0 0 0;">
                                    <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 15px; font-weight: 500;">${email}</a>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                                  <p style="margin: 5px 0 0 0; color: #1f2937; font-size: 15px;">${phone || 'Not provided'}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Message -->
                      <div style="margin-bottom: 30px;">
                        <h3 style="color: #1f2937; font-size: 16px; font-weight: 700; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 0.5px;">
                          Message
                        </h3>
                        <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px;">
                          <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                        </div>
                      </div>

                      <!-- Action Button -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 20px 0;">
                            <a href="mailto:${email}" style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; display: inline-block; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);">
                              Reply to ${name.split(' ')[0]}
                            </a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <p style="color: #6b7280; font-size: 14px; margin: 0 0 15px 0; font-weight: 500;">
                              This message was sent via the DataGen contact form
                            </p>
                            <p style="color: #9ca3af; font-size: 13px; margin: 0 0 15px 0;">
                              <a href="https://datagen.in" style="color: #3b82f6; text-decoration: none; font-weight: 600;">datagen.in</a> |
                              <a href="mailto:info@datagen.in" style="color: #3b82f6; text-decoration: none;">info@datagen.in</a>
                            </p>
                            <p style="color: #9ca3af; font-size: 12px; margin: 0; line-height: 1.6;">
                              © ${new Date().getFullYear()} DataGen. All rights reserved.<br>
                              AI and Synthetic Data Solutions
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

