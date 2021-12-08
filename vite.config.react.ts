import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import path from 'path';
import config from './src/docs_react/config.json';
const hljs = require('highlight.js'); // https://highlightjs.org/
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  base: '/react',
  server: {
    port: 2021,
    host: '0.0.0.0',
    open: '/react/index.react.html',
    proxy: {
      '/devServer': {
        target: 'https://nutui.jd.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devServer/, '')
      }
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    },
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        })
      ]
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }

          return ''; // 使用额外的默认转义
        }
      }
    })
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // })
  ],
  build: {
    target: 'es2015',
    outDir: './dist/react/',
    assetsDir: config.version,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        react: resolve(__dirname, 'index.react.html')
      },
      output: {
        entryFileNames: `${config.version}/[name].js`,
        chunkFileNames: `${config.version}/[name].js`,
        assetFileNames: `${config.version}/[name].[ext]`
      }
    }
  }
});
