// src/pages/AirLautPage.jsx
import { useState, useEffect } from "react";
import { Search, Anchor } from "lucide-react";
import RecipeGrid from "../components/makanan/RecipeGrid";
import Pagination from "../components/common/Pagination";

// Hapus import DataIkanLaut

export default function AirLautPage({ onSelectRecipe }) {
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
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/api/fish/type/Air%20Laut`);
        const data = await response.json();

        const formattedData = data.map((item) => {
          // LOGIKA BARU: Cek link
          const isExternalLink = item.image_url.startsWith("http");

          return {
            ...item,
            image_url: isExternalLink
              ? item.image_url
              : `/images/${item.image_url}`,
            type: "Air Laut",
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
  // ---------------------------

  const filteredRecipes = recipes.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Search Bar */}
        <div className="mb-8 md:mb-12">
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari ikan air laut..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 flex items-center justify-center gap-3">
            <Anchor className="inline-block h-8 w-8 md:h-10 md:w-10 text-teal-600" />
            Jelajahi Ikan Air Laut
          </h1>
          <p className="text-slate-500 mt-2">
            Data diambil langsung dari API Database.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-20 text-slate-500">
            Memuat data dari API...
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
