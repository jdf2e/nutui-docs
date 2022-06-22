# Internationalization

NutUI 3.0 and above versions support multiple languages. NutUI uses Chinese as the default language. Use as follows:

## Usage

### Switch languages

```javascript
import Vue from 'vue';
// Vue3 H5
import { Locale } from '@nutui/nutui';
import enUS from '@nutui/nutui/dist/packages/locale/lang/en-US';
// Taro
// import { Locale } from '@nutui/nutui-taro';
// import enUS from '@nutui/nutui-taro/dist/packages/locale/lang/en-US';
Locale.use('en-US', enUS);
```

## Current supported languages:

| Language         | Filename | Version      |
|--------------|--------|-----------|
| English         | en-US  | `v3.1.19` |
| Indonesian | id-ID  | `v3.1.21` |
| Thai         | th-TH  | Need PR   |
| Chinese     | zh-CN  | `v3.1.19` |
| Traditional Chinese     | zh-TW  | `v3.1.19` |

> View all language configs [Here](https://github.com/jdf2e/nutui/tree/next/src/packages/locale/lang).

## Common Questions

### Missing language pack?

Welcome to commit PR If you need new language pack. Changes refer to [language pack](https://github.com/jdf2e/nutui/tree/next/src/packages/locale/lang).

### How to internationalize business code?

Use [vue-i18n](https://github.com/kazupon/vue-i18n).