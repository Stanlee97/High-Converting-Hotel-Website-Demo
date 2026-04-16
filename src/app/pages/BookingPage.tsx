import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { CalendarDays, Users, CheckCircle, CreditCard, Landmark, Lock } from 'lucide-react';

const BRAND_NAVY = '#0C1B33';
const BRAND_GOLD = '#C9A84C';
const BRAND_CREAM = '#F8F4EC';

const roomTypes = [
  { id: 'standard', label: 'Standard Room', price: 18000, desc: 'Perfect for solo travelers or couples.' },
  { id: 'deluxe', label: 'Deluxe Suite', price: 32000, desc: 'Spacious suite with premium furnishings.' },
  { id: 'executive', label: 'Executive Suite', price: 48000, desc: 'Ideal for business travelers.' },
  { id: 'presidential', label: 'Presidential Suite', price: 75000, desc: 'The pinnacle of luxury.' },
  { id: 'apartment', label: 'Luxury Apartment', price: 65000, desc: 'Fully serviced for extended stays.' },
];

const paymentOptions = [
  { id: 'hotel', label: 'Pay at Hotel', desc: 'Pay on arrival — no upfront payment required.', icon: Landmark },
  { id: 'transfer', label: 'Bank Transfer', desc: 'Transfer to our account before arrival.', icon: CreditCard },
  { id: 'online', label: 'Online Payment', desc: 'Pay securely online via card or mobile money.', icon: Lock },
];

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    checkIn: searchParams.get('checkIn') || today,
    checkOut: searchParams.get('checkOut') || tomorrow,
    guests: searchParams.get('guests') || '1',
    roomType: searchParams.get('roomType') || 'standard',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    payment: 'hotel',
  });

  const selectedRoom = roomTypes.find((r) => r.id === form.roomType) || roomTypes[0];

  const getNights = () => {
    const a = new Date(form.checkIn);
    const b = new Date(form.checkOut);
    const diff = Math.ceil((b.getTime() - a.getTime()) / 86400000);
    return diff > 0 ? diff : 1;
  };

  const nights = getNights();
  const total = selectedRoom.price * nights;

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 px-4" style={{ backgroundColor: BRAND_CREAM, fontFamily: 'Inter, sans-serif' }}>
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(201,168,76,0.15)' }}>
            <CheckCircle size={40} style={{ color: BRAND_GOLD }} />
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: BRAND_NAVY }} className="mb-4">
            Booking Confirmed!
          </h1>
          <p className="mb-4" style={{ color: '#6b7280', lineHeight: 1.7 }}>
            Thank you, <strong>{form.firstName}</strong>! Your reservation request for the <strong>{selectedRoom.label}</strong> has been received.
          </p>
          <p className="mb-8" style={{ color: '#6b7280' }}>
            We'll contact you at <strong>{form.phone}</strong> or <strong>{form.email}</strong> to confirm your booking within 30 minutes.
          </p>
          <div className="p-6 rounded-2xl mb-8 text-left" style={{ backgroundColor: '#fff', border: '1px solid #e5ddc8' }}>
            <h3 className="font-semibold mb-4" style={{ color: BRAND_NAVY }}>Booking Summary</h3>
            {[
              ['Room', selectedRoom.label],
              ['Check-In', form.checkIn],
              ['Check-Out', form.checkOut],
              ['Nights', String(nights)],
              ['Guests', form.guests],
              ['Payment', form.payment === 'hotel' ? 'Pay at Hotel' : form.payment === 'transfer' ? 'Bank Transfer' : 'Online Payment'],
              ['Total', `₦${total.toLocaleString()}`],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-2 border-b last:border-b-0" style={{ borderColor: '#f0ece2' }}>
                <span className="text-sm" style={{ color: '#9ca3af' }}>{k}</span>
                <span className="text-sm font-semibold" style={{ color: BRAND_NAVY }}>{v}</span>
              </div>
            ))}
          </div>
          <a
            href={`https://wa.me/2348012345678?text=${encodeURIComponent(`Hello! I just made a booking for ${selectedRoom.label}. Check-in: ${form.checkIn}, Check-out: ${form.checkOut}. Name: ${form.firstName} ${form.lastName}. Please confirm my reservation.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white"
            style={{ backgroundColor: '#25D366', fontWeight: 700 }}
          >
            Confirm via WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section className="pt-28 pb-12 text-center" style={{ backgroundColor: BRAND_NAVY }}>
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: BRAND_GOLD, fontWeight: 600 }}>Reservations</p>
          <h1 className="text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700 }}>
            Book Your Stay
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>
            Fill in the details below to reserve your preferred room at Brandon Hotel.
          </p>
        </div>
      </section>

      {/* Steps */}
      <div className="py-6 border-b" style={{ backgroundColor: '#fff', borderColor: '#e5ddc8' }}>
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-center gap-6">
          {['Stay Details', 'Your Info', 'Confirm'].map((label, i) => {
            const s = i + 1;
            const active = step === s;
            const done = step > s;
            return (
              <div key={s} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors"
                  style={{
                    backgroundColor: done || active ? BRAND_GOLD : '#e5ddc8',
                    color: done || active ? '#fff' : '#9ca3af',
                    fontWeight: 600,
                  }}
                >
                  {done ? '✓' : s}
                </div>
                <span className="text-sm hidden sm:block" style={{ color: active ? BRAND_NAVY : '#9ca3af', fontWeight: active ? 600 : 400 }}>
                  {label}
                </span>
                {i < 2 && <div className="w-8 sm:w-16 h-px ml-2" style={{ backgroundColor: '#e5ddc8' }} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form */}
      <section className="py-16" style={{ backgroundColor: BRAND_CREAM }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Stay Details */}
              {step === 1 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: BRAND_NAVY }}>
                    Stay Details
                  </h2>

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                    <div>
                      <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Check-In Date</label>
                      <div className="relative">
                        <CalendarDays size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: BRAND_GOLD }} />
                        <input
                          type="date"
                          value={form.checkIn}
                          min={today}
                          onChange={(e) => update('checkIn', e.target.value)}
                          className="w-full pl-9 pr-3 py-3 rounded-xl border text-sm"
                          style={{ borderColor: '#e5ddc8', backgroundColor: BRAND_CREAM, color: BRAND_NAVY }}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Check-Out Date</label>
                      <div className="relative">
                        <CalendarDays size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: BRAND_GOLD }} />
                        <input
                          type="date"
                          value={form.checkOut}
                          min={form.checkIn}
                          onChange={(e) => update('checkOut', e.target.value)}
                          className="w-full pl-9 pr-3 py-3 rounded-xl border text-sm"
                          style={{ borderColor: '#e5ddc8', backgroundColor: BRAND_CREAM, color: BRAND_NAVY }}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Number of Guests</label>
                    <div className="relative">
                      <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: BRAND_GOLD }} />
                      <select
                        value={form.guests}
                        onChange={(e) => update('guests', e.target.value)}
                        className="w-full pl-9 pr-3 py-3 rounded-xl border text-sm appearance-none"
                        style={{ borderColor: '#e5ddc8', backgroundColor: BRAND_CREAM, color: BRAND_NAVY }}
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Room Type */}
                  <div className="mb-8">
                    <label className="block mb-3 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Select Room Type</label>
                    <div className="space-y-3">
                      {roomTypes.map((room) => (
                        <label
                          key={room.id}
                          className="flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all"
                          style={{
                            borderColor: form.roomType === room.id ? BRAND_GOLD : '#e5ddc8',
                            backgroundColor: form.roomType === room.id ? 'rgba(201,168,76,0.07)' : '#fff',
                          }}
                        >
                          <input
                            type="radio"
                            name="roomType"
                            value={room.id}
                            checked={form.roomType === room.id}
                            onChange={(e) => update('roomType', e.target.value)}
                            className="sr-only"
                          />
                          <div
                            className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                            style={{ borderColor: form.roomType === room.id ? BRAND_GOLD : '#d1d5db' }}
                          >
                            {form.roomType === room.id && (
                              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: BRAND_GOLD }} />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm" style={{ color: BRAND_NAVY }}>{room.label}</p>
                            <p className="text-xs" style={{ color: '#9ca3af' }}>{room.desc}</p>
                          </div>
                          <span className="text-sm font-semibold" style={{ color: BRAND_GOLD }}>₦{room.price.toLocaleString()}/night</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-4 rounded-xl text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: BRAND_GOLD, fontWeight: 700, letterSpacing: '0.05em' }}
                  >
                    CONTINUE TO GUEST DETAILS
                  </button>
                </div>
              )}

              {/* Step 2: Guest Info */}
              {step === 2 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: BRAND_NAVY }}>
                    Your Information
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>First Name *</label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => update('firstName', e.target.value)}
                        placeholder="Enter your first name"
                        className="w-full px-4 py-3 rounded-xl border text-sm"
                        style={{ borderColor: '#e5ddc8', color: BRAND_NAVY }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Last Name *</label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => update('lastName', e.target.value)}
                        placeholder="Enter your last name"
                        className="w-full px-4 py-3 rounded-xl border text-sm"
                        style={{ borderColor: '#e5ddc8', color: BRAND_NAVY }}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Email Address *</label>
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
                    <div>
                      <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Phone Number *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl border text-sm"
                        style={{ borderColor: '#e5ddc8', color: BRAND_NAVY }}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block mb-2 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Special Requests (Optional)</label>
                    <textarea
                      value={form.specialRequests}
                      onChange={(e) => update('specialRequests', e.target.value)}
                      placeholder="Any special requests? (e.g., early check-in, dietary needs, room preferences...)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border text-sm resize-none"
                      style={{ borderColor: '#e5ddc8', color: BRAND_NAVY }}
                    />
                  </div>

                  {/* Payment Options */}
                  <div className="mb-8">
                    <label className="block mb-3 text-sm font-semibold" style={{ color: BRAND_NAVY }}>Payment Option *</label>
                    <div className="space-y-3">
                      {paymentOptions.map(({ id, label, desc, icon: Icon }) => (
                        <label
                          key={id}
                          className="flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all"
                          style={{
                            borderColor: form.payment === id ? BRAND_GOLD : '#e5ddc8',
                            backgroundColor: form.payment === id ? 'rgba(201,168,76,0.07)' : '#fff',
                          }}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={id}
                            checked={form.payment === id}
                            onChange={(e) => update('payment', e.target.value)}
                            className="sr-only"
                          />
                          <div
                            className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                            style={{ borderColor: form.payment === id ? BRAND_GOLD : '#d1d5db' }}
                          >
                            {form.payment === id && (
                              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: BRAND_GOLD }} />
                            )}
                          </div>
                          <Icon size={18} style={{ color: BRAND_GOLD }} className="shrink-0" />
                          <div>
                            <p className="font-semibold text-sm" style={{ color: BRAND_NAVY }}>{label}</p>
                            <p className="text-xs" style={{ color: '#9ca3af' }}>{desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 rounded-xl border transition-all hover:bg-gray-50"
                      style={{ borderColor: '#e5ddc8', color: BRAND_NAVY, fontWeight: 600 }}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (form.firstName && form.lastName && form.email && form.phone) {
                          setStep(3);
                        }
                      }}
                      className="flex-[2] py-4 rounded-xl text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: BRAND_GOLD, fontWeight: 700 }}
                    >
                      REVIEW BOOKING
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirm */}
              {step === 3 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: BRAND_NAVY }}>
                    Confirm Your Booking
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div className="p-5 rounded-xl" style={{ backgroundColor: BRAND_CREAM, border: '1px solid #e5ddc8' }}>
                      <h4 className="font-semibold mb-3 text-sm" style={{ color: BRAND_NAVY }}>Stay Details</h4>
                      {[
                        ['Room', selectedRoom.label],
                        ['Check-In', form.checkIn],
                        ['Check-Out', form.checkOut],
                        ['Nights', String(nights)],
                        ['Guests', `${form.guests} guest(s)`],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between py-1.5">
                          <span className="text-sm" style={{ color: '#9ca3af' }}>{k}</span>
                          <span className="text-sm font-semibold" style={{ color: BRAND_NAVY }}>{v}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-5 rounded-xl" style={{ backgroundColor: BRAND_CREAM, border: '1px solid #e5ddc8' }}>
                      <h4 className="font-semibold mb-3 text-sm" style={{ color: BRAND_NAVY }}>Guest Details</h4>
                      {[
                        ['Name', `${form.firstName} ${form.lastName}`],
                        ['Email', form.email],
                        ['Phone', form.phone],
                        ['Payment', form.payment === 'hotel' ? 'Pay at Hotel' : form.payment === 'transfer' ? 'Bank Transfer' : 'Online Payment'],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between py-1.5">
                          <span className="text-sm" style={{ color: '#9ca3af' }}>{k}</span>
                          <span className="text-sm font-semibold" style={{ color: BRAND_NAVY }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 py-4 rounded-xl border transition-all hover:bg-gray-50"
                      style={{ borderColor: '#e5ddc8', color: BRAND_NAVY, fontWeight: 600 }}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-[2] py-4 rounded-xl text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: BRAND_GOLD, fontWeight: 700, letterSpacing: '0.05em' }}
                    >
                      CONFIRM RESERVATION
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right: Summary */}
          <div>
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-5" style={{ border: '1px solid #e5ddc8' }}>
                <h3 className="font-semibold mb-5" style={{ color: BRAND_NAVY, fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>
                  Booking Summary
                </h3>
                <div className="space-y-3 mb-5">
                  {[
                    ['Room', selectedRoom.label],
                    ['Check-In', form.checkIn],
                    ['Check-Out', form.checkOut],
                    ['Nights', String(nights)],
                    ['Guests', form.guests],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-sm" style={{ color: '#9ca3af' }}>{k}</span>
                      <span className="text-sm font-semibold" style={{ color: BRAND_NAVY }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 mt-4" style={{ borderColor: '#e5ddc8' }}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm" style={{ color: '#6b7280' }}>
                      ₦{selectedRoom.price.toLocaleString()} × {nights} night{nights > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold" style={{ color: BRAND_NAVY }}>Total</span>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 700, color: BRAND_GOLD }}>
                      ₦{total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl" style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: `1px solid ${BRAND_GOLD}20` }}>
                <p className="text-sm font-semibold mb-2" style={{ color: BRAND_NAVY }}>Need Help Booking?</p>
                <p className="text-xs mb-4" style={{ color: '#6b7280' }}>Our team is available 24/7 to assist with your reservation.</p>
                <a
                  href={`https://wa.me/2348012345678?text=${encodeURIComponent("Hello! I need help with a room reservation.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full justify-center py-3 rounded-xl text-white text-sm"
                  style={{ backgroundColor: '#25D366', fontWeight: 600 }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
