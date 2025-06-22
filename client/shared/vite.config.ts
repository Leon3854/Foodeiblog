import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import path from "node:path";

export default defineConfig({
  server: {
    port: 5001, // Фиксированный порт для dev-сервера
    strictPort: true, // Запрещает автоматический выбор другого порта, если 5001 занят
    cors: true, // Важно для кросс-доменных запросов
    headers: {
      "Access-Control-Allow-Origin": "*", // Решает проблему CORS
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Expose-Headers": "*",
    },
  },
  plugins: [
    federation({
      name: "shared",
      filename: "remoteEntry.js",
      exposes: {
        "./useHamburgerMenu": "./src/hooks/hamburger-menu/useHamburgerMenu.tsx",
        "./usePreloader": "./src/hooks/preloader/Preloader.tsx",
        "./useSetBgImages": "./src/hooks/set-bg-image/useSetBgImages.tsx",
        "./useTabs": "./src/hooks/sign-in/signIn.tsx",
        "./useSearch": "./src/hooks/search/search.tsx",
        "./SocialNets": "./src/components/social/Social.tsx",
        "./hooks": "./src/hooks/index.ts",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./src"), // Указываем корень shared
      "@shared/hooks": path.resolve(__dirname, "./src/hooks"),
      "@shared/components": path.resolve(__dirname, "./src/components"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true, // Соответствует флагу в скрипте
    modulePreload: false, // Добавьте для Federation
    target: "esnext",
    minify: false, // Лучше отключить для отладки
    cssCodeSplit: false, //Включаем для разделения CSS
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Указываем точку входа
      formats: ["es"],
      name: "shared",
      fileName: (format) => `shared.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"], // Исключаем из бандла
      output: {
        // minifyInternalExports: false, // Важно для Federation
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
        },
        // Для лучшей организации кода
        // chunkFileNames: "chunks/[name]-[hash].js",
        // assetFileNames: "assets/[name]-[hash][extname]",
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  optimizeDeps: {
    include: [
      // Явно указываем зависимости для предварительной упаковки
      "react",
      "react-dom",
      "react-router-dom",
      "react-icons",
    ],
    exclude: ["@originjs/vite-plugin-federation"], // Исключаем проблемные зависимости
  },
});
