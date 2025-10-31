# EmailJS Setup Guide

To receive emails when users submit the contact form, you need to set up EmailJS.

## Steps to Configure EmailJS

1. **Sign up for EmailJS** (free tier available)
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Create an Email Service**
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Follow the authentication steps
   - Note down your **Service ID**

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template format:
     ```
     From: {{from_name}} <{{from_email}}>
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     Reply to: {{from_email}}
     ```
   - Note down your **Template ID**

4. **Get your Public Key**
   - Go to "Account" > "General"
   - Copy your **Public Key**

5. **Create a `.env` file** in the project root:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. **For GitHub Pages deployment**, add these as GitHub Secrets:
   - Go to your GitHub repository
   - Settings > Secrets and variables > Actions
   - Add these secrets:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
   - Update the GitHub Actions workflow to use these secrets in the build step

## Testing

After setup, test the contact form on your deployed site. You should receive emails at: **chandan17.ramesh@gmail.com**

## Free Tier Limits

- EmailJS free tier: 200 emails/month
- If you need more, consider upgrading or using an alternative service

