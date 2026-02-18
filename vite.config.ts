import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // JS files -> dist/assets/js/
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
        // Asset files
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || "";
          const ext = fileName.split(".").pop()?.toLowerCase() || "";
          
          // Product images (from src/assets/productImages/) -> dist/productImages/
          if (fileName.includes("productImages") || 
              (fileName.match(/\.(webp)$/) && !fileName.match(/\.(jpg|jpeg|png|svg)$/))) {
            return "productImages/[name]-[hash][extname]";
          }
          
          // CSS files -> dist/assets/css/
          if (ext === "css") {
            return "assets/css/[name]-[hash][extname]";
          }
          
          // Other images (from src/assets/images/) -> dist/images/
          return "images/[name]-[hash][extname]";
        },
      },
    },
  },
}));
