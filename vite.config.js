// vite.config.js
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@fonts": resolve(__dirname, "src/assets/fonts/"),
      "@scss": resolve(__dirname, "src/scss/"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        consultation: resolve(__dirname, "consultation.html"),
      },
    },
  },
});
