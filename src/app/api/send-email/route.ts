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
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">

                  <!-- Header matching website design - Black background -->
                  <tr>
                    <td style="background-color: #000000; padding: 20px 30px; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="left">
                            <!-- DataGen Logo (compact version like website header) -->
                            <img src="https://datagen.in/logo-compact.svg" alt="DataGen" width="280" height="48" style="display: block; height: auto;" />
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

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

                  <!-- Footer matching website design - Black background -->
                  <tr>
                    <td style="background-color: #000000; padding: 40px 30px; border-top: 1px solid rgba(255, 255, 255, 0.2);">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <!-- Logo -->
                            <div style="margin-bottom: 30px;">
                              <img src="https://datagen.in/logo.svg" alt="DataGen - AI and Synthetic Data Solutions" width="240" height="60" style="display: block; height: auto;" />
                            </div>

                            <!-- Footer Links Grid -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                              <tr>
                                <td width="33%" valign="top" style="padding-right: 15px;">
                                  <h4 style="color: #ffffff; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 15px 0;">PRODUCT</h4>
                                  <p style="margin: 0 0 10px 0;">
                                    <a href="https://datagen.in/#product" style="color: rgba(255, 255, 255, 0.7); text-decoration: none; font-size: 13px;">SynthEngyne</a>
                                  </p>
                                  <p style="margin: 0 0 10px 0;">
                                    <a href="https://datagen.in/#pricing" style="color: rgba(255, 255, 255, 0.7); text-decoration: none; font-size: 13px;">Pricing</a>
                                  </p>
                                </td>
                                <td width="33%" valign="top" style="padding-right: 15px;">
                                  <h4 style="color: #ffffff; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 15px 0;">SERVICES</h4>
                                  <p style="margin: 0 0 10px 0;">
                                    <a href="https://datagen.in/#services" style="color: rgba(255, 255, 255, 0.7); text-decoration: none; font-size: 13px;">Overview</a>
                                  </p>
                                  <p style="margin: 0 0 10px 0;">
                                    <a href="https://datagen.in/services" style="color: rgba(255, 255, 255, 0.7); text-decoration: none; font-size: 13px;">AI Solutions</a>
                                  </p>
                                </td>
                                <td width="33%" valign="top">
                                  <h4 style="color: #ffffff; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 15px 0;">COMPANY</h4>
                                  <p style="margin: 0 0 10px 0;">
                                    <a href="https://datagen.in/about" style="color: rgba(255, 255, 255, 0.7); text-decoration: none; font-size: 13px;">About Us</a>
                                  </p>
                                  <p style="margin: 0 0 10px 0;">
                                    <a href="https://datagen.in/#faq" style="color: rgba(255, 255, 255, 0.7); text-decoration: none; font-size: 13px;">FAQ</a>
                                  </p>
                                  <p style="margin: 0 0 10px 0;">
                                    <a href="https://datagen.in/#contact" style="color: rgba(255, 255, 255, 0.7); text-decoration: none; font-size: 13px;">Contact</a>
                                  </p>
                                </td>
                              </tr>
                            </table>

                            <!-- Copyright -->
                            <div style="padding-top: 30px; border-top: 1px solid rgba(255, 255, 255, 0.2); text-align: center;">
                              <p style="color: rgba(255, 255, 255, 0.7); font-size: 13px; margin: 0;">
                                DataGen © ${new Date().getFullYear()}. All rights reserved.
                              </p>
                            </div>
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

