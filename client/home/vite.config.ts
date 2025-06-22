import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "home",
      filename: "remoteEntry.js",
      exposes: {
        "./HomeApp": "./src/home-page/HomePage.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5174,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*", // Решает проблему CORS
      "Access-Control-Allow-Methods": "GET,OPTIONS",
    },
  },
  build: {
    assetsDir: "assets",
    target: "esnext",
    modulePreload: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js", // Явно указываем имя файла
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
