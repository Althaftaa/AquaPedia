// src/pages/AirLautPage.jsx
import { useState, useEffect } from "react";
import { Search, Anchor, Waves } from "lucide-react";
import RecipeGrid from "../components/fish/FishGrid";
import Pagination from "../components/common/Pagination";

export default function AirLautPage({ onSelectRecipe }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchIkan = async () => {
      try {
        setLoading(true);
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/api/fish/type/Air%20Laut`);
        const data = await response.json();

        const formattedData = data.map((item) => {
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

  const filteredRecipes = recipes.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.habitat.toLowerCase().includes(query)
    );
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-40 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wide">
            <Waves className="w-3 h-3" />
            <span>Habitat Laut & Terumbu Karang</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Jelajahi Ikan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Air Laut
            </span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Selami kedalaman samudra Nusantara. Temukan penghuni terumbu karang
            yang warna-warni hingga predator puncak di lautan lepas.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10 max-w-lg mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-full opacity-30 group-hover:opacity-50 transition duration-200 blur"></div>
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
                placeholder="Cari ikan laut..."
                className="w-full p-3 bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-10 h-10 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
            <p className="text-slate-500 animate-pulse">
              Sedang menyelam mencari data...
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
