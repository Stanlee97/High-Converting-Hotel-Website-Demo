import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import {
  Car, Zap, UtensilsCrossed, CalendarDays, Users, Star,
  ChevronRight, Building2, ArrowRight, MapPin, Phone
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const BRAND_NAVY = '#0C1B33';
const BRAND_GOLD = '#C9A84C';
const BRAND_CREAM = '#F8F4EC';

const roomCategories = [
  {
    id: 1,
    name: 'Standard Room',
    desc: 'Cozy and well-appointed with all essential amenities for a comfortable stay.',
    price: '₦18,000',
    img: 'https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG90ZWwlMjByb29tJTIwYmVkJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2MjQ0OTY4fDA&ixlib=rb-4.1.0&q=80&w=600',
    features: ['King Bed', 'Air Con', 'Free WiFi', 'Private Bath'],
  },
  {
    id: 2,
    name: 'Deluxe Suite',
    desc: 'Spacious suite with premium furnishings and a dedicated sitting area.',
    price: '₦32,000',
    img: 'https://images.unsplash.com/photo-1631048835153-946fa051ceee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHN1aXRlJTIwYmVkcm9vbXxlbnwxfHx8fDE3NzYyNDQ5Njl8MA&ixlib=rb-4.1.0&q=80&w=600',
    features: ['King Bed', 'Sitting Area', 'City View', 'Mini Bar'],
  },
  {
    id: 3,
    name: 'Executive Suite',
    desc: 'Ideal for business travelers — a luxury room with a dedicated work area.',
    price: '₦48,000',
    img: 'https://images.unsplash.com/photo-1746549843996-5153a7a27953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHByZXNpZGVudGlhbCUyMHN1aXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc3NjI0MDc0MHww&ixlib=rb-4.1.0&q=80&w=600',
    features: ['Work Desk', 'Lounge Chair', 'HD TV', 'Room Service'],
  },
  {
    id: 4,
    name: 'Luxury Apartment',
    desc: 'A fully serviced apartment — perfect for extended stays and families.',
    price: '₦65,000',
    img: 'https://images.unsplash.com/photo-1550567418-1bd5c7712337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGFwYXJ0bWVudCUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc2MjQ0OTcwfDA&ixlib=rb-4.1.0&q=80&w=600',
    features: ['Living Room', 'Kitchenette', '2 Bedrooms', 'Dining Area'],
  },
];

const highlights = [
  { icon: Star, label: 'Premium Rooms', desc: 'Elegantly furnished rooms with modern amenities' },
  { icon: UtensilsCrossed, label: 'Fine Dining', desc: 'In-house restaurant serving local & continental cuisine' },
  { icon: Car, label: 'Secure Parking', desc: '24/7 monitored and secure car park on premises' },
  { icon: Zap, label: '24/7 Power Supply', desc: 'Uninterrupted power supply with backup generators' },
  { icon: Building2, label: 'Event Hosting', desc: 'State-of-the-art halls for conferences & celebrations' },
];

const reviews = [
  { name: 'Adebayo O.', rating: 5, text: 'Absolutely exceptional experience! The rooms are clean, staff are friendly, and the restaurant food was outstanding. Best hotel in Ogbomosho!', date: '2 weeks ago' },
  { name: 'Chioma N.', rating: 5, text: 'Stayed here for a business trip. The WiFi was fast, room was spotless, and they never had a power outage. Will definitely come back!', date: '1 month ago' },
  { name: 'Emmanuel A.', rating: 5, text: 'Hosted our family event here and it was perfect. The hall was beautifully arranged and the catering service was top notch!', date: '3 weeks ago' },
  { name: 'Fatima K.', rating: 4, text: 'Great hospitality. The room was comfortable and the breakfast buffet had great variety. Very good value for money.', date: '1 month ago' },
];

// Gallery images - uncomment when gallery section is implemented
// const galleryImages = [
//   { src: 'https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', label: 'Standard Room', span: 'col-span-1' },
//   { src: 'https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', label: 'Restaurant', span: 'col-span-1 row-span-2' },
//   { src: 'https://images.unsplash.com/photo-1774192621035-20d11389f781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', label: 'Lobby', span: 'col-span-1' },
//   { src: 'https://images.unsplash.com/photo-1631048835153-946fa051ceee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', label: 'Deluxe Suite', span: 'col-span-1' },
//   { src: 'https://images.unsplash.com/photo-1769428003672-296f923d19b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', label: 'Pool Area', span: 'col-span-1' },
// ];

export function HomePage() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [booking, setBooking] = useState({
    checkIn: today,
    checkOut: tomorrow,
    guests: '1',
    roomType: 'standard',
  });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(booking);
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Brandon Hotel"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(12,27,51,0.75) 0%, rgba(12,27,51,0.6) 50%, rgba(12,27,51,0.85) 100%)' }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 pt-24 pb-8 max-w-4xl mx-auto">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest mb-6 uppercase"
            style={{ backgroundColor: 'rgba(201,168,76,0.2)', color: BRAND_GOLD, border: `1px solid ${BRAND_GOLD}`, fontWeight: 600 }}
          >
            ★ Welcome to Ogbomosho's Premier Hotel
          </div>
          <h1
            className="text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 1.15 }}
          >
            Brandon Hotel
            <span style={{ color: BRAND_GOLD }}> & </span>
            Apartments
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
            Where luxury meets comfort. Experience world-class hospitality, fine dining, and exceptional service in the heart of Ogbomosho.
          </p>

          {/* Booking Form */}
          <form onSubmit={handleBook}>
            <div
              className="rounded-2xl p-5 shadow-2xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(10px)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Check In */}
                <div className="text-left">
                  <label className="text-xs font-semibold tracking-wider uppercase block mb-1.5" style={{ color: BRAND_NAVY }}>
                    Check-In
                  </label>
                  <div className="relative">
                    <CalendarDays size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: BRAND_GOLD }} />
                    <input
                      type="date"
                      value={booking.checkIn}
                      min={today}
                      onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 rounded-lg border text-sm"
                      style={{ borderColor: '#e0ddd6', backgroundColor: '#fafafa', color: BRAND_NAVY }}
                      required
                    />
                  </div>
                </div>

                {/* Check Out */}
                <div className="text-left">
                  <label className="text-xs font-semibold tracking-wider uppercase block mb-1.5" style={{ color: BRAND_NAVY }}>
                    Check-Out
                  </label>
                  <div className="relative">
                    <CalendarDays size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: BRAND_GOLD }} />
                    <input
                      type="date"
                      value={booking.checkOut}
                      min={booking.checkIn}
                      onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 rounded-lg border text-sm"
                      style={{ borderColor: '#e0ddd6', backgroundColor: '#fafafa', color: BRAND_NAVY }}
                      required
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="text-left">
                  <label className="text-xs font-semibold tracking-wider uppercase block mb-1.5" style={{ color: BRAND_NAVY }}>
                    Guests
                  </label>
                  <div className="relative">
                    <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: BRAND_GOLD }} />
                    <select
                      value={booking.guests}
                      onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                      className="w-full pl-9 pr-3 py-3 rounded-lg border text-sm appearance-none"
                      style={{ borderColor: '#e0ddd6', backgroundColor: '#fafafa', color: BRAND_NAVY }}
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Room Type */}
                <div className="text-left">
                  <label className="text-xs font-semibold tracking-wider uppercase block mb-1.5" style={{ color: BRAND_NAVY }}>
                    Room Type
                  </label>
                  <select
                    value={booking.roomType}
                    onChange={(e) => setBooking({ ...booking, roomType: e.target.value })}
                    className="w-full px-3 py-3 rounded-lg border text-sm appearance-none"
                    style={{ borderColor: '#e0ddd6', backgroundColor: '#fafafa', color: BRAND_NAVY }}
                  >
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Suite</option>
                    <option value="executive">Executive Suite</option>
                    <option value="apartment">Luxury Apartment</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: BRAND_GOLD, fontWeight: 700, letterSpacing: '0.08em', fontSize: '1rem' }}
              >
                BOOK NOW — CHECK AVAILABILITY
              </button>
            </div>
          </form>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8" style={{ backgroundColor: 'rgba(201,168,76,0.5)' }} />
          <div className="w-5 h-5 rounded-full border-2" style={{ borderColor: BRAND_GOLD }} />
        </div>
      </section>

      {/* ===== HIGHLIGHTS SECTION ===== */}
      <section style={{ backgroundColor: BRAND_NAVY }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Why Choose Us</p>
            <h2 className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700 }}>
              The Brandon Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(201,168,76,0.12)' }}
                >
                  <Icon size={24} style={{ color: BRAND_GOLD }} />
                </div>
                <h3 className="text-white mb-2" style={{ fontSize: '0.95rem', fontWeight: 600 }}>{label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED ROOMS ===== */}
      <section className="py-20" style={{ backgroundColor: BRAND_CREAM }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Accommodations</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY }}>
              Our Rooms & Suites
            </h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: '#6b7280', fontSize: '0.95rem' }}>
              Every room is thoughtfully designed to ensure maximum comfort and relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomCategories.map((room) => (
              <div
                key={room.id}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="relative h-52 overflow-hidden">
                  <ImageWithFallback
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs text-white"
                    style={{ backgroundColor: BRAND_GOLD, fontWeight: 600 }}
                  >
                    From {room.price}/night
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2" style={{ color: BRAND_NAVY, fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.1rem' }}>
                    {room.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#6b7280', lineHeight: 1.6 }}>{room.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {room.features.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 rounded-full text-xs"
                        style={{ backgroundColor: 'rgba(201,168,76,0.1)', color: '#8B6914', fontWeight: 500 }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/booking"
                    className="block w-full text-center py-2.5 rounded-lg text-sm transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: BRAND_NAVY, color: '#fff', fontWeight: 600 }}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: BRAND_GOLD, color: '#fff', fontWeight: 600, letterSpacing: '0.05em' }}
            >
              View All Rooms <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== RESTAURANT SHOWCASE ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Fine Dining</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY, lineHeight: 1.2 }}>
                A Culinary Journey Like No Other
              </h2>
              <p className="mt-4 mb-6 leading-relaxed" style={{ color: '#6b7280' }}>
                Our in-house restaurant serves an exquisite blend of authentic Nigerian dishes and continental cuisine. From rich local delicacies to international favorites, every meal is crafted with the finest ingredients.
              </p>
              <ul className="space-y-3 mb-8">
                {['Breakfast, Lunch & Dinner service daily', 'Authentic Nigerian & Continental cuisine', 'Private dining available for events', 'Open to hotel guests and walk-in visitors'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.15)' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND_GOLD }} />
                    </div>
                    <span className="text-sm" style={{ color: '#4b5563' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/restaurant"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: BRAND_GOLD, color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}
              >
                Explore Our Restaurant <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                  alt="Restaurant dining"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 shadow-lg mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1593787614887-004b2ffb0057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                  alt="Nigerian cuisine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1665332195309-9d75071138f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                  alt="African cuisine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 shadow-lg -mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1772463099737-a482008045f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                  alt="Hotel bar and drinks"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GUEST EXPERIENCE ===== */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: BRAND_NAVY }}
      >
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Hotel atmosphere"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="w-16 h-px mx-auto mb-8"
            style={{ backgroundColor: BRAND_GOLD }}
          />
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: BRAND_GOLD, fontWeight: 600 }}>
            The Brandon Experience
          </p>
          <blockquote
            className="text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', fontWeight: 400, lineHeight: 1.5, fontStyle: 'italic' }}
          >
            "Brandon Hotel offers a comfortable blend of relaxation, fine dining, and exceptional hospitality in the heart of Ogbomosho."
          </blockquote>
          <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
            {[['500+', 'Happy Guests'], ['50+', 'Room Types'], ['5★', 'Guest Rating'], ['10+', 'Years of Service']].map(([num, label], i) => (
              <div key={i} className="text-center px-6">
                <div className="text-white mb-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: BRAND_GOLD }}>
                  {num}
                </div>
                <div className="text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.55)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="py-20" style={{ backgroundColor: BRAND_CREAM }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Visual Stories</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY }}>
              Gallery Highlights
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[420px]">
            <div className="rounded-2xl overflow-hidden row-span-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500"
                alt="Brandon Hotel"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500"
                alt="Hotel room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden row-span-2 hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500"
                alt="Restaurant"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774192621035-20d11389f781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500"
                alt="Hotel lobby"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 text-sm transition-all duration-200 hover:bg-[#0C1B33] hover:text-white"
              style={{ borderColor: BRAND_NAVY, color: BRAND_NAVY, fontWeight: 600 }}
            >
              View Full Gallery <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE REVIEWS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={18} fill="#FBBC04" className="text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold" style={{ color: BRAND_NAVY }}>4.9 / 5.0</span>
            </div>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Google Reviews</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY }}>
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                style={{ border: '1px solid #e8e4dc', backgroundColor: BRAND_CREAM }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#FBBC04" className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#4b5563', fontStyle: 'italic' }}>
                  "{r.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm"
                      style={{ backgroundColor: BRAND_NAVY, fontWeight: 600 }}
                    >
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: BRAND_NAVY }}>{r.name}</p>
                      <p className="text-xs" style={{ color: '#9ca3af' }}>{r.date}</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section className="py-20" style={{ backgroundColor: '#f0ece2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Find Us</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY, lineHeight: 1.2 }}>
                Conveniently Located in Ogbomosho
              </h2>
              <p className="mt-4 mb-8 leading-relaxed" style={{ color: '#6b7280' }}>
                Brandon Hotel is strategically situated in the heart of Ogbomosho, making it easy to explore the city or reach any destination. We are just minutes from the city center and major landmarks.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm">
                  <MapPin size={20} style={{ color: BRAND_GOLD }} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: BRAND_NAVY }}>Our Address</p>
                    <p className="text-sm" style={{ color: '#6b7280' }}>123 Station Road, Ogbomosho, Oyo State, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm">
                  <Phone size={20} style={{ color: BRAND_GOLD }} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: BRAND_NAVY }}>Call to Reserve</p>
                    <p className="text-sm" style={{ color: '#6b7280' }}>+234 801 234 5678 | +234 809 876 5432</p>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: BRAND_NAVY, color: '#fff', fontWeight: 600 }}
              >
                Get Directions <ArrowRight size={16} />
              </Link>
            </div>
            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
              <iframe
                title="Brandon Hotel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31555.76786979637!2d4.253!3d8.147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d81e8f29e7d%3A0x0!2zOC4xNDcnMDAuMCJOIDQuMjUzJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="py-24 relative overflow-hidden text-center"
        style={{ backgroundColor: BRAND_NAVY }}
      >
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Hotel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Don't Wait</p>
          <h2 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Reserve Your Stay Today
          </h2>
          <p className="mb-10 text-lg" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Rooms fill up fast. Secure your booking now and enjoy a memorable stay at Brandon Hotel & Apartments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="px-10 py-4 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: BRAND_GOLD, fontWeight: 700, fontSize: '1rem', letterSpacing: '0.06em' }}
            >
              BOOK A ROOM
            </Link>
            <a
              href={`https://wa.me/2348012345678?text=${encodeURIComponent("Hello! I'd like to make a reservation at Brandon Hotel.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#25D366', color: '#fff', fontWeight: 700, fontSize: '1rem' }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}