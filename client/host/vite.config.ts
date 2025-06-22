import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        home: 'http://localhost:5174/remoteEntry.js',
        about: 'http://localhost:5175/remoteEntry.js',
				shared: 'http://localhost:5001/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'bootstrap'] // Добавляем bootstrap в shared
    })
  ],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/styles/style" as *;`, // Используем алиас @
				quietDeps: true
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	publicDir: 'public',
	base: '/',
  server: { 
		port: 5173, 
		strictPort: true 
	},
  build: { target: 'esnext' }
})

