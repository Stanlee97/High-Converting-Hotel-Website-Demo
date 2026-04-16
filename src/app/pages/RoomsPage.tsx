import { useState } from 'react';
import { Link } from 'react-router';
import { Wifi, Tv, Wind, Coffee, Bath, Car, Shield, Zap, ChevronRight, Users, BedDouble } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const BRAND_NAVY = '#0C1B33';
const BRAND_GOLD = '#C9A84C';
const BRAND_CREAM = '#F8F4EC';

const rooms = [
  {
    id: 'standard',
    name: 'Standard Room',
    tagline: 'Comfort without compromise',
    price: 18000,
    capacity: '1–2 Guests',
    size: '25 sqm',
    img: 'https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
    description:
      'Our Standard Room is designed for travelers who want comfort and functionality. Every detail has been crafted to ensure a restful night\'s sleep with modern amenities.',
    amenities: [
      { icon: Wifi, label: 'Free High-Speed WiFi' },
      { icon: Tv, label: 'Flat Screen TV' },
      { icon: Wind, label: 'Air Conditioning' },
      { icon: Bath, label: 'Private Bathroom' },
      { icon: Coffee, label: 'Tea & Coffee Maker' },
      { icon: Zap, label: '24/7 Power Supply' },
    ],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    tagline: 'Elevated comfort & style',
    price: 32000,
    capacity: '1–2 Guests',
    size: '40 sqm',
    img: 'https://images.unsplash.com/photo-1631048835153-946fa051ceee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
    description:
      'The Deluxe Suite elevates your stay with premium furnishings, a dedicated sitting area, and stunning city views. Perfect for guests who desire extra space and style.',
    amenities: [
      { icon: Wifi, label: 'Free High-Speed WiFi' },
      { icon: Tv, label: '55" Smart TV' },
      { icon: Wind, label: 'Climate Control AC' },
      { icon: Bath, label: 'Luxury Bathroom' },
      { icon: Coffee, label: 'Mini Bar & Coffee' },
      { icon: Car, label: 'Free Parking' },
    ],
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    tagline: 'Power meets premium living',
    price: 48000,
    capacity: '2 Guests',
    size: '55 sqm',
    img: 'https://images.unsplash.com/photo-1746549843996-5153a7a27953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
    description:
      'Designed for the discerning business traveler, the Executive Suite features a dedicated workspace, premium bedding, and all the technology you need to stay productive.',
    amenities: [
      { icon: Wifi, label: 'Premium WiFi' },
      { icon: Tv, label: '65" Smart TV' },
      { icon: Wind, label: 'Climate Control' },
      { icon: Bath, label: 'Jacuzzi Bath' },
      { icon: Shield, label: 'In-room Safe' },
      { icon: Coffee, label: 'Full Mini Bar' },
    ],
  },
  {
    id: 'presidential',
    name: 'Presidential Suite',
    tagline: 'The pinnacle of luxury',
    price: 75000,
    capacity: '2–4 Guests',
    size: '80 sqm',
    img: 'https://images.unsplash.com/photo-1746549843996-5153a7a27953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
    description:
      'Our Presidential Suite is the crown jewel of Brandon Hotel. Offering panoramic views, a private lounge, king-size bed, and butler service for a truly royal experience.',
    amenities: [
      { icon: Wifi, label: 'Dedicated WiFi' },
      { icon: Tv, label: 'Home Theater' },
      { icon: Wind, label: 'Smart Climate' },
      { icon: Bath, label: 'Double Jacuzzi' },
      { icon: Shield, label: 'Butler Service' },
      { icon: Car, label: 'Airport Transfer' },
    ],
  },
  {
    id: 'apartment',
    name: 'Luxury Apartment',
    tagline: 'Home away from home',
    price: 65000,
    capacity: '2–6 Guests',
    size: '100 sqm',
    img: 'https://images.unsplash.com/photo-1550567418-1bd5c7712337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
    description:
      'Perfect for extended stays and families, our Luxury Apartments offer two bedrooms, a full kitchenette, living area, and dining space — all the comforts of a premium home.',
    amenities: [
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Tv, label: 'Multiple TVs' },
      { icon: Wind, label: 'Central AC' },
      { icon: Bath, label: '2 Bathrooms' },
      { icon: Coffee, label: 'Full Kitchenette' },
      { icon: Car, label: 'Secure Parking' },
    ],
  },
];

