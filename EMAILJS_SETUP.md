# EmailJS Setup Guide

To receive emails when users submit the contact form, you need to set up EmailJS.

## Quick Setup (5 minutes)

**You're seeing the error because EmailJS is not configured yet. Follow these steps:**

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

5. **For Local Development - Create a `.env` file** in the project root:
   ```bash
   # In the project root directory
   cp .env.example .env
   ```
   Then edit `.env` and replace the placeholder values with your actual EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

6. **For GitHub Pages Deployment - Add GitHub Secrets**:
   - Go to: https://github.com/chandan1708/chandan-ai-spark/settings/secrets/actions
   - Click "New repository secret" for each:
     - Name: `VITE_EMAILJS_SERVICE_ID`, Value: your Service ID
     - Name: `VITE_EMAILJS_TEMPLATE_ID`, Value: your Template ID  
     - Name: `VITE_EMAILJS_PUBLIC_KEY`, Value: your Public Key
   - After adding secrets, push a new commit to trigger a rebuild (or manually trigger the workflow)

## Testing

After setup, test the contact form on your deployed site. You should receive emails at: **chandan17.ramesh@gmail.com**

## Free Tier Limits

- EmailJS free tier: 200 emails/month
- If you need more, consider upgrading or using an alternative service

