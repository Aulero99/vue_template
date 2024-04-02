import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsonImporter from "node-sass-json-importer"
import uncss from "postcss-uncss"
import autoprefixer from "autoprefixer"

// import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
// pluginPurgeCss()

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
  })
],
  build: {
    outDir: 'docs',
    sourcemap: false
  },
  server:{
    host: false,
    port: 5235,
    watch: {
      usePolling: true
    }
  }
})
