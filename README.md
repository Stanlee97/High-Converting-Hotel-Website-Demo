# High-Converting Hotel Website

A modern, responsive hotel website built with React, TypeScript, Tailwind CSS, and Vite. Features a fully functional booking system, room showcase, restaurant menu, gallery, and contact management.

## 🌟 Features

- **Responsive Design** - Mobile-first approach, optimized for all screen sizes
- **Booking System** - Complete booking widget with date and guest selection
- **Room Showcase** - Display different room types with pricing and features
- **Restaurant Page** - Menu and dining information
- **Gallery** - Masonry-style image gallery
- **Contact Management** - Contact forms with validation
- **About Section** - Hotel information and highlights
- **Performance Optimized** - Fast loading with Vite and optimized images
- **Accessible UI** - Built with Radix UI accessibility primitives

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn (npm recommended)

### Installation

1. **Clone or extract the project**
   ```bash
   cd "High-Converting Hotel Website"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   ```

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── main.tsx                 # Application entry point
├── app/
│   ├── App.tsx             # Root component with router setup
│   ├── routes.tsx          # Route configuration
│   ├── components/         # Reusable components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── BookingWidget.tsx    # Booking form
│   │   ├── StickyBookingBar.tsx # Fixed booking bar
│   │   ├── WhatsAppButton.tsx   # WhatsApp contact button
│   │   └── ui/             # UI component library (Radix UI)
│   └── pages/              # Page components
│       ├── HomePage.tsx
│       ├── RoomsPage.tsx
│       ├── RestaurantPage.tsx
│       ├── BookingPage.tsx
│       ├── GalleryPage.tsx
│       ├── AboutPage.tsx
│       └── ContactPage.tsx
├── styles/                 # Global styles
│   ├── index.css          # Main stylesheet
│   ├── tailwind.css       # Tailwind configuration
│   ├── theme.css          # Theme variables
│   └── fonts.css          # Custom fonts
└── imports/               # Static assets and imports
```

## 🛠 Development

### Type Checking

Check TypeScript compilation:

```bash
npm run type-check
```

Watch mode for TypeScript errors:

```bash
npm run type-check:watch
```

### Available Routes

- `/` - Home page with hero, rooms showcase, and highlights
- `/rooms` - Full room catalog with detailed information
- `/restaurant` - Restaurant information and menu
- `/booking` - Booking page with form and details
- `/gallery` - Image gallery
- `/about` - About the hotel
- `/contact` - Contact form

## 📦 Technologies Used

- **React 18.3** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite 6** - Ultra-fast build tool
- **React Router 7** - Client-side routing
- **Radix UI** - Accessible UI components
- **React Hook Form** - Form state management
- **Date-fns** - Date utilities
- **Lucide React** - Icon library
- **Recharts** - Chart library (if needed)

## 🌍 Deployment

### Vercel (Recommended)

1. Push your project to GitHub
2. Connect your repository to Vercel
3. Vercel auto-detects Vite configuration
4. Deploy with one click

### Netlify

1. Push your project to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

### Traditional Hosting (Apache, Nginx, etc.)

1. Run `npm run build` to create the production build
2. Upload the `dist/` folder to your hosting provider
3. Configure your web server to serve `index.html` for all routes (SPA routing)

#### Nginx Configuration Example

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html/dist;

    location / {
        try_files $uri /index.html;
    }
}
```

## 🔒 Environment Variables

Create a `.env` file in the project root (see `.env.example` for reference):

```env
# API Configuration
# VITE_API_URL=http://localhost:3000

# Analytics
# VITE_ANALYTICS_ID=your_analytics_id

# Feature Flags
# VITE_ENABLE_BOOKING=true
```

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will use the next available port automatically.

### Build Errors

- Clear `node_modules` and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- Ensure Node.js version is 18.0 or higher: `node --version`

### Type Errors

Run `npm run type-check` to see all TypeScript errors and fix them.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and improve the project for your needs.

## 📧 Support

For issues or questions, please contact the development team.

---

Built with ❤️ using React and modern web technologies.