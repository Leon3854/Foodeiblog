import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "about",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
        "./AboutPage": "./src/about-page/AboutPage.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5175,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*", // Решает проблему CORS
      "Access-Control-Allow-Methods": "GET,OPTIONS",
    },
  },
  build: {
    target: "esnext",
    modulePreload: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js", // Явно указываем имя файла
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
