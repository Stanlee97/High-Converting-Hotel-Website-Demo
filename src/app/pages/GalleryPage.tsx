import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const BRAND_NAVY = '#0C1B33';

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const allImages: GalleryImage[] = [
  // Hotel Exterior
  {
    src: 'https://images.unsplash.com/photo-1745725427804-4d94df0c5eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Hotel Night View',
    category: 'Exterior',
  },
  // Rooms
  {
    src: 'https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Standard Room',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1631048835153-946fa051ceee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Deluxe Suite',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1746549843996-5153a7a27953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Executive Suite',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1550567418-1bd5c7712337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Luxury Apartment',
    category: 'Rooms',
  },
  // Restaurant
  {
    src: 'https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Restaurant Dining',
    category: 'Restaurant',
  },
  {
    src: 'https://images.unsplash.com/photo-1593787614887-004b2ffb0057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Nigerian Cuisine',
    category: 'Restaurant',
  },
  {
    src: 'https://images.unsplash.com/photo-1665332195309-9d75071138f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Local Dishes',
    category: 'Restaurant',
  },
  {
    src: 'https://images.unsplash.com/photo-1772463099737-a482008045f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Bar & Cocktails',
    category: 'Restaurant',
  },
  {
    src: 'https://images.unsplash.com/photo-1772465237136-37f5722ddf49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Breakfast Buffet',
    category: 'Restaurant',
  },
  // Facilities
  {
    src: 'https://images.unsplash.com/photo-1774192621035-20d11389f781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Hotel Lobby',
    category: 'Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1769428003672-296f923d19b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Swimming Pool',
    category: 'Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1690977696386-38014f4cacb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    alt: 'Secure Parking',
    category: 'Facilities',
  },
];

const categories = ['All', 'Exterior', 'Rooms', 'Restaurant', 'Facilities'];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? allImages : allImages.filter((img) => img.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section className="pt-36 pb-16 text-center" style={{ backgroundColor: BRAND_NAVY }}>
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#C9A84C', fontWeight: 600 }}>Visual Stories</p>
          <h1 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            Our Gallery
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
            Explore the beauty and elegance of SDM Tavern — from our luxurious rooms to our vibrant restaurant and stunning facilities.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="py-6 sticky top-[64px] md:top-[80px] z-30 border-b" style={{ backgroundColor: '#fff', borderColor: '#e5ddc8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                backgroundColor: activeCategory === cat ? BRAND_NAVY : '#F8F4EC',
                color: activeCategory === cat ? '#fff' : '#6b7280',
                fontWeight: activeCategory === cat ? 600 : 400,
                border: `1px solid ${activeCategory === cat ? BRAND_NAVY : '#e5ddc8'}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-12" style={{ backgroundColor: '#F8F4EC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(idx)}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(12,27,51,0.85), transparent)' }}
                >
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20" style={{ color: '#9ca3af' }}>
              No images in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white z-10 hover:bg-white/10 transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={28} />
          </button>
          <div className="max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-lg max-h-[85vh]"
            />
            <p className="text-center text-sm mt-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {filtered[lightboxIndex].alt} — {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}