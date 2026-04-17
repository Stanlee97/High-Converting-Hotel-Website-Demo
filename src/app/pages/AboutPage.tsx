import { Heart, Award, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const BRAND_NAVY = '#0C1B33';
const BRAND_GOLD = '#C9A84C';
const BRAND_CREAM = '#F8F4EC';

const values = [
  {
    icon: Heart,
    title: 'Genuine Hospitality',
    desc: 'We treat every guest like family — with warmth, care, and personal attention from check-in to check-out.',
  },
  {
    icon: Award,
    title: 'Excellence in Service',
    desc: 'Our team is trained to deliver service that exceeds expectations, ensuring every stay is memorable.',
  },
  {
    icon: Shield,
    title: 'Safety & Security',
    desc: 'Your safety is our top priority. We maintain 24/7 security, CCTV monitoring, and secure facilities.',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'We are proud to be part of the Ibadan community, creating jobs and supporting local suppliers.',
  },
];

// Team data - uncomment when team section is implemented
// const team = [
//   {
//     name: 'Mr. Adewale Brandon',
//     role: 'Founder & CEO',
//     img: 'https://images.unsplash.com/photo-1637684666587-91e51b10a555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
//     desc: 'With over 20 years in hospitality, Mr. Brandon built this hotel on a vision of accessible luxury for Ogbomosho.',
//   },
//   {
//     name: 'Mrs. Funke Adeyemi',
//     role: 'General Manager',
//     img: 'https://images.unsplash.com/photo-1739301674047-386ed15c7e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
//     desc: 'A hospitality veteran who ensures the seamless daily operations that our guests love and trust.',
//   },
//   {
//     name: 'Chef Tunde Olatunde',
//     role: 'Head Chef',
//     img: 'https://images.unsplash.com/photo-1610851467843-fe4a65aea9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
//     desc: 'Trained internationally, Chef Tunde blends Nigerian tradition with global culinary artistry.',
//   },
// ];

const milestones = [
  { year: '2014', event: 'SDM Tavern Hotel & Suites was founded in Ibadan' },
  { year: '2016', event: 'Expanded to 50 rooms and launched our restaurant' },
  { year: '2018', event: 'Won the Oyo State Hospitality Excellence Award' },
  { year: '2020', event: 'Upgraded all rooms and launched our Luxury Apartment wing' },
  { year: '2022', event: 'Launched online booking system and WhatsApp reservations' },
  { year: '2024', event: 'Celebrated 10 years of exceptional Nigerian hospitality' },
];

export function AboutPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1745725427804-4d94df0c5eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400"
          alt="SDM Tavern"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(12,27,51,0.95) 0%, rgba(12,27,51,0.3) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Our Story</p>
          <h1 className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            About SDM Tavern
          </h1>
        </div>
      </section>

      {/* Stats */}
      <div style={{ backgroundColor: BRAND_NAVY }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['10+', 'Years of Service'],
              ['500+', 'Happy Guests'],
              ['50+', 'Rooms & Suites'],
              ['4.9★', 'Google Rating'],
            ].map(([num, label], i) => (
              <div key={i}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_GOLD }}>
                  {num}
                </div>
                <div className="text-xs tracking-wide mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Our History</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY, lineHeight: 1.3 }}>
                A Decade of Excellence in Nigerian Hospitality
              </h2>
              <p className="mt-5 mb-5 leading-relaxed" style={{ color: '#6b7280' }}>
              SDM Tavern Hotel & Suites was founded in 2014 with a simple yet powerful vision: to bring world-class hospitality to the people of Ibadan and every traveler who passes through this great city.
              </p>
              <p className="mb-5 leading-relaxed" style={{ color: '#6b7280' }}>
                What began as a modest guesthouse has grown into one of Ibadan's most celebrated hotels, offering a diverse range of accommodations — from comfortable standard rooms to fully serviced luxury apartments.
              </p>
              <p className="leading-relaxed" style={{ color: '#6b7280' }}>
                Over the years, we have welcomed thousands of guests — business travelers, families, tourists, and dignitaries — all united by the warm, attentive hospitality that defines the SDM Tavern experience.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-96 shadow-2xl">
                <ImageWithFallback
                  src=""
                  alt="SDM Tavern history"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl"
                style={{ backgroundColor: BRAND_GOLD }}
              >
                <p className="text-white text-xs uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>Est.</p>
                <p className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20" style={{ backgroundColor: BRAND_CREAM }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>What We Stand For</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY }}>
              Our Mission & Values
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#6b7280' }}>
              Everything we do at SDM Tavern is guided by a commitment to quality, integrity, and genuine care for our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white text-center shadow-sm hover:shadow-md transition-shadow"
                style={{ border: '1px solid #e5ddc8' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: 'rgba(201,168,76,0.12)' }}
                >
                  <Icon size={24} style={{ color: BRAND_GOLD }} />
                </div>
                <h3 className="mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: BRAND_NAVY }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality Philosophy */}
      <section className="py-20" style={{ backgroundColor: BRAND_NAVY }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: BRAND_GOLD }} />
          <p className="text-xs tracking-widest uppercase mb-5" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Our Philosophy</p>
          <blockquote
            className="text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 400, lineHeight: 1.6, fontStyle: 'italic' }}
          >
            "A hotel is not just a place to sleep — it is a place to feel at home, to feel valued, and to feel like the best version of yourself. At SDM Tavern, we believe every guest deserves nothing less."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <ImageWithFallback
                src=""
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Mr. xxx xxxx</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Founder & CEO, SDM Tavern</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Our Journey</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY }}>
              Key Milestones
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-[18px] top-0 bottom-0 w-px"
              style={{ backgroundColor: '#e5ddc8' }}
            />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs shrink-0 relative z-10"
                    style={{ backgroundColor: BRAND_GOLD, fontWeight: 700 }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="text-xs font-bold mb-1" style={{ color: BRAND_GOLD }}>{year}</div>
                    <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: BRAND_CREAM }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: BRAND_NAVY }} className="mb-4">
            Come Experience Us for Yourself
          </h2>
          <p className="mb-8" style={{ color: '#6b7280' }}>
            Stories are great, but the SDM Tavern experience is even better. Book your stay today and discover why thousands of guests keep coming back.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white transition-all hover:opacity-90"
            style={{ backgroundColor: BRAND_GOLD, fontWeight: 700, letterSpacing: '0.05em' }}
          >
            BOOK YOUR STAY <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}