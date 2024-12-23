import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'counter',
      filename: 'remoteEntry.js',
      exposes: {
          './App': './src/App.tsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    cssCodeSplit: false
  }
})
