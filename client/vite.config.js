import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from 'path';
// import imgLogo from 'logo'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      't_logo':path.resolve(__dirname, './src/assets/imgs/logo.png'),
      't_logo2': path.resolve(__dirname, './src/assets/imgs/logo_2.png')
    }
  },
  build: {
    // cau hinh -- khi build xong no tao file ben server luon
    outDir: path.resolve(__dirname, '../server/public'),
    emptyOutDir: true,
  }
});
