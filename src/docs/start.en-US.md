# Quickstart

## Preview


> Scan the below QR code, experience Vue3 component library demos.

<img src="https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png" width="200" alt="NutUI">

## NPM

```bash
# Vue2 project need refer to 2.x document(https://nutui.jd.com/2x)
npm i @nutui/nutui@2

# Vue3 H5 project
npm i @nutui/nutui

# Taro + Vue3 multi-end applet project
npm i @nutui/nutui-taro
```

### NPM Use

#### Import All Components

> Attention: this way will import all components and the bundle size will be larger. We recommend to use modularized.
```javascript
import { createApp } from "vue";
import App from "./App.vue";
// Attention: this will import all components
import NutUI from "@nutui/nutui";
// Delete the global style import when you use modularized.
import "@nutui/nutui/dist/style.css";
createApp(App).use(NutUI).mount("#app");
```

#### Vite-plugin is necessary in Vite in order to use modularized

#### Why modularize style only

Because vite modularizes component library self.

[Vite](https://vitejs.dev/) uses [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) to modularize.

##### Install plugin
``` bash
npm install vite-plugin-style-import --save-dev
```
Configure the plugin in `vite.config.js`:
``` javascript
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin, NutuiResolve } from 'vite-plugin-style-import'
export default {
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [
        NutuiResolve(),
      ]
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // Configure NutUI global SCSS Variables
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  }
};
```
#### Webpack use babel to realize modularized

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) is a babel plugin, it can translate import statement to modularized automatically in compile process.

##### Install plugin
``` bash
npm install babel-plugin-import --save-dev
```
Configure in `.babelrc` or `babel.config.js`:
``` javascript
{
  // ...
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui",
        "libraryDirectory": "dist/packages/_es",
        // Internationalization
        "customName": (name, file) => {
          if (name == 'Locale') {
            return '@nutui/nutui/dist/packages/locale/lang';
          } else {
            return `@nutui/nutui/dist/packages/_es/${name}`;
          }
        },
        "style": (name, file) => name.toLowerCase().replace('_es/', '') + '/index.scss',
        "camel2DashComponentName": false
      },
      'nutui3-vue'
    ],
    [
      "import",
      {
        "libraryName": "@nutui/nutui-taro",
        "libraryDirectory": "dist/packages/_es",
        // Internationalization
        "customName": (name, file) => {
          if (name == 'Locale') {
            return '@nutui/nutui-taro/dist/packages/locale/lang';
          } else {
            return `@nutui/nutui-taro/dist/packages/_es/${name}`;
          }
        },
        "style": (name, file) => name.toLowerCase().replace('_es/', '') + '/index.scss',
        "camel2DashComponentName": false
      },
      'nutui3-taro'
    ]
  ]
}
```
Configure sass-loader in webpack, so that you will have global NutUI variables.
```javascript
//...
// Add data option
scss: {
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
}
//...
```

Then import component like this in your project.

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Button, Icon } from "@nutui/nutui";
createApp(App).use(Button).use(Icon).mount("#app");
```

#### CDN Use

> NutUI also support CDN use, you can get the links in **jsdelivr** or **unpkg** and so on.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- import style -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nutui/nutui/dist/style.css" />
    <!-- import Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- import NutUI -->
    <script src="https://cdn.jsdelivr.net/npm/@nutui/nutui/dist/nutui.umd.js"></script>
  </head>
  <body>
    <div id="app">
        
    </div>
    <script>
      // Render some button components in #app.
      const app = Vue.createApp({
        template: `
        <nut-button type="primary">Primary Button</nut-button>
        <nut-button type="info">Info Button</nut-button>
        <nut-button type="default">Default Button</nut-button>
        <nut-button type="danger">Danger Button</nut-button>
        <nut-button type="warning">Warning Button</nut-button>
        <nut-button type="success">Success Button</nut-button>
        `,
      });
      app.use(nutui);
      app.mount("#app");
    </script>
  </body>
</html>
```

> Import redirectly in the page will not use **custom theme**. We recommend to use *NPM* or *YARN* ways rather than import redirectly in the page.


## Use Attention

- The colon is necessary when you use Number, Boolean and Function props(exclude compatible String format), for example: 
```html
<nut-switch :active="true" size="base"></nut-switch>
```

- Component style unit is **px** by default, if you want to use **rem**, you can use some tools to transfer, such as [px2rem-loader](https://www.npmjs.com/package/px2rem-loader) of [webpack](https://www.webpackjs.com/), [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) of [postcss](https://github.com/postcss/postcss) and so on.
