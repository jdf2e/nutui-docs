# Customize Theme

NutUI support multiple UI themes by default. And in order to meet diffrent visual needs, you can also custom your theme all the same.

## Official Theme 🌈

NutUI support some official themes, welcome to use. if they are not enough, recommended to use <a target="_blank" href="https://nutui.jd.com/theme/#/base" >Online Theme Preview Generator</a>

* JD APP 10.0 Design Specification（default）
* JDT Design(Vue3) <a target="_blank" href="https://nutui.jd.com/jdt/" >preview</a>
* JD ToB Mall Design(Vue3) <a target="_blank" href="https://nutui.jd.com/?jdb#/component/button" >preview</a>
* JDL Design(Vue2)<a target="_blank" href="https://nutui.jd.com/jdl/" >preview</a>

<br/>

<img src="https://img12.360buyimg.com/imagetools/jfs/t1/157759/16/13989/142151/6052efc7Ef8f4bff4/f3dd6422949ba4b7.jpg" width="700" alt="NutUI 主题定制">

## Style Variables

NutUI style bases on **[Sass](https://sass-lang.com/)**, and contains some default style variables. Customimg theme is also change these variables([variables.scss](https://github.com/jdf2e/nutui/blob/next/src/packages/styles/variables.scss))。

All usable style variables refer to <a target="_blank" href="https://nutui.jd.com/theme/#/base" >Online Theme Preview Generator</a>. You can click the component to preview or real-time modify, preview and download.

<br/>

<img src="https://img14.360buyimg.com/imagetools/s1000x1000_jfs/t1/133323/6/25182/230015/62343b76E4fffb961/248a75ece7922294.png"  alt="NutUI 主题定制">



```scss
// main color
$primary-color: #fa2c19;
$primary-color-end: #fa6419;
...
```

> In custom theme scene, you need import **scss** file rather than **css** file

import **nutui.scss**

```javascript
import NutUI from '@nutui/nutui';
// Only global import NutUI need this scss file
import "@nutui/nutui/dist/styles/themes/default.scss";
```

## Custom Theme

### First: create custom variables custom_theme.scss 

Create **SCSS** file `custom_theme.scss` in local to custom your variables. Variables can real-time modify, preview and download through <a target="_blank" href="https://nutui.jd.com/theme/#/base">Online Theme Preview Generator</a>

``` scss
$primary-color: #478EF2;
$primary-color-end: #496AF2;
```

### Next：update your webpack or vite configure file

Configure **sass-loader**. For example:

#### vite

``` javascript
// https://vitejs.dev/config/
export default defineConfig({
  //...
  css: {
    preprocessorOptions: {
      scss: {
        // Default JD APP 10.0 theme > @import "@nutui/nutui/dist/styles/variables.scss";
        // JDT theme > @import "@nutui/nutui/dist/styles/variables-jdt.scss";
        // JD ToB Mall theme > @import "@nutui/nutui-taro/dist/styles/variables-jdb.scss";
        additionalData: `@import "./assets/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  }
})
```

#### webpack

``` javascript
{
    test: /\.(sa|sc)ss$/,
    use: [
        {
            loader: 'sass-loader',
            options: {
                // Default JD APP 10.0 theme > @import "@nutui/nutui/dist/styles/variables.scss";
                // JDT theme > @import "@nutui/nutui/dist/styles/variables-jdt.scss";
                // JD ToB mall theme > @import "@nutui/nutui/dist/styles/variables-jdb.scss";
                // Attention: this option name is not same in diffrent sass-loader versions, refer to sass-loader version documents
                data: `@import "./assets/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`,
            }
        }
    ]
}
```

#### Vue/cli 3 and above versions need to configure **vue.config.js**

``` javascript
module.exports = {
    css: {
        loaderOptions: {
            // add prependData
            scss: {
                // @/(src/ alias)
                // Attention: in sass-loader v7, use "data" instead
                prependData: `@import "@/assets/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`,
            }
        },
    }
}
```

#### taro

Configure `scss` file global cover in `config/index.js`:

```javascript
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
    // Default JD APP 10.0 theme > @import "@nutui/nutui-taro/dist/styles/variables.scss";
    // JDT theme > @import "@nutui/nutui-taro/dist/styles/variables-jdt.scss";
    // JD ToB Mall theme > @import "@nutui/nutui-taro/dist/styles/variables-jdb.scss";
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
	},
  // ...
```

> More(vite 、vue/cli、cdn、ts、taro...) @nutui/nutui demos refer to [Demo](https://github.com/jdf2e/nutui-demo)