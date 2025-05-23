import { NextRequest, NextResponse } from 'next/server';

/**
 * This API route is a fallback that simulates a successful email submission.
 * The actual email functionality uses EmailJS directly from the client side.
 * EmailJS is a service that allows sending emails directly from client-side JavaScript
 * without exposing your email credentials.
 *
 * The implementation is in the page.tsx file.
 */
export async function POST(_request: NextRequest) {
  // Simulate a delay to make it seem like we're processing the email
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json(
    {
      success: true,
      message: "Thank you for your message! We'll get back to you soon."
    },
    { status: 200 }
  );
}
