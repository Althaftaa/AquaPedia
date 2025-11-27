// src/pages/DetailPage.jsx
import { useEffect, useState } from "react";
import { ArrowLeft, Fish, MapPin, ListChecks } from "lucide-react"; // Ganti ikon

export default function DetailPage({ recipe, onBack }) {
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimatingIn(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = () => {
    setIsAnimatingOut(true);
    setTimeout(onBack, 300); // Durasi animasi
  };

  if (!recipe) {
    return null;
  }

  const animationClasses = isAnimatingOut
    ? "animate-slide-out-bottom"
    : isAnimatingIn
    ? "animate-slide-in-bottom"
    : "opacity-0";

  return (
    <div className={`min-h-screen bg-gray-50 pb-8 ${animationClasses}`}>
      <main className="max-w-4xl mx-auto">
        <div className="sticky top-0 bg-gray-50/80 backdrop-blur-sm z-10 p-4">
          <button
            onClick={handleBackClick}
            className="flex items-center text-slate-500 hover:text-slate-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Kembali
          </button>
        </div>

        <div className="h-64 md:h-96 overflow-hidden">
          <img
            src={recipe.image_url}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            {recipe.name}
          </h1>
          {/* Ubah info header */}
          <div className="flex items-center space-x-6 text-slate-600 mb-8">
            <div className="flex items-center space-x-2">
              <Fish size={20} />
              <span className="font-medium">{recipe.type}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span className="font-medium">{recipe.habitat}</span>
            </div>
          </div>

          {/* Ganti "Bahan-bahan" menjadi "Deskripsi" */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-700 mb-4 border-b-2 border-cyan-500 pb-2">
              Deskripsi
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Ganti "Langkah-langkah" menjadi "Karakteristik" */}
          <div>
            <h2 className="text-2xl font-bold text-slate-700 mb-4 border-b-2 border-teal-500 pb-2">
              Karakteristik
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              {recipe.characteristics.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
