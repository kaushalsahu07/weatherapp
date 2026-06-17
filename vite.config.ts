import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  base: "/",
  server: {
    port: 5173,
    host: "0.0.0.0",
    hmr: {
      protocol: "ws", 
      host: "localhost", 
      port: 5173, 
    },
  },
});
