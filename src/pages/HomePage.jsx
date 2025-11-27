// src/pages/HomePage.jsx
import HeroSection from "../components/home/HeroSection";

// Hanya menerima onNavigate
export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 pb-20 md:pb-8">
      <HeroSection onNavigate={onNavigate} />
      <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">
        {/* Kosong karena kita pakai HeroSection full */}
      </main>
    </div>
  );
}
