import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path'; // Import resolve from path module
import tailwindcss from 'tailwindcss'; // Import tailwindcss directly
import autoprefixer from 'autoprefixer'; // Import autoprefixer directly

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  define: {
    'process.env': process.env,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(resolve('./tailwind.config.cjs')), // Use resolve to provide full path
        autoprefixer,
      ],
    },
  },
});

