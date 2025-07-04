import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import compression from 'vite-plugin-compression';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: '/',
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@styles': resolve(__dirname, './src/styles'),
      '@scripts': resolve(__dirname, './src/scripts'),
      '@assets': resolve(__dirname, './src/assets'),
    }
  },
  
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ],
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        services: resolve(__dirname, 'services.html'),
        caseStudies: resolve(__dirname, 'case-studies.html'),
        insights: resolve(__dirname, 'insights.html'),
        seo: resolve(__dirname, 'services/seo.html'),
        ppc: resolve(__dirname, 'services/ppc.html'),
        technicalMarketing: resolve(__dirname, 'services/technical-marketing.html'),
        emailMarketing: resolve(__dirname, 'services/email-marketing.html'),
        platformManagement: resolve(__dirname, 'services/platform-management.html'),
        strategyConsulting: resolve(__dirname, 'services/strategy-consulting.html'),
      },
      output: {
        manualChunks: {
          'gsap': ['gsap'],
          'lenis': ['@studio-freight/lenis'],
          'swiper': ['swiper']
        }
      }
    }
  },
  
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  
  optimizeDeps: {
    include: ['gsap', '@studio-freight/lenis', 'swiper']
  }
});