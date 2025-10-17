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
      from: 'DataGen Contact Form <contact@datagen.in>',
      to: ['info@datagen.in'],
      replyTo: email,
      subject: `You got a message: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
            <tr>
              <td align="center" style="padding: 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; margin: 0;">

                  <!-- BLACK HEADER -->
                  <tr>
                    <td style="background-color: #000000; padding: 25px; text-align: center;">
                      <img src="https://datagen.in/logo-compact.svg" alt="DataGen" width="200" height="35" style="display: block; margin: 0 auto;" />
                    </td>
                  </tr>

                  <!-- WHITE BODY -->
                  <tr>
                    <td style="padding: 40px 30px; background-color: #ffffff !important;">

                      <h1 style="color: #000000; font-size: 22px; font-weight: 700; margin: 0 0 8px 0;">
                        You got a message!
                      </h1>
                      <p style="color: #6b7280; font-size: 14px; margin: 0 0 30px 0;">
                        New inquiry from your website
                      </p>

                      <!-- Subject -->
                      <div style="margin-bottom: 25px;">
                        <p style="color: #000000; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px 0;">SUBJECT</p>
                        <p style="color: #000000; font-size: 16px; font-weight: 600; margin: 0;">${subject}</p>
                      </div>

                      <!-- Contact Details -->
                      <div style="border-left: 3px solid #000000; padding-left: 20px; margin-bottom: 25px;">
                        <div style="margin-bottom: 15px;">
                          <p style="color: #6b7280; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 5px 0;">FROM</p>
                          <p style="color: #000000; font-size: 15px; font-weight: 600; margin: 0;">${name}</p>
                        </div>
                        <div style="margin-bottom: 15px;">
                          <p style="color: #6b7280; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 5px 0;">EMAIL</p>
                          <p style="margin: 0;">
                            <a href="mailto:${email}" style="color: #000000; text-decoration: underline; font-size: 15px;">${email}</a>
                          </p>
                        </div>
                        <div>
                          <p style="color: #6b7280; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 5px 0;">PHONE</p>
                          <p style="color: #000000; font-size: 15px; margin: 0;">${phone || 'Not provided'}</p>
                        </div>
                      </div>

                      <!-- Message -->
                      <div style="margin-bottom: 30px;">
                        <p style="color: #000000; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">MESSAGE</p>
                        <div style="border: 1px solid #e5e7eb; padding: 20px; background-color: #fafafa;">
                          <p style="color: #000000; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                        </div>
                      </div>

                      <!-- Reply Button -->
                      <div style="text-align: center; margin-top: 30px;">
                        <a href="mailto:${email}?subject=RE: ${subject}" style="display: inline-block; background-color: #000000; color: #ffffff; text-decoration: none; padding: 12px 30px; font-size: 14px; font-weight: 600; border-radius: 4px;">
                          Reply to ${name.split(' ')[0]}
                        </a>
                      </div>

                    </td>
                  </tr>

                  <!-- BLACK FOOTER -->
                  <tr>
                    <td style="background-color: #000000; padding: 40px 30px; text-align: center;">
                      <img src="https://datagen.in/logo.svg" alt="DataGen" width="240" height="60" style="display: block; margin: 0 auto 20px auto;" />
                      <p style="color: rgba(255, 255, 255, 0.7); font-size: 13px; margin: 0 0 20px 0;">
                        <a href="https://datagen.in" style="color: rgba(255, 255, 255, 0.7); text-decoration: none;">datagen.in</a> |
                        <a href="mailto:info@datagen.in" style="color: rgba(255, 255, 255, 0.7); text-decoration: none;">info@datagen.in</a>
                      </p>
                      <div style="border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 20px; margin-top: 20px;">
                        <p style="color: rgba(255, 255, 255, 0.5); font-size: 12px; margin: 0;">
                          © ${new Date().getFullYear()} DataGen. All rights reserved.
                        </p>
                      </div>
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

