import { useState, useEffect } from "react";
import { User, MapPin, BookOpen } from "lucide-react";

// --- DATA MAHASISWA (ISI DATA ANDA DI SINI) ---
const studentInfo = {
  name: "Althaf Muhammad Taftazani",
  nim: "21120123120014",
  program: "Teknik Komputer",
  university: "Universitas Diponegoro",
  projectTitle: "Ensiklopedia Ikan Indonesia",
};
// ----------------------------------------------

export default function ProfilePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-4 md:p-8 pb-24 md:pb-8 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full max-w-md">
        <div
          className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Header Background */}
          <div className="h-32 bg-gradient-to-r from-teal-500 to-cyan-600 relative">
            <div className="absolute inset-0 bg-white/10 pattern-dots"></div>
          </div>

          {/* Profile Content */}
          <div className="px-8 pb-8">
            {/* Avatar Circle */}
            <div className="relative flex justify-center -mt-16 mb-6">
              <div className="bg-white p-2 rounded-full shadow-lg">
                <div className="w-32 h-32 bg-slate-100 rounded-full border-2 border-slate-50 overflow-hidden">
                  <img
                    src="/images/alt.JPG"
                    alt="Foto Profil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Student Info */}
            <div className="text-center space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-800 mb-1">
                  {studentInfo.name}
                </h1>
                <p className="text-lg font-semibold text-teal-600 bg-teal-50 inline-block px-4 py-1 rounded-full border border-teal-100">
                  {studentInfo.nim}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <BookOpen size={18} className="text-cyan-500" />
                  <span className="font-medium">
                    {studentInfo.projectTitle}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                  <MapPin size={16} />
                  <span>
                    {studentInfo.program} - {studentInfo.university}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                  Tugas Akhir Praktikum PPB 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
