import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // We removed the Anima plugin here because it crashes production builds
  plugins: [react()],
  publicDir: "./static",
  base: "/", // Changed from "./" to "/" for better compatibility with Vercel
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
