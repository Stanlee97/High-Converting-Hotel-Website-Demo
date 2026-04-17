import { Link } from 'react-router';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const BRAND_NAVY = '#0C1B33';
const BRAND_GOLD = '#C9A84C';

export function Footer() {
  return (
    <footer style={{ backgroundColor: BRAND_NAVY }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: BRAND_GOLD }}
              >
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700 }}>B</span>
              </div>
              <div>
                <div className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700 }}>
                  SDM TAVERN
                </div>
                <div className="text-xs tracking-widest" style={{ color: BRAND_GOLD }}>
                  HOTEL & SUITES
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
              Experience comfort, elegance and world-class hospitality in the heart of Ibadan, Nigeria.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: 'rgba(201,168,76,0.15)', color: BRAND_GOLD }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-widest mb-5 uppercase" style={{ color: BRAND_GOLD, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/rooms', label: 'Rooms & Suites' },
                { to: '/restaurant', label: 'Restaurant' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about', label: 'About Us' },
                { to: '/booking', label: 'Book a Room' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm tracking-widest mb-5 uppercase" style={{ color: BRAND_GOLD, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Accommodation',
                'Fine Dining',
                'Event Hosting',
                'Conference Facilities',
                'Airport Transfers',
                'Laundry Services',
                'Room Service',
              ].map((s) => (
                <li key={s} className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest mb-5 uppercase" style={{ color: BRAND_GOLD, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: BRAND_GOLD }} />
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
                  Agodi, Ibadan 200285, Oyo State
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" style={{ color: BRAND_GOLD }} />
                <div>
                  <a href="tel:+2348088269483" className="text-sm block" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
                    +234 808 826 9483
                  </a>
                  <a href="tel:+2348098765432" className="text-sm block" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
                    +234 809 876 5432
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" style={{ color: BRAND_GOLD }} />
                <a href="mailto:info@sdmnitrotech.com.ng" className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>
                  info@sdmnitrotech.com.ng
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>
            © 2026 SDM Tavern Hotel & Suites. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>
            Designed for excellence in Nigerian hospitality
          </p>
        </div>
      </div>
    </footer>
  );
}
