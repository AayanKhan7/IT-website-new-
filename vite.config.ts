import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Enable minification with terser for better compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
    // Critical performance: chunk size warnings and splitting
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true,
    
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk splitting for better caching strategy
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('motion')) {
              return 'motion-vendor';
            }
            if (id.includes('three') || id.includes('postprocessing')) {
              return 'graphics-vendor';
            }
            if (id.includes('@radix-ui') || id.includes('@emotion')) {
              return 'ui-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
    
    // Core Web Vitals optimization
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production for smaller bundle
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // Optimization: Configure server for development
  server: {
    middlewareMode: false,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})

