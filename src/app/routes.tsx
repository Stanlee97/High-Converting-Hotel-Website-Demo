import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { BookingPage } from './pages/BookingPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'rooms', Component: RoomsPage },
      { path: 'restaurant', Component: RestaurantPage },
      { path: 'booking', Component: BookingPage },
      { path: 'gallery', Component: GalleryPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
