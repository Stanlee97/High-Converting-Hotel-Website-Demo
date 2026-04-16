import { useState } from "react";
import { useNavigate } from "react-router";
import { CalendarDays } from "lucide-react";

interface BookingWidgetProps {
  compact?: boolean;
}

export function BookingWidget({ compact = false }: BookingWidgetProps) {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [form, setForm] = useState({
    checkIn: today,
    checkOut: tomorrow,
    guests: "1",
    roomType: "standard",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(
      `/booking?checkIn=${form.checkIn}&checkOut=${form.checkOut}&guests=${form.guests}&room=${form.roomType}`
    );
  };

  const inputClass = compact
    ? "w-full bg-white/10 border border-white/20 text-white placeholder-white/60 px-3 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
    : "w-full bg-white border border-gray-200 text-gray-800 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors";

  const labelClass = `block mb-1 text-xs tracking-widest uppercase ${compact ? "text-white/70" : "text-gray-500"}`;

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ${compact ? "" : "gap-4"}`}
      >
        {/* Check-in */}
        <div>
          <label className={labelClass} style={{ fontFamily: "Lato, sans-serif" }}>
            Check-in
          </label>
          <div className="relative">
            <input
              type="date"
              value={form.checkIn}
              min={today}
              onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
              className={inputClass}
              style={{ fontFamily: "Lato, sans-serif", colorScheme: compact ? "dark" : "light" }}
              required
            />
          </div>
        </div>

        {/* Check-out */}
        <div>
          <label className={labelClass} style={{ fontFamily: "Lato, sans-serif" }}>
            Check-out
          </label>
          <input
            type="date"
            value={form.checkOut}
            min={form.checkIn}
            onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
            className={inputClass}
            style={{ fontFamily: "Lato, sans-serif", colorScheme: compact ? "dark" : "light" }}
            required
          />
        </div>

        {/* Guests */}
        <div>
          <label className={labelClass} style={{ fontFamily: "Lato, sans-serif" }}>
            Guests
          </label>
          <select
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className={inputClass}
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n} className="text-gray-800 bg-white">
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        {/* Room Type */}
        <div>
          <label className={labelClass} style={{ fontFamily: "Lato, sans-serif" }}>
            Room Type
          </label>
          <select
            value={form.roomType}
            onChange={(e) => setForm({ ...form, roomType: e.target.value })}
            className={inputClass}
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            <option value="standard" className="text-gray-800 bg-white">Standard Room</option>
            <option value="deluxe" className="text-gray-800 bg-white">Deluxe Room</option>
            <option value="suite" className="text-gray-800 bg-white">Executive Suite</option>
            <option value="presidential" className="text-gray-800 bg-white">Presidential Suite</option>
            <option value="apartment" className="text-gray-800 bg-white">Apartment</option>
          </select>
        </div>
      </div>

      <div className={`mt-4 ${compact ? "" : "flex justify-center"}`}>
        <button
          type="submit"
          className={`bg-[#C9A84C] text-white tracking-widest uppercase text-sm hover:bg-[#b8943e] transition-colors duration-200 flex items-center justify-center gap-2 ${
            compact ? "w-full py-3" : "px-10 py-4"
          }`}
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          <CalendarDays size={16} />
          Book Now
        </button>
      </div>
    </form>
  );
}
