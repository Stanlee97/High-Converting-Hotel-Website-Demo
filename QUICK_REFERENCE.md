# Quick Reference Guide

## 🚀 Start Here

```bash
npm install    # Install dependencies (first time only)
npm run dev    # Start development server → http://localhost:5173/
```

## 📌 Common Commands

```bash
# Development
npm run dev                  # Start dev server with hot-reload
npm run type-check         # Check for TypeScript errors
npm run type-check:watch   # Watch for TypeScript errors

# Production
npm run build              # Create production build (output: dist/)
npm run preview            # Preview production build locally

# Maintenance
npm audit                  # Check for security vulnerabilities
npm audit fix              # Auto-fix vulnerabilities
npm outdated               # Check for outdated packages
npm update                 # Update packages
```

## 📂 Key Folders

| Folder | Purpose |
|--------|---------|
| `src/app/pages/` | Page components (HomePage, RoomsPage, etc.) |
| `src/app/components/` | Reusable UI components |
| `src/styles/` | Global CSS and Tailwind configuration |
| `dist/` | Production build output |
| `node_modules/` | Installed packages |

## 🌐 Routes

```
/                    Home page
/rooms              Room catalog
/restaurant         Restaurant info
/booking            Booking page
/gallery            Gallery
/about              About hotel
/contact            Contact form
```

## 🎨 Brand Colors

```
Navy Blue:    #0C1B33
Gold Accent:  #C9A84C
Cream:        #F8F4EC
```

Use in Tailwind:
```html
<div className="bg-[#0C1B33]">Navy</div>
<div className="bg-[#C9A84C]">Gold</div>
<div className="bg-[#F8F4EC]">Cream</div>
```

## 📱 Device Breakpoints (Tailwind)

```
sm: 640px    →  sm:text-lg
md: 768px    →  md:flex
lg: 1024px   →  lg:text-2xl
xl: 1280px   →  xl:px-8
2xl: 1536px  →  2xl:text-4xl
```

## 🔗 Import Path Shortcut

Instead of:
```typescript
import { MyComponent } from '../../components/MyComponent';
```

Use:
```typescript
import { MyComponent } from '@/app/components/MyComponent';
```

## 📊 Build Size

| File | Size | Gzipped |
|------|------|---------|
| JavaScript | 345 KB | 101 KB |
| CSS | 99 KB | 16 KB |
| **Total** | **444 KB** | **117 KB** |

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Server won't start | Kill port: `npx kill-port 5173` |
| Changes not showing | Hard refresh: `Ctrl+Shift+R` |
| Type errors | Run: `npm run type-check` |
| Build fails | Clear: `rm -rf dist` then rebuild |
| Import errors | Check path with `@/` alias in `tsconfig.json` |

## 🚀 Deployment Platforms

| Platform | Command | Links |
|----------|---------|-------|
| Vercel | Push to GitHub | [vercel.com](https://vercel.com) |
| Netlify | Connect Git repo | [netlify.com](https://netlify.com) |
| Docker | `docker build .` | See `DEPLOYMENT.md` |
| AWS S3 | `npm run build && aws s3 sync` | See `DEPLOYMENT.md` |
| GitHub Pages | Configure Actions | See `DEPLOYMENT.md` |

See `DEPLOYMENT.md` for detailed instructions.

## 📖 Documentation Links

- **Setup Guide:** `SETUP.md`
- **Deployment Guide:** `DEPLOYMENT.md`
- **Full README:** `README.md`
- **Project Status:** `PROJECT_STATUS.md`

## 🔧 Configuration Files

- `vite.config.ts` - Build tool config
- `tsconfig.json` - TypeScript config
- `tailwind.config.mjs` - Tailwind CSS config
- `postcss.config.mjs` - PostCSS config
- `.env.example` - Environment variables template
- `.prettierrc.json` - Code formatting rules

## 📦 Main Dependencies

- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite 6.4** - Build tool
- **React Router 7** - Routing
- **Radix UI** - Accessible components

See `package.json` for complete list.

## 💡 Pro Tips

1. **Use CSS variables for dynamic colors:**
   ```typescript
   const BRAND_NAVY = '#0C1B33';
   style={{ color: BRAND_NAVY }}
   ```

2. **Extract repeated logic into hooks:**
   ```typescript
   const { isOpen, setIsOpen } = useState(false);
   ```

3. **Use the `@` import alias for cleaner paths**

4. **Format code with Prettier:**
   Editor: Auto-format on save (enabled in VS Code)

5. **Check types often:**
   ```bash
   npm run type-check:watch  # Running in another terminal
   ```

## 🎯 Development Workflow Example

```bash
# 1. Start dev server
npm run dev

# 2. In another terminal, check types
npm run type-check:watch

# 3. Make changes to components
# (Hot reload happens automatically)

# 4. When ready to test production build:
npm run build
npm run preview

# 5. Before committing:
npm run type-check    # Ensure no type errors
git add .
git commit -m "feature: add new booking form"
```

## 🔒 Security Checklist

- ✅ No vulnerabilities (npm audit = 0)
- ✅ Dependencies updated
- ✅ TypeScript strict mode enabled
- ✅ Environment variables configured (via `.env`)
- ✅ Build optimized for production

---

**Need more help?** Check the documentation files or refer to the `SETUP.md` troubleshooting section.
