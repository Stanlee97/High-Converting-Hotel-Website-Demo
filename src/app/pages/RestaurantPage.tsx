import { Clock, UtensilsCrossed, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const BRAND_NAVY = '#0C1B33';
const BRAND_GOLD = '#C9A84C';
const BRAND_CREAM = '#F8F4EC';

const menuCategories = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    icon: '☕',
    items: [
      { name: 'Continental Breakfast', desc: 'Bread, eggs, sausage, juice & coffee', price: '₦2,500' },
      { name: 'Full Nigerian Breakfast', desc: 'Ogi, akara, fried plantain, eggs & zobo', price: '₦2,000' },
      { name: 'Pancake Stack', desc: 'Fluffy pancakes with maple syrup & berries', price: '₦2,200' },
      { name: 'Fruit Bowl & Yogurt', desc: 'Fresh seasonal fruits with Greek yogurt', price: '₦1,800' },
    ],
  },
  {
    id: 'local',
    label: 'Local Dishes',
    icon: '🍲',
    items: [
      { name: 'Jollof Rice & Chicken', desc: 'Perfectly seasoned jollof with grilled chicken', price: '₦3,500' },
      { name: 'Egusi Soup & Pounded Yam', desc: 'Rich egusi with assorted meat & stock fish', price: '₦4,000' },
      { name: 'Pepper Soup', desc: 'Goat meat pepper soup with yam', price: '₦3,200' },
      { name: 'Eba & Okra Soup', desc: 'Okra soup with assorted fish & crayfish', price: '₦3,000' },
    ],
  },
  {
    id: 'continental',
    label: 'Continental',
    icon: '🍽️',
    items: [
      { name: 'Grilled Tilapia Fillet', desc: 'Grilled fish with vegetables & garlic sauce', price: '₦5,500' },
      { name: 'Pasta Carbonara', desc: 'Creamy pasta with bacon and parmesan', price: '₦4,500' },
      { name: 'Beef Burger & Chips', desc: 'Double beef patty with fresh coleslaw', price: '₦4,000' },
      { name: 'Mixed Grill Platter', desc: 'Chicken, beef, sausage & grilled vegetables', price: '₦7,000' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks & Bar',
    icon: '🍹',
    items: [
      { name: 'Fresh Chapman', desc: 'Classic Nigerian refresher with Fanta, Ribena & bitters', price: '₦1,200' },
      { name: 'Zobo Delight', desc: 'Chilled hibiscus drink with ginger & pineapple', price: '₦800' },
      { name: 'Premium Cocktails', desc: 'Signature cocktails crafted by our mixologist', price: 'From ₦2,500' },
      { name: 'Fresh Fruit Juice', desc: 'Watermelon, pineapple, or orange — freshly pressed', price: '₦1,000' },
    ],
  },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', alt: 'Restaurant dining room' },
  { src: 'https://images.unsplash.com/photo-1593787614887-004b2ffb0057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', alt: 'Nigerian cuisine' },
  { src: 'https://images.unsplash.com/photo-1665332195309-9d75071138f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', alt: 'African local dishes' },
  { src: 'https://images.unsplash.com/photo-1772463099737-a482008045f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', alt: 'Hotel bar and cocktails' },
  { src: 'https://images.unsplash.com/photo-1772465237136-37f5722ddf49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600', alt: 'Breakfast buffet' },
];

export function RestaurantPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400"
          alt="Brandon Hotel Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(12,27,51,0.95) 0%, rgba(12,27,51,0.4) 60%, transparent 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Fine Dining</p>
          <h1 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            Brandon Restaurant
          </h1>
          <p className="max-w-xl" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
            Where every meal tells a story. From authentic Nigerian delicacies to continental favorites — dine with us and experience culinary excellence.
          </p>
        </div>
      </section>

      {/* Info Bar */}
      <div className="py-6" style={{ backgroundColor: BRAND_NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: Clock, text: 'Open Daily: 6:00 AM – 11:00 PM' },
            { icon: UtensilsCrossed, text: 'Nigerian & Continental Cuisine' },
            { icon: Users, text: 'Capacity: Up to 150 Guests' },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <Icon size={16} style={{ color: BRAND_GOLD }} />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>About Our Restaurant</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY, lineHeight: 1.3 }}>
                A Dining Experience That Exceeds Expectations
              </h2>
              <p className="mt-5 leading-relaxed mb-5" style={{ color: '#6b7280' }}>
                Brandon Restaurant is more than just a place to eat — it's an experience. Our skilled chefs combine the finest local ingredients with international cooking techniques to create unforgettable dishes.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#6b7280' }}>
                Whether you're a hotel guest or a walk-in visitor from the city, our restaurant welcomes you with warm hospitality and a menu that celebrates the very best of Nigerian and continental cuisine.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '50+', label: 'Menu Items' },
                  { num: '150', label: 'Seating Capacity' },
                  { num: '10+', label: 'Expert Chefs' },
                  { num: '5★', label: 'Guest Rating' },
                ].map(({ num, label }, i) => (
                  <div key={i} className="p-4 rounded-xl text-center" style={{ backgroundColor: BRAND_CREAM, border: '1px solid #e5ddc8' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: BRAND_GOLD }}>{num}</div>
                    <div className="text-xs" style={{ color: '#6b7280' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-56">
                <ImageWithFallback src="https://images.unsplash.com/photo-1593787614887-004b2ffb0057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500" alt="Food" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-56 mt-8">
                <ImageWithFallback src="https://images.unsplash.com/photo-1665332195309-9d75071138f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500" alt="African food" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-44">
                <ImageWithFallback src="https://images.unsplash.com/photo-1772465237136-37f5722ddf49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500" alt="Breakfast" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-44 -mt-8">
                <ImageWithFallback src="https://images.unsplash.com/photo-1772463099737-a482008045f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500" alt="Drinks" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20" style={{ backgroundColor: BRAND_CREAM }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: BRAND_GOLD, fontWeight: 600 }}>What We Serve</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY }}>
              Menu Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuCategories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div
                  className="px-8 py-5 flex items-center gap-3"
                  style={{ borderBottom: '1px solid #f0ece2' }}
                >
                  <span style={{ fontSize: '1.6rem' }}>{cat.icon}</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 700, color: BRAND_NAVY }}>
                    {cat.label}
                  </h3>
                </div>
                <div className="divide-y" style={{ borderColor: '#f5f2ec' }}>
                  {cat.items.map((item, i) => (
                    <div key={i} className="px-8 py-4 flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-semibold text-sm mb-0.5" style={{ color: BRAND_NAVY }}>{item.name}</p>
                        <p className="text-xs" style={{ color: '#9ca3af' }}>{item.desc}</p>
                      </div>
                      <span className="text-sm font-semibold shrink-0" style={{ color: BRAND_GOLD }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: '#9ca3af' }}>
            * Menu prices are subject to change. Ask our staff for the full menu.
          </p>
        </div>
      </section>

      {/* Dining Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Atmosphere</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY }}>
              Dining Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 h-80' : 'h-36'}`}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table Reservation CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: BRAND_NAVY }}>
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Reserve a Table</p>
          <h2 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700 }}>
            Join Us for an Exceptional Meal
          </h2>
          <p className="mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Whether it's a romantic dinner, a business lunch, or a family celebration, Brandon Restaurant is the perfect setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2348012345678"
              className="px-8 py-4 rounded-xl transition-all duration-200 hover:opacity-90 text-white"
              style={{ backgroundColor: BRAND_GOLD, fontWeight: 700 }}
            >
              Call to Reserve a Table
            </a>
            <a
              href={`https://wa.me/2348012345678?text=${encodeURIComponent("Hello! I'd like to reserve a table at Brandon Restaurant.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#25D366', fontWeight: 700 }}
            >
              WhatsApp Reservation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
