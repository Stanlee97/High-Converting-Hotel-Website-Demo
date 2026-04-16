# Project Setup Guide

This guide covers everything needed to set up the hotel website project for development, testing, and deployment.

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js 18.0 or higher** - [Download](https://nodejs.org/)
  ```bash
  node --version  # Should be v18.0.0 or higher
  ```
- **npm 9.0 or higher** - Comes with Node.js
  ```bash
  npm --version   # Should be v9.0.0 or higher
  ```
- **Git** (optional, for version control) - [Download](https://git-scm.com/)
- **A code editor** - [VS Code](https://code.visualstudio.com/) recommended

## 🚀 Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:5173/` and you should see the website running!

## 📦 Project Setup

### Step-by-Step Installation

#### 1. **Extract or Clone Project**
```bash
cd "High-Converting Hotel Website"
```

#### 2. **Install Dependencies**
```bash
npm install
```
This creates a `node_modules` folder with all required packages (takes 1-2 minutes).

#### 3. **Verify Installation**
```bash
npm run type-check
```
Should output no errors.

#### 4. **Start Development**
```bash
npm run dev
```

You'll see output like:
```
  VITE v6.4.2  ready in 787 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## 🛠 Available Commands

### Development
```bash
npm run dev              # Start dev server with hot-reload
npm run type-check      # Check TypeScript types
npm run type-check:watch # Watch for type errors
```

### Production
```bash
npm run build           # Create optimized production build
npm run preview         # Preview production build locally
```

## 📁 Understanding the Project Structure

```
hotel-website/
├── src/
│   ├── main.tsx                 # App entry point
│   ├── app/
│   │   ├── App.tsx             # Root component
│   │   ├── routes.tsx          # Route definitions
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx      # Main layout wrapper
│   │   │   ├── BookingWidget.tsx
│   │   │   ├── figma/          # Generated Figma components
│   │   │   └── ui/             # Radix UI components
│   │   └── pages/              # Page-level components
│   │       ├── HomePage.tsx
│   │       ├── RoomsPage.tsx
│   │       └── ...
│   ├── styles/                 # Global styles
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── imports/                # Static assets
├── dist/                       # Build output (generated)
├── package.json               # Dependencies & scripts
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
├── postcss.config.mjs         # PostCSS configuration
├── index.html                 # HTML entry point
├── .gitignore                 # Git ignore rules
├── .env.example               # Environment variables template
└── README.md                  # Project documentation
```

## 🔧 Development Workflow

### Creating a New Component

1. **Create component file** in `src/app/components/`:
```typescript
// src/app/components/MyComponent.tsx
import React from 'react';

export function MyComponent() {
  return <div>My Component</div>;
}
```

2. **Import and use** in your page or component:
```typescript
import { MyComponent } from '../components/MyComponent';

export function HomePage() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

### Adding a New Route

1. **Create page component** in `src/app/pages/`:
```typescript
// src/app/pages/NewPage.tsx
export function NewPage() {
  return <div>New Page Content</div>;
}
```

2. **Add route** in `src/app/routes.tsx`:
```typescript
import { NewPage } from './pages/NewPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      // ... existing routes
      { path: 'new-page', Component: NewPage },
    ],
  },
]);
```

3. **Add navigation link** to `Navbar.tsx`:
```typescript
const navLinks = [
  // ... existing links
  { to: '/new-page', label: 'New Page' },
];
```

### Styling Components

The project uses **Tailwind CSS** for styling:

```typescript
export function MyComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900">Hello World</h1>
      </div>
    </div>
  );
}
```

**Color System:**
- Primary Navy: `#0C1B33` (use class `bg-[#0C1B33]`)
- Accent Gold: `#C9A84C` (use class `bg-[#C9A84C]`)
- Cream: `#F8F4EC` (use class `bg-[#F8F4EC]`)

## 🐛 Troubleshooting

### Issue: "Port 5173 already in use"
**Solution:** Vite will automatically use the next available port. Check terminal output for the actual URL.

### Issue: "Module not found" errors
**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors
**Solution:**
```bash
# Check for type errors
npm run type-check

# Watch for changes
npm run type-check:watch
```

### Issue: Changes not reflecting in browser
**Solution:**
- Restart dev server: Press `Ctrl+C` and `npm run dev`
- Hard refresh browser: `Ctrl+Shift+R`
- Clear browser cache

### Issue: Build fails
**Solution:**
1. Ensure all TypeScript errors are fixed: `npm run type-check`
2. Clear Vite cache: `rm -rf dist`
3. Reinstall dependencies: `rm -rf node_modules && npm install`
4. Try building again: `npm run build`

## 📝 Development Tips

### 1. Use TypeScript Strictly
Always add proper types:
```typescript
// ❌ Bad
const data = getData();

// ✅ Good
interface User {
  name: string;
  email: string;
}

const data: User[] = getData();
```

### 2. Extract Magic Numbers
```typescript
// ❌ Bad
const delay = 86400000;

// ✅ Good
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const delay = ONE_DAY_MS;
```

### 3. Use Consistent Naming
- Components: `PascalCase` (e.g., `BookingWidget`)
- Variables/functions: `camelCase` (e.g., `getBookings()`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `API_BASE_URL`)

### 4. Organize Imports
```typescript
// 1. React/third-party imports
import React, { useState } from 'react';
import { Link } from 'react-router';

// 2. Local component imports
import { Navbar } from '../components/Navbar';

// 3. Type imports
import type { User } from '../types';

// 4. Styles
import './styles.css';
```

## 🔒 Environment Variables

Create a `.env` file in the project root:

```env
# Copy from .env.example as a template
# VITE_API_URL=http://localhost:3000
# VITE_ANALYTICS_ID=your_id
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router Docs](https://reactrouter.com/)
- [Radix UI Components](https://www.radix-ui.com/docs/primitives/overview/introduction)

## 🤝 Code Quality

### Pre-commit Checklist
- [ ] Code compiles: `npm run type-check`
- [ ] Build succeeds: `npm run build`
- [ ] App runs: `npm run dev`
- [ ] No console errors
- [ ] Responsive design works (test on mobile view)

### Commit Message Format
```
feat: add booking confirmation email
fix: resolve navigation menu alignment
docs: update deployment guide
style: format BookingWidget component
refactor: extract booking logic to hooks
```

## 🚀 Next Steps

1. **Start dev server**: `npm run dev`
2. **Explore the codebase**: Check out the components in `src/app/components`
3. **Make changes**: Try modifying a component and see hot-reload in action
4. **Read the documentation**: Check `README.md` and `DEPLOYMENT.md`
5. **Deploy**: Follow the deployment guide when ready

---

✨ Happy coding! If you have questions, refer to the documentation or continue troubleshooting section above.
