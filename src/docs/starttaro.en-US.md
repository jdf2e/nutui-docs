# Applet Development

## Intro

* As one JD-style component library, we have been working hard to create a component library with better developer experience. After the publish of NutUI 3.0, our team is constantly optimizing, testing, using, and iterating on Vue3 related components.However, in the development process of cross-end applet, it was found that there is no suitable component library to support multi-end development. To fill this gap, and to optimize the developer experience, and to allow NutUI to bring convenience to more developers, we decided to add the ability of multi-terminal adaptation of applet to NutUI.

* In order to provide more efficient and convenient development method for developers, NutUI and Taro work together. You can develop applet with NutUI, and NutUI supports 70+ components, covers most of the components used in daily business development.

* Combination of the two, not only make developers write once and multi-end use, but also use a more beautiful, more convenient and richer component library in development. We've made NutUI and Taro better together, Taro officially uses NutUI as the recommended component library for the Vue technology stack. Now developers will be able to use NutUI to seamlessly develop H5 and multi-terminal applets.

## Preview


> Scan the QR code below to experience component library demos. Source code url is https://github.com/jdf2e/nutui-demo/tree/master/taro

<img width="200" src="https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg" />
<img src="https://img12.360buyimg.com/imagetools/jfs/t1/205124/1/15643/30360/62aad730Ea5734bf9/703bb91a0b73282f.png" width="200" alt="NutUI" />

## Install

* Using npm or yarn

### Install CLI Tools

``` bash
# Use npm to install CLI
npm install -g @tarojs/cli

# OR Use yarn to install CLI
yarn global add @tarojs/cli

# OR installed cnpm, use cnpm to install CLI
cnpm install -g @tarojs/cli
```

> If the installation process results in `sass`-related installation errors, please retry after installing [mirror-config-china](https://www.npmjs.com/package/mirror-config-china).

``` bash
npm install -g mirror-config-china
```

### Check if the installation was successful

``` bash
taro -v
```

### Project initialization

Create a template project using the command.

``` bash
taro init myApp
```

### Checked Vue3 + NutUI Model

<img src="https://storage.360buyimg.com/jdc-article/taro.jpg" />

> Attention: you need configure your project as the steps below when install nutui-taro package separately.

### Configure @tarojs/plugin-html

1. Install [@tarojs/plugin-html](https://taro-docs.jd.com/taro/docs/use-h5/)
``` bash
yarn add @tarojs/plugin-html
```
2. Add configure
``` javascript
// config/index.js
config = {
  // ...
  plugins: ['@tarojs/plugin-html']
  // Add data option!!! This must be configured in modularized.
  sass: {
      data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
  }
}
```
3. Configure NutUI 375 designWidth
``` javascript
// config/index.js
config = {
  // ...
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  }
}
```

### NPM Use

> Attention: this will import all components, and make bundle size larger.

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import NutUI from "@nutui/nutui-taro";
import "@nutui/nutui-taro/dist/style.css";
createApp(App).use(NutUI);
```


#### Recommended Use modularized

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) is a babel plugin, can translate import statement to modularized automatically in compile process.
##### Install Plugin
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

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon } from "@nutui/nutui-taro";
createApp(App).use(Button).use(Cell).use(Icon);
```



#### Custom Theme

First, import default.scss in **app.ts**:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon } from "@nutui/nutui-taro";
// Global import NutUI need add the below scss.
// import '@nutui/nutui-taro/dist/styles/themes/default.scss';
createApp(App).use(Button).use(Cell).use(Icon);
```

Create custom theme stylesheet ```assets/styles/custom_theme.scss```, style variables refer to [nutui variables](https://github.com/jdf2e/nutui/blob/next/src/packages/styles/variables.scss).
``` scss
$primary-color: #478EF2;
$primary-color-end: #496AF2;
```



Next, configure `scss` file global cover in `config/index.js`:

``` javascript
const path = require('path');
const config = {
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sass: {
		resource: [
			path.resolve(__dirname, '..', 'src/assets/styles/custom_theme.scss')
		],
    // Defautl JD APP 10.0 theme > @import "@nutui/nutui-taro/dist/styles/variables.scss";
    // JDT theme > @import "@nutui/nutui-taro/dist/styles/variables-jdt.scss";
    // JD ToB mall theme > @import "@nutui/nutui-taro/dist/styles/variables-jdb.scss";
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
	},
  // ...
```

Using in `vue` file and preview:

``` html
<template>
  <view>
      <nut-button type="primary" >nutui</nut-button>
  </view>
</template>
```