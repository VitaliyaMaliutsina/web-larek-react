import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@styles/variables" as *;
        
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@mixins": path.resolve(__dirname, "./src/app/styles/mixins"),
      "@styles": path.resolve(__dirname, "./src/app/styles"),
    },
  },
});
