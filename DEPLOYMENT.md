# CPGIO Knowledge Base - Deployment Guide

## 📦 Quick Start

Your CPGIO Knowledge Base is ready to deploy! The application has been opened in your browser for testing.

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `cpgio-knowledge-base` (or your preferred name)
   - **Description**: "AI-powered knowledge base with RFP intelligence"
   - **Visibility**: Choose Public or Private
   - **Do NOT initialize** with README (we already have one)
5. Click "Create repository"

### Step 2: Push Your Code to GitHub

Run these commands from the `cpgio-knowledge-base` directory:

```bash
# Navigate to project directory
cd /Users/jackross-cpgio/cpgio-knowledge-base

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cpgio-knowledge-base.git

# Push code to GitHub
git push -u origin main
```

**Note**: GitHub may ask for authentication. Use a Personal Access Token if you have 2FA enabled.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down and click **Pages** (left sidebar)
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**

### Step 4: Access Your Live Site

After a few minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/cpgio-knowledge-base/
```

GitHub Pages will show you the URL in the Pages settings.

## 🔧 Alternative: Deploy with GitHub CLI

If you have [GitHub CLI](https://cli.github.com/) installed:

```bash
# Create repository
gh repo create cpgio-knowledge-base --public --source=. --remote=origin

# Push code
git push -u origin main

# Enable GitHub Pages
gh repo edit --enable-pages --pages-branch main
```

## 🌐 Alternative Hosting Options

### Option 1: Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up/Log in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings: (leave empty - no build needed)
6. Click "Deploy site"

Your site will be live with a custom Netlify URL.

### Option 2: Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign up/Log in with GitHub
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Framework Preset: Select "Other"
6. Click "Deploy"

### Option 3: Local Server

For local testing:

```bash
# Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

## 📝 Custom Domain (Optional)

### For GitHub Pages:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Add a `CNAME` file to your repository:
```bash
echo "knowledge.cpg.io" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```
3. Configure DNS records at your domain registrar:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
4. In GitHub Pages settings, enter your custom domain
5. Enable "Enforce HTTPS"

## 🔐 Security & Access Control

### For Private Knowledge Base:

If you want to restrict access:

1. **GitHub Private Repository**:
   - Set repository to private in settings
   - Only collaborators can access

2. **Password Protection**:
   - Use Netlify's password protection feature
   - Or add authentication via Cloudflare Access

3. **Custom Authentication**:
   - Implement login system (requires backend)
   - Use services like Auth0 or Firebase Authentication

## 📊 Analytics (Optional)

Add Google Analytics to track usage:

1. Get Google Analytics tracking ID
2. Add this before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛠 Maintenance & Updates

### Updating Content:

1. Edit `knowledge-base-data.js` to update:
   - Capabilities
   - Case studies
   - Service KPIs
   - Frameworks

2. Commit and push changes:
```bash
git add knowledge-base-data.js
git commit -m "Update knowledge base content"
git push
```

GitHub Pages will automatically redeploy (takes 1-2 minutes).

### Updating Styling:

Edit `styles.css` to customize the look and feel.

### Adding Features:

Edit `index.html` to add new React components or functionality.

## 🐛 Troubleshooting

### Site not loading:
- Wait 5-10 minutes after enabling GitHub Pages
- Check that Pages is enabled in repository settings
- Verify the branch and folder are correct

### 404 Error:
- Ensure `index.html` is in the root directory
- Check the repository name matches the URL

### Styling issues:
- Check browser console for errors (F12)
- Verify CSS file is loading correctly
- Clear browser cache

### Excel upload not working:
- Ensure SheetJS CDN is accessible
- Check browser console for errors
- Try a different Excel file format

## 📧 Support

For questions or issues:
- **Email**: sales@cpgio.com
- **Phone**: (866) 764-4605 ext 712

## ✅ Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site accessible at GitHub Pages URL
- [ ] All features tested (navigation, search, AI Q&A, RFP upload)
- [ ] Mobile responsiveness verified
- [ ] Custom domain configured (optional)
- [ ] Analytics added (optional)

---

**Need help?** Refer to the [README.md](README.md) for detailed usage instructions.
