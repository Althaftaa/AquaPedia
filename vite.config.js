// vite.config.js
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(),
    tailwindcss(),
    {
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
        "LOGORN.png",
      ], // Pastikan LOGORN.png ada atau ganti dengan logo Anda
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "AquaPedia: Ensiklopedia Ikan Indonesia",
        short_name: "AquaPedia",
        description: "Ensiklopedia Ikan Air Tawar dan Laut Indonesia",
        theme_color: "#0ea5e9",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    },
  ],
});
