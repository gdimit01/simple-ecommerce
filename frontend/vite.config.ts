import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/simple-ecommerce/", // Ensure this matches your repository name
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    rollupOptions: {
      external: [
        "/simple-ecommerce/assets/index.js", // Externalize the module if necessary
      ],
    },
  },
});
