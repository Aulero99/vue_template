import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsonImporter from "node-sass-json-importer"
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        importer: jsonImporter(),
      }
    }
  },
  plugins: [
  vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.startsWith('s-')
        }
      }
    }
  }),
  pluginPurgeCss()
],
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server:{
    host: true,
    port: 8000,
    watch: {
      usePolling: true
    }
  }
})
