# EmailJS Debugging Guide

## Step 1: Verify Environment Variables on Vercel

1. Go to your Vercel Dashboard
2. Select your project (Datagen-website)
3. Go to **Settings** → **Environment Variables**
4. Verify these variables are set:
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` ✓
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` ✓
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` ✓

**Important:** These must start with `NEXT_PUBLIC_` to be available in the browser!

---

## Step 2: Check Browser Console

1. Go to your deployed site: https://datagen.in (or your Vercel URL)
2. Open DevTools: **F12** or **Right-click → Inspect**
3. Go to **Console** tab
4. Submit the contact form
5. Look for these messages:
   - ✓ `EmailJS initialized successfully` - Good!
   - ✗ `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is not set` - Variables not loaded
   - ✗ `Missing EmailJS configuration: ...` - Missing credentials
   - ✗ `EmailJS Error: ...` - Actual error from EmailJS

---

## Step 3: Check Network Tab

1. Open DevTools → **Network** tab
2. Submit the form
3. Look for requests to `api.emailjs.com`
4. Check the response:
   - **Status 200** = Success
   - **Status 4xx/5xx** = Error (click to see details)

---

## Step 4: Check Vercel Logs

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Deployments**
4. Click on the latest deployment
5. Go to **Logs** tab
6. Look for any error messages

---

## Step 5: Verify EmailJS Configuration

1. Go to https://dashboard.emailjs.com/
2. Check your **Service ID** matches `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
3. Check your **Template ID** matches `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
4. Check your **Public Key** matches `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
5. Verify the template has these variables:
   - `from_name`
   - `reply_to`
   - `phone`
   - `message`
   - `to_email`
   - `user_name`
   - `user_email`
   - `user_phone`
   - `user_message`

---

## Step 6: Test EmailJS Directly

Create a test file `test-emailjs.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/build/index.min.js"></script>
</head>
<body>
    <button onclick="testEmail()">Test EmailJS</button>
    <script>
        function testEmail() {
            const publicKey = 'YOUR_PUBLIC_KEY_HERE';
            const serviceId = 'YOUR_SERVICE_ID_HERE';
            const templateId = 'YOUR_TEMPLATE_ID_HERE';
            
            emailjs.init(publicKey);
            
            emailjs.send(serviceId, templateId, {
                from_name: 'Test User',
                reply_to: 'test@example.com',
                phone: '1234567890',
                message: 'This is a test message',
                to_email: 'info@datagen.in',
                user_name: 'Test User',
                user_email: 'test@example.com',
                user_phone: '1234567890',
                user_message: 'This is a test message'
            }).then(response => {
                console.log('SUCCESS!', response);
                alert('Email sent successfully!');
            }).catch(error => {
                console.error('FAILED!', error);
                alert('Error: ' + error.text);
            });
        }
    </script>
</body>
</html>
```

---

## Common Issues & Solutions

### Issue: "Missing EmailJS configuration"
**Solution:** Environment variables not set on Vercel. Go to Settings → Environment Variables and add them.

### Issue: "EmailJS Error: Invalid Service ID"
**Solution:** Service ID is wrong. Check EmailJS dashboard and verify it matches.

### Issue: "EmailJS Error: Invalid Template ID"
**Solution:** Template ID is wrong or template doesn't exist. Check EmailJS dashboard.

### Issue: "EmailJS Error: Invalid Public Key"
**Solution:** Public Key is wrong. Check EmailJS dashboard.

### Issue: Email sent but not received
**Solution:** 
- Check EmailJS template variables match the code
- Check email recipient in template
- Check spam folder
- Verify email service is connected in EmailJS

---

## What to Report

When you report the issue, please provide:
1. Screenshot of browser console errors
2. Screenshot of Vercel environment variables (hide sensitive values)
3. Screenshot of EmailJS dashboard (Service/Template/Public Key)
4. The exact error message you see

