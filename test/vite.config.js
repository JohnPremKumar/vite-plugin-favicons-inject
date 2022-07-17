import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vitePluginFaviconsInject from '../dist/esm';
// const vitePluginFaviconsInject = require('../dist/cjs');

console.log(vitePluginFaviconsInject);

export default defineConfig({
  plugins: [
    vitePluginFaviconsInject('./src/assets/logo.svg'),
    vue(),
  ],
});
