import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
          remote: 'http://localhost:3001/assets/remoteEntry.js'
      },
      shared: ["react"]
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "ES2022" 
  }
})
