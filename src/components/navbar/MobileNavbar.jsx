// src/components/navbar/MobileNavbar.jsx
import { Home, User, Fish, Anchor } from "lucide-react"; // Ganti ikon

export default function MobileNavbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: "home", label: "Beranda", icon: Home },
    { id: "air_tawar", label: "Air Tawar", icon: Fish },
    { id: "air_laut", label: "Air Laut", icon: Anchor },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-1 z-50">
      <div className="flex items-center justify-around max-w-sm mx-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;

          // --- BARIS INI YANG HILANG ---
          const isActive = currentPage === item.id;
          // -----------------------------

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center py-2 px-3 transition-colors duration-200 ${
                isActive ? "text-teal-600" : "text-gray-400"
              }`}
            >
              <IconComponent
                size={20}
                className="mb-1"
                strokeWidth={isActive ? 2 : 1.5}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
