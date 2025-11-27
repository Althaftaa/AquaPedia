// src/components/navbar/DesktopNavbar.jsx
import logoUrl from "../../assets/LOGORN.png"; // Pastikan ini logo Anda
import { Fish, Anchor } from "lucide-react";

export default function DesktopNavbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: "home", label: "Beranda" },
    { id: "air_tawar", label: "Air Tawar", icon: Fish },
    { id: "air_laut", label: "Air Laut", icon: Anchor },
    { id: "profile", label: "Profile" },
  ];

  return (
    <nav className="hidden md:block shadow-sm border-b border-slate-100 sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src={logoUrl}
              alt="Logo AquaPedia"
              className="w-10 h-10 object-contain"
            />
            <div>
              {/* JUDUL BARU DI SINI */}
              <h1 className="text-xl font-bold text-slate-800 leading-tight">
                AquaPedia
              </h1>
              <h2 className="text-sm font-medium text-cyan-600 leading-tight">
                Ensiklopedia Ikan Indonesia
              </h2>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center px-3 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                  currentPage === item.id
                    ? "text-cyan-700 bg-cyan-50"
                    : "text-slate-600 hover:text-cyan-600 hover:bg-slate-50"
                }`}
              >
                {item.icon && (
                  <item.icon
                    className={`w-4 h-4 mr-2 transition-transform group-hover:scale-110 ${
                      currentPage === item.id
                        ? "text-cyan-600"
                        : "text-slate-400 group-hover:text-cyan-500"
                    }`}
                    strokeWidth={2}
                  />
                )}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
