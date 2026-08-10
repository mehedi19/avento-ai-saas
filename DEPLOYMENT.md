# 🚀 Deploying Avento AI SaaS Landing Page to a Custom Domain

This guide provides step-by-step instructions to publish your **Avento AI** landing page project to a custom domain (e.g., `https://your-domain.com` or `https://www.your-domain.com`).

---

## 📦 Option 1: Deploying via Vercel (Recommended - 2 Minutes)

Vercel provides automatic SSL certificates, global CDN edge hosting, and seamless custom domain mapping.

### Step 1: Push your code to GitHub / GitLab / Bitbucket
1. Initialize Git in the project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial Avento AI SaaS Landing Page"
   ```
2. Create a new repository on GitHub and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/avento-ai-saas.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import into Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** -> Select your `avento-ai-saas` repository.
3. Keep default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Step 3: Connect Your Custom Domain
1. In your Vercel Project Dashboard, go to **Settings** -> **Domains**.
2. Type your domain name (e.g. `your-domain.com` or `www.your-domain.com`) and click **Add**.
3. In your domain registrar (GoDaddy, Namecheap, Cloudflare, Google Domains, Name.com):
   - For root domain (`your-domain.com`), add an **A Record**:
     - **Host / Name**: `@`
     - **Value / Target**: `76.76.21.21`
   - For subdomain (`www.your-domain.com`), add a **CNAME Record**:
     - **Host / Name**: `www`
     - **Value / Target**: `cname.vercel-dns.com`
4. Vercel will automatically verify DNS records and issue an HTTPS SSL certificate within ~60 seconds!

---

## 🌐 Option 2: Deploying via Netlify

1. Log in to [netlify.com](https://netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"** -> Choose GitHub.
3. Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.
5. Go to **Domain Settings** -> **Add custom domain**.
6. Set DNS Records at your domain registrar:
   - **CNAME**: `your-app-name.netlify.app`

---

## ⚡ Option 3: Deploying via Cloudflare Pages (Unlimited Free Bandwidth)

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com).
2. Navigate to **Workers & Pages** -> **Create Application** -> **Pages**.
3. Connect your GitHub repository.
4. Set Build Settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**.
6. Add your Custom Domain under **Custom domains** tab in Cloudflare dashboard.

---

## 🛠 Local Production Build Verification

To verify that your production bundle builds cleanly before deploying:

```bash
# Generate optimized distribution bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📊 Summary of Tech Stack
- **Framework**: React 18 / 19 + Vite
- **Styling**: Modern Vanilla CSS (Design Tokens, Glassmorphism, CSS Grid & Flexbox)
- **Icons**: Lucide React
- **Animations**: Canvas Confetti & Micro-CSS Transitions
- **Responsiveness**: Web, Tablet, Mobile breakpoints built-in
