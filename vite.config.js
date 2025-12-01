// vite.config.js
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
        "LOGORN.png",
      ],

      // Konfigurasi agar bisa diinstall
      manifest: {
        name: "AquaPedia: Ensiklopedia Ikan Indonesia",
        short_name: "AquaPedia",
        description: "Ensiklopedia Ikan Air Tawar dan Laut Indonesia",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone", // INI PENTING: Agar tampil full screen seperti aplikasi
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "pwa-192x192.png", // Pastikan icon ini ada (nanti kita generate)
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png", // Pastikan icon ini ada
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico,jpg,jpeg}"], // Tambahkan jpg/jpeg agar gambar ikan ter-cache
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true, // Ubah ke true agar bisa dites di localhost
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
