# Email Sending for DataGen Website

This document explains how the contact form works on the DataGen website.

## Overview

The contact form uses a direct submission approach with a fallback mechanism. This approach:

- Sends emails directly from the client browser
- Doesn't require the user to have an email client (in most cases)
- Uses FormSubmit.co for direct form submission (no API calls)
- Provides immediate feedback to the user
- Has a fallback mechanism if the primary method fails
- Includes a mailto link as a last resort

## How It Works

1. When a user fills out the contact form and clicks "Contact Us", the form:
   - Validates all the input fields on the client side
   - Creates a temporary form that submits directly to FormSubmit.co
   - Submits the form in a hidden iframe to prevent page reload
   - Shows a success message when the submission is complete
   - As a last resort, it provides a mailto link for the user
   - The client shows a success or error message

## Technical Implementation

The solution uses a direct form submission approach with a fallback:

1. **Primary Method**: [FormSubmit.co](https://formsubmit.co/) - A form endpoint service that forwards submissions to email without requiring API calls
2. **Fallback**: A mailto link that opens the user's email client with pre-filled information

The implementation uses a hidden iframe technique to submit the form without reloading the page or making API calls. This provides a seamless user experience while still ensuring the email gets delivered.

## Advantages of This Approach

1. **No API Calls**: The solution doesn't rely on any API calls
2. **No Server-Side Code**: Everything happens in the client browser
3. **No Email Credentials Required**: FormSubmit.co handles the email delivery
4. **Simple User Experience**: User just fills out the form and clicks submit
5. **Always Works**: Even if the primary method fails, the user can still send an email via mailto

## Configuration

No configuration files are needed for this approach. The solution works out of the box without any API keys or credentials.

### Changing the Recipient Email

To change the recipient email address, update these lines in `src/app/page.tsx`:

```typescript
// In the handleSubmit function
tempForm.action = 'https://formsubmit.co/new-email@example.com';  // Change this line

// In the handleSendEmail function
tempForm.action = 'https://formsubmit.co/new-email@example.com';  // Change this line

// For the mailto link fallback
const mailtoLink = createMailtoLink(...);  // This function uses 'info@datagen.in' - update it there
```

### FormSubmit.co Setup

FormSubmit.co works without any setup for the first few submissions. After that, you'll need to:

1. Check your email (info@datagen.in) for an activation email from FormSubmit.co
2. Click the activation link to confirm your email address
3. Your form will then work permanently

This is a one-time setup that ensures only authorized people can send emails to your address.

## How to Test

1. Fill out the contact form on the website
2. Submit the form
3. You should see a success message
4. Check the email inbox at info@datagen.in for the submitted message

## Troubleshooting

If emails are not being received:

1. Check the server logs for any errors
2. Verify that you've activated your FormSubmit.co account by clicking the activation link in the email they sent
3. Check your spam folder
4. Try using the mailto link fallback by clicking the "Send Email" button when the form fails

## Support

If you encounter any issues, please contact the development team.
