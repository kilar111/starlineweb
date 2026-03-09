# Starline Web - Contact Form Setup

## How to Enable Contact Form Email Notifications

The contact form now sends emails using Web3Forms (free service). Follow these steps:

### Step 1: Get Your Free API Key
1. Go to https://web3forms.com/
2. Click "Get Started"
3. Enter your email: **contact@starlineweb.com**
4. Verify your email
5. Copy your Access Key

### Step 2: Add API Key to Project
1. Open the `.env` file in the project root
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual API key:
   ```
   VITE_WEB3FORMS_KEY=your-actual-key-here
   ```

### Step 3: Rebuild and Deploy
```bash
npm run build
git add .
git commit -m "Enable contact form with Web3Forms"
git push origin main
```

## How It Works

When someone fills out the contact form:
1. The form data is sent to Web3Forms API
2. Web3Forms forwards it to **contact@starlineweb.com**
3. You receive an email notification
4. If the API fails, it opens your default email client as backup

## Features
- ✅ Email notifications to contact@starlineweb.com
- ✅ Loading state while sending
- ✅ Success/error messages
- ✅ Form validation
- ✅ Backup mailto: fallback
- ✅ Free service (no cost)

## Contact Details Updated
- Email: contact@starlineweb.com
- Phone: +94 787199535
- Location: Gampaha, Sri Lanka
