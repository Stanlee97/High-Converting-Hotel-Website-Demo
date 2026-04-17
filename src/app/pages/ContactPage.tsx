import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, MessageSquare } from 'lucide-react';

const BRAND_NAVY = '#0C1B33';
const BRAND_GOLD = '#C9A84C';
const BRAND_CREAM = '#F8F4EC';

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section className="pt-36 pb-16 text-center" style={{ backgroundColor: BRAND_NAVY }}>
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Get in Touch</p>
          <h1 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700 }}>
            Contact Us
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
            We're here to help. Whether you have a booking inquiry, need information, or just want to say hello — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <div className="py-8 border-b" style={{ backgroundColor: '#fff', borderColor: '#e5ddc8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+2348088269483"
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl transition-all hover:opacity-90 text-white text-sm"
            style={{ backgroundColor: BRAND_NAVY, fontWeight: 600 }}
          >
            <Phone size={16} />
            Call Now: +234 808 826 9483
          </a>
          <a
            href={`https://wa.me/2348088269483?text=${encodeURIComponent("Hello SDM Tavern! I need assistance.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl transition-all hover:opacity-90 text-white text-sm"
            style={{ backgroundColor: '#25D366', fontWeight: 600 }}
          >
            <MessageSquare size={16} />
            WhatsApp Chat
          </a>
          <a
            href="mailto:info@sdmnitrotech.com.ng"
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl transition-all hover:opacity-90 text-sm"
            style={{ backgroundColor: BRAND_CREAM, color: BRAND_NAVY, fontWeight: 600, border: `1px solid #e5ddc8` }}
          >
            <Mail size={16} />
            info@sdmnitrotech.com.ng
          </a>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20" style={{ backgroundColor: BRAND_CREAM }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: '1px solid #e5ddc8' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: BRAND_NAVY, fontSize: '1.2rem' }} className="mb-5">
                Hotel Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.12)' }}>
                    <MapPin size={18} style={{ color: BRAND_GOLD }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: BRAND_NAVY }}>Address</p>
                    <p className="text-sm" style={{ color: '#6b7280', lineHeight: 1.6 }}>
                      Agodi, Ibadan 200285,<br />Oyo State
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.12)' }}>
                    <Phone size={18} style={{ color: BRAND_GOLD }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: BRAND_NAVY }}>Phone Numbers</p>
                    <a href="tel:+2348088269483" className="text-sm block hover:opacity-80" style={{ color: '#6b7280' }}>+234 808 826 9483</a>
                    <a href="tel:+2348098765432" className="text-sm block hover:opacity-80" style={{ color: '#6b7280' }}>+234 809 876 5432</a>
                    <a href="tel:+2348034567890" className="text-sm block hover:opacity-80" style={{ color: '#6b7280' }}>+234 803 456 7890</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.12)' }}>
                    <Mail size={18} style={{ color: BRAND_GOLD }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: BRAND_NAVY }}>Email</p>
                    <a href="mailto:info@sdmnitrotech.com.ng" className="text-sm hover:opacity-80" style={{ color: '#6b7280' }}>info@sdmnitrotech.com.ng</a>
                    <a href="mailto:reservations@sdmnitrotech.com.ng" className="text-sm block hover:opacity-80" style={{ color: '#6b7280' }}>reservations@sdmnitrotech.com.ng</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(201,168,76,0.12)' }}>
                    <Clock size={18} style={{ color: BRAND_GOLD }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: BRAND_NAVY }}>Reception Hours</p>
                    <p className="text-sm" style={{ color: '#6b7280' }}>24 Hours, 7 Days a Week</p>
                    <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>We are always available for you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div
              className="rounded-2xl p-6"
              style={{ background: `linear-gradient(135deg, ${BRAND_NAVY} 0%, #1a3a6b 100%)` }}
            >
              <h4 className="text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                Instant WhatsApp Booking
              </h4>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Chat with our reception desk directly for the fastest booking experience.
              </p>
              <a
                href={`https://wa.me/2348088269483?text=${encodeURIComponent("Hello SDM Tavern! I'd like to make a booking enquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full justify-center py-3 rounded-xl text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#25D366', fontWeight: 600 }}
              >
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 shadow-sm text-center h-full flex flex-col items-center justify-center" style={{ border: '1px solid #e5ddc8' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(201,168,76,0.1)' }}>
                  <CheckCircle size={32} style={{ color: BRAND_GOLD }} />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: BRAND_NAVY }} className="mb-3">
                  Message Sent!
                </h3>
                <p style={{ color: '#6b7280', maxWidth: '360px', lineHeight: 1.7 }}>
                  Thank you for reaching out! Our team will get back to you within 2 hours. For urgent matters, please call or WhatsApp us directly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  className="mt-8 px-8 py-3 rounded-xl text-white text-sm"
                  style={{ backgroundColor: BRAND_GOLD, fontWeight: 600 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: '1px solid #e5ddc8' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', fontWeight: 700, color: BRAND_NAVY }} className="mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm mb-8" style={{ color: '#9ca3af' }}>
                  Fill in the form below and we'll respond within 2 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border text-sm"
                        style={{ borderColor: '#e5ddc8', color: BRAND_NAVY }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm"
                        style={{ borderColor: '#e5ddc8', color: BRAND_NAVY }}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl border text-sm"
                        style={{ borderColor: '#e5ddc8', color: BRAND_NAVY }}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Subject *</label>
                      <select
                        value={form.subject}
                        onChange={(e) => update('subject', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border text-sm appearance-none"
                        style={{ borderColor: '#e5ddc8', color: form.subject ? BRAND_NAVY : '#9ca3af' }}
                        required
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="Booking Inquiry">Booking Inquiry</option>
                        <option value="Restaurant Reservation">Restaurant Reservation</option>
                        <option value="Event Enquiry">Event Enquiry</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Complaint / Feedback">Complaint / Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border text-sm resize-none"
                      style={{ borderColor: '#e5ddc8', color: BRAND_NAVY }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: BRAND_GOLD, fontWeight: 700, letterSpacing: '0.05em' }}
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 md:h-96">
        <iframe
          title="SDM Tavern Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31555.76786979637!2d3.8667!3d7.3775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103950e71b8d4ac1%3A0x0!2z7Yk3LjM3NzUnTiDDkzMyLjc3NyclRQ!5e0!3m2!1sen!2sng!4v1712281234"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </div>
  );
}
