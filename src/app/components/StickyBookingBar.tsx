import { useNavigate, useLocation } from "react-router";
import { CalendarDays } from "lucide-react";

export function StickyBookingBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on booking page
  if (location.pathname === "/booking") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1C2B4A]/95 backdrop-blur-sm border-t border-[#C9A84C]/30 py-3 px-4 lg:hidden">
      <button
        onClick={() => navigate("/booking")}
        className="w-full bg-[#C9A84C] text-white py-3 flex items-center justify-center gap-2 tracking-widest uppercase text-sm hover:bg-[#b8943e] transition-colors"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        <CalendarDays size={16} />
        Reserve Your Stay
      </button>
    </div>
  );
}
