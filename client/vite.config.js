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
      't_logo2': path.resolve(__dirname, './src/assets/imgs/logo_2.png'),
      'slider_1': path.resolve(__dirname,'./src/assets/imgs/slider_1.jpg'),
      'slider_2': path.resolve(__dirname,'./src/assets/imgs/slider_2.jpg'),
      'slider_3': path.resolve(__dirname,'./src/assets/imgs/slider_3.jpg'),
    }
  },
  build: {
    // cau hinh -- khi build xong no tao file ben server luon
    outDir: path.resolve(__dirname, '../server/public'),
    emptyOutDir: true,
  }
});
