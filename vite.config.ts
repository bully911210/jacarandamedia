import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: '/jacarandamedia/', // Make sure this matches your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true, // Add source maps for better debugging
    rollupOptions: {
      external: ['@tanstack/react-query'],
      output: {
        globals: {
          '@tanstack/react-query': 'ReactQuery'
        },
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@/components/ui']
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  plugins: [
    react(),
    {
      name: 'copy-files',
      writeBundle() {
        // Copy .nojekyll to dist folder
        require('fs').copyFileSync('.nojekyll', 'dist/.nojekyll');
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
});
