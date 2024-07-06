import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/simple-ecommerce/", // Ensure this matches your repository name
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
});
