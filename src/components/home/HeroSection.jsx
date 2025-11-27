// src/components/home/HeroSection.jsx
import { Fish, Anchor, ArrowRight, Sparkles } from "lucide-react";
// Pastikan import ini sesuai dengan file yang Anda punya
const heroImage = "/images/hiu-paus.jpg";

export default function HeroSection({ onNavigate }) {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-cyan-100/40 via-white to-blue-100/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 min-h-[85vh] py-12 lg:py-0">
          {/* --- LEFT CONTENT (Teks) --- */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-cyan-100 border border-cyan-200 rounded-full px-4 py-1.5 mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-cyan-600 fill-current" />
              <span className="text-sm font-semibold text-cyan-800">
                Ensiklopedia Digital
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Jelajahi Kekayaan <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                AquaPedia
              </span>{" "}
              Indonesia.
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Temukan keindahan dan keragaman ikan air tawar serta laut
              Nusantara. Gerbang informasi lengkap untuk mengenal fauna akuatik
              kita lebih dekat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => onNavigate("air_laut")}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 rounded-2xl hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-200 ease-in-out bg-cyan-600 rounded-2xl group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-slate-900 rounded-2xl group-hover:bg-cyan-700"></span>
                <span className="relative flex items-center space-x-3">
                  <Anchor className="w-5 h-5" />
                  <span>Jelajahi Laut</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              <button
                onClick={() => onNavigate("air_tawar")}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 rounded-2xl hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-200 ease-in-out bg-cyan-600 rounded-2xl group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-slate-900 rounded-2xl group-hover:bg-cyan-700"></span>
                <span className="relative flex items-center space-x-3">
                  <Fish className="w-5 h-5" />
                  <span>Lihat Air Tawar</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>

          {/* --- RIGHT CONTENT (Gambar Besar) --- */}
          <div className="flex-1 relative w-full max-w-xl lg:max-w-none mx-auto lg:mx-0">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl animate-pulse opacity-70"
              style={{ animationDuration: "8s" }}
            ></div>

            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-700 ease-in-out">
              <img
                src={heroImage}
                alt="Pemandangan Bawah Laut"
                className="w-full h-[500px] lg:h-[650px] object-cover scale-105 hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