export function RoomsPage() {
  const [_selected] = useState<string | null>(null);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 text-center"
        style={{ backgroundColor: BRAND_NAVY }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Accommodations</p>
          <h1 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            Rooms & Suites
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.7 }}>
            Choose from our thoughtfully designed rooms — each crafted to deliver comfort, elegance, and a memorable stay.
          </p>
        </div>
      </section>

      {/* Amenities Bar */}
      <div className="py-6 border-b" style={{ backgroundColor: BRAND_CREAM, borderColor: '#e5ddc8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: Wifi, label: 'Free WiFi' },
            { icon: Tv, label: 'Smart TVs' },
            { icon: Wind, label: 'Air Conditioning' },
            { icon: Car, label: 'Free Parking' },
            { icon: Zap, label: '24/7 Power' },
            { icon: Coffee, label: 'Room Service' },
            { icon: Shield, label: 'Security' },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2 text-sm" style={{ color: '#4b5563' }}>
              <Icon size={16} style={{ color: BRAND_GOLD }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Rooms List */}
      <section className="py-20" style={{ backgroundColor: BRAND_CREAM }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {rooms.map((room, idx) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`h-72 lg:h-auto min-h-80 overflow-hidden ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <ImageWithFallback
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: BRAND_GOLD, fontWeight: 600 }}>
                    {room.tagline}
                  </p>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: BRAND_NAVY }}>
                    {room.name}
                  </h2>

                  <div className="flex items-center gap-4 mt-3 mb-5">
                    <span className="flex items-center gap-1.5 text-sm" style={{ color: '#6b7280' }}>
                      <Users size={15} style={{ color: BRAND_GOLD }} /> {room.capacity}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm" style={{ color: '#6b7280' }}>
                      <BedDouble size={15} style={{ color: BRAND_GOLD }} /> {room.size}
                    </span>
                  </div>

                  <p className="leading-relaxed mb-6" style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                    {room.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    {room.amenities.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 text-sm" style={{ color: '#4b5563' }}>
                        <Icon size={15} style={{ color: BRAND_GOLD }} />
                        {label}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-xs" style={{ color: '#9ca3af' }}>From</span>
                      <div className="flex items-baseline gap-1">
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: BRAND_NAVY }}>
                          ₦{room.price.toLocaleString()}
                        </span>
                        <span className="text-sm" style={{ color: '#9ca3af' }}>/night</span>
                      </div>
                    </div>
                    <Link
                      to={`/booking?roomType=${room.id}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: BRAND_GOLD, fontWeight: 600 }}
                    >
                      Reserve Now <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: BRAND_NAVY }}>
              Hotel Policies
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Check-In', desc: 'Check-in time is from 12:00 PM noon. Early check-in is subject to availability and may incur an additional charge.' },
              { title: 'Check-Out', desc: 'Check-out time is 12:00 PM noon. Late check-out requests must be made before 9 AM on departure day.' },
              { title: 'Cancellation', desc: 'Free cancellation up to 24 hours before arrival. Cancellations within 24 hours may incur a one-night charge.' },
            ].map(({ title, desc }, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: BRAND_CREAM, border: '1px solid #e5ddc8' }}>
                <h3 className="mb-3" style={{ color: BRAND_NAVY, fontWeight: 600 }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: BRAND_NAVY }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700 }}>
            Ready to Book Your Stay?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Secure your preferred room today. Our team is available 24/7 to assist you.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: BRAND_GOLD, fontWeight: 700, letterSpacing: '0.06em' }}
          >
            BOOK A ROOM NOW
          </Link>
        </div>
      </section>
    </div>
  );
}
