# Trasil.ai - Deployment Instructions

## ✅ Deploying on Vercel

1. Go to [https://vercel.com](https://vercel.com) and log in or sign up.
2. Create a new project and link it to your GitHub (if using GitHub).
3. If you're uploading manually:
   - Drag and drop your project folder
   - Ensure it contains `index.html`, `vercel.json`, and public assets
4. Vercel will auto-detect it as a static site and deploy it.
5. Once deployed, set your custom domain in the Vercel dashboard.

## 📁 Project Structure

```
/index.html
/styles.css
/script.js
/vercel.json
```

## 🌐 Custom Domain

To use a domain like `trasil.in`:
- Go to your domain provider (e.g., GoDaddy)
- Update DNS records to point to Vercel
- Use the domain settings in the Vercel dashboard
