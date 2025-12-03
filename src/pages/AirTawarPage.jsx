// src/pages/AirTawarPage.jsx
import { useState, useEffect } from "react";
import { Search, Fish, Droplets } from "lucide-react";
import RecipeGrid from "../components/fish/FishGrid";
import Pagination from "../components/common/Pagination";

export default function AirTawarPage({ onSelectRecipe }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // --- AMBIL DATA DARI API ---
  useEffect(() => {
    const fetchIkan = async () => {
      try {
        setLoading(true);
        const apiUrl = import.meta.env.VITE_API_URL; // Menggunakan Environment Variable
        const response = await fetch(`${apiUrl}/api/fish/type/Air%20Tawar`);
        const data = await response.json();

        const formattedData = data.map((item) => {
          const isExternalLink = item.image_url.startsWith("http");
          return {
            ...item,
            image_url: isExternalLink
              ? item.image_url
              : `/images/${item.image_url}`,
            type: "Air Tawar",
          };
        });

        setRecipes(formattedData);
      } catch (error) {
        console.error("Gagal mengambil data ikan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIkan();
  }, []);

  // Filter Search
  const filteredRecipes = recipes.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-8 relative overflow-hidden">
      {/* Hiasan Background Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-40 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 relative z-10">
        {/* --- BAGIAN HEADER BARU --- */}
        <div className="text-center mb-12 space-y-4">
          {/* Badge Kecil */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wide">
            <Droplets className="w-3 h-3" />
            <span>Habitat Sungai & Danau</span>
          </div>

          {/* Judul Besar dengan Gradient */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Jelajahi Ikan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Air Tawar
            </span>
          </h1>

          {/* Deskripsi yang Lebih Menarik */}
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Temukan keanekaragaman hayati perairan darat Indonesia. Koleksi
            lengkap penghuni sungai, danau, hingga rawa-rawa Nusantara.
          </p>
        </div>
        {/* -------------------------- */}

        {/* Search Bar (Desain Diperhalus) */}
        <div className="mb-10 max-w-lg mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full opacity-30 group-hover:opacity-50 transition duration-200 blur"></div>
            <div className="relative bg-white rounded-full flex items-center">
              <div className="pl-4 text-slate-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Cari nama ikan..."
                className="w-full p-3 bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-10 h-10 border-4 border-cyan-200 border-t-cyan-600 rounded-full animate-spin"></div>
            <p className="text-slate-500 animate-pulse">
              Sedang mengambil data dari Lautan Data...
            </p>
          </div>
        ) : (
          <>
            <RecipeGrid
              recipes={currentItems}
              onSelectRecipe={onSelectRecipe}
              isFavoritePage={false}
            />
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}
