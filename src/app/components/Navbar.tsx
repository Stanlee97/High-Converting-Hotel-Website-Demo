import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone } from 'lucide-react';

const BRAND_NAVY = '#0C1B33';
const BRAND_GOLD = '#C9A84C';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/rooms', label: 'Rooms' },
    { to: '/restaurant', label: 'Restaurant' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isTransparent = isHome && !scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isTransparent ? 'rgba(12,27,51,0.15)' : BRAND_NAVY,
        backdropFilter: isTransparent ? 'blur(4px)' : 'none',
        boxShadow: isTransparent ? 'none' : '0 2px 20px rgba(0,0,0,0.3)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
              style={{ backgroundColor: BRAND_GOLD }}
            >
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700 }}>B</span>
            </div>
            <div>
              <div className="text-white leading-none" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                BRANDON
              </div>
              <div className="text-xs tracking-widest" style={{ color: BRAND_GOLD, fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                HOTEL & APARTMENTS
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-wide transition-colors duration-200"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    color: isActive ? BRAND_GOLD : 'rgba(255,255,255,0.88)',
                    borderBottom: isActive ? `2px solid ${BRAND_GOLD}` : '2px solid transparent',
                    paddingBottom: '2px',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+2348012345678"
              className="flex items-center gap-2 text-sm"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif' }}
            >
              <Phone size={14} />
              <span>+234 801 234 5678</span>
            </a>
            <Link
              to="/booking"
              className="px-5 py-2.5 rounded text-sm transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: BRAND_GOLD,
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: BRAND_NAVY, borderColor: 'rgba(201,168,76,0.2)' }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block py-3 px-4 rounded transition-colors"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    color: isActive ? BRAND_GOLD : 'rgba(255,255,255,0.85)',
                    backgroundColor: isActive ? 'rgba(201,168,76,0.1)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
              <Link
                to="/booking"
                className="block w-full text-center py-3 px-4 rounded text-white"
                style={{ backgroundColor: BRAND_GOLD, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
