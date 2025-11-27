// src/main.jsx
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import SplashScreen from "./pages/SplashScreen";
import HomePage from "./pages/HomePage";
import AirTawarPage from "./pages/AirTawarPage";
import AirLautPage from "./pages/AirLautPage";
import ProfilePage from "./pages/ProfilePage";
import DetailPage from "./pages/DetailPage";
import DesktopNavbar from "./components/navbar/DesktopNavbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import "./index.css";
import PWABadge from "./PWABadge";

// --- HAPUS IMPORT DATA IKAN DARI SINI ---
// Kita tidak butuh DataIkanTawar/Laut di sini lagi

function AppRoot() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // --- HAPUS LOGIKA featuredIkan DARI SINI ---

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedRecipe(null);
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  const renderCurrentPage = () => {
    if (selectedRecipe) {
      return <DetailPage recipe={selectedRecipe} onBack={handleBack} />;
    }

    switch (currentPage) {
      case "home":
        // HomePage sekarang bersih, hanya butuh navigasi
        return <HomePage onNavigate={handleNavigation} />;
      case "air_tawar":
        return <AirTawarPage onSelectRecipe={handleSelectRecipe} />;
      case "air_laut":
        return <AirLautPage onSelectRecipe={handleSelectRecipe} />;
      case "profile":
        return <ProfilePage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!selectedRecipe && (
        <>
          <DesktopNavbar
            currentPage={currentPage}
            onNavigate={handleNavigation}
          />
          <MobileNavbar
            currentPage={currentPage}
            onNavigate={handleNavigation}
          />
        </>
      )}
      <main className="min-h-screen">{renderCurrentPage()}</main>
      <PWABadge />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>
);
