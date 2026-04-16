# Deployment Guide

This guide covers multiple deployment options for the Hotel Website application.

## Pre-Deployment Checklist

- [ ] All tests pass locally
- [ ] Production build created successfully (`npm run build`)
- [ ] No console errors or warnings
- [ ] Environment variables configured
- [ ] TypeScript passes type checking (`npm run type-check`)
- [ ] All routes work correctly
- [ ] Images and assets load properly
- [ ] Responsive design verified on mobile devices

## 📤 Deployment Platforms

### 1. **Vercel (Recommended for Vite)**

Vercel provides the best experience for Vite applications with automatic deployments and edge functions.

**Steps:**

1. **Prepare your repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/hotel-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel automatically detects Vite configuration
   - Click "Deploy"

3. **Configuration (optional)**
   - Build command: `npm run build` (auto-detected)
   - Output directory: `dist` (auto-detected)
   - No additional config needed

**Features:**
- Automatic deployments on push
- Preview URLs for pull requests
- Environment variables management
- Serverless functions (if needed)
- CDN integration

---

### 2. **Netlify**

Another excellent option with continuous deployment and form handling.

**Steps:**

1. **Deploy via GitHub**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Set build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Configure redirects** (create `public/_redirects` file)
   ```
   /* /index.html 200
   ```

3. **Environment variables**
   - Go to Site settings → Build & deploy → Environment
   - Add any required environment variables

**Features:**
- Automatic deployments
- Form submissions handling
- DNS management
- SSL/TLS automatic

---

### 3. **AWS S3 + CloudFront**

For production-grade deployments with global CDN.

**Steps:**

1. **Create S3 bucket**
   ```bash
   # Use AWS CLI or console
   aws s3 mb s3://your-hotel-website --region us-east-1
   ```

2. **Enable static website hosting**
   - Go to S3 bucket → Properties
   - Enable "Static website hosting"
   - Index document: `index.html`
   - Error document: `index.html`

3. **Build and upload**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-hotel-website --delete
   ```

4. **Create CloudFront distribution**
   - Origin: Your S3 bucket
   - Default root object: `index.html`
   - Error pages: Configure 403/404 to return `index.html`

5. **Custom domain**
   - Route 53 → Create record set
   - Point to CloudFront distribution

---

### 4. **GitHub Pages**

Low-cost option for hosting the static site.

**Steps:**

1. **Update `vite.config.ts`**
   ```typescript
   export default defineConfig({
     base: '/hotel-website/', // if deploying to subdirectory
     // ... rest of config
   });
   ```

2. **Configure GitHub Actions** (create `.github/workflows/deploy.yml`)
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ['main']

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Enable GitHub Pages**
   - Repository → Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages

---

### 5. **Docker Container**

For containerized deployments.

**Create `Dockerfile`**
```dockerfile
# Build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Build and run**
```bash
docker build -t hotel-website .
docker run -p 3000:3000 hotel-website
```

---

### 6. **Traditional Web Hosting (Shared/VPS)**

For cPanel, Apache, or Nginx hosting.

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to hosting**
   - Extract `dist` folder contents
   - Upload to `public_html` (or equivalent)
   - Ensure folder structure is correct

3. **Configure .htaccess** (Apache)
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteCond %{DOCUMENT_ROOT}%{REQUEST_FILENAME} -f [OR]
     RewriteCond %{DOCUMENT_ROOT}%{REQUEST_FILENAME} -d
     RewriteRule ^ - [L]
     RewriteRule ^ /index.html [L]
   </IfModule>
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/hotel-website/dist;

       location / {
           try_files $uri /index.html;
       }

       # Cache static files
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

---

## 🔐 Production Security Checklist

- [ ] Enable HTTPS/SSL
- [ ] Configure CORS headers if needed
- [ ] Set security headers:
  ```
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  ```
- [ ] Implement rate limiting
- [ ] Validate and sanitize all forms
- [ ] Use environment variables for sensitive data
- [ ] Enable CSP (Content Security Policy)
- [ ] Regular security updates

## 📊 Performance Optimization

**Optimize before deployment:**

```bash
# Check bundle size
npm run build -- --report

# Or use Vite's analyzer
npm run build -- --analyze
```

**Recommended optimizations:**

1. **Code splitting** - Vite does this automatically
2. **Image optimization** - Use modern formats (WebP)
3. **Lazy loading** - React Router code splitting
4. **Compression** - Gzip enabled by default on most platforms
5. **Caching** - Set appropriate cache headers

---

## 🔄 CI/CD Pipeline

**Example GitHub Actions workflow:**

```yaml
name: Build and Test

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run type-check
      - run: npm run build
      - run: npm run preview &
      - name: Upload build
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/
```

---

## 🚨 Troubleshooting Deployments

### Build fails with "Module not found"
- Ensure all dependencies are listed in `package.json`
- Check import paths (use `@` alias correctly)
- Clear cache: `rm -rf node_modules && npm install`

### Routes don't work after deployment
- Ensure `index.html` is served for all routes
- Check base URL configuration in `vite.config.ts`
- Verify rewrite rules on server

### Static assets return 404
- Check asset paths in built files
- Verify public folder configuration
- Ensure assets are copied during build

### Slow performance
- Check bundle size
- Enable compression
- Configure proper caching headers
- Use CDN for static assets

---

## 📞 Support & Monitoring

**Set up monitoring:**

1. **Error tracking** - Sentry, LogRocket
2. **Performance** - Google Analytics, Datadog
3. **Uptime monitoring** - Uptime Robot, StatusPage

**Example Sentry integration:**

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
});
```

---

## 🔄 Rollback Procedures

**For Vercel:**
- Go to Deployments
- Click the previous deployment
- Click "Redeploy"

**For other platforms:**
- Keep previous builds backed up
- Document deployment versions
- Use git tags for releases

---

Deployment successful! 🎉
