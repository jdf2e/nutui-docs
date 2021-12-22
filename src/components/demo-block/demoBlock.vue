<template>
  <div class="online-code" ref="onlineCode">
    <slot></slot>
    <div class="online-part">
      <a class="list" :href="jumpHref" target="_blank">
        <img
          class="online-icon"
          src="https://img12.360buyimg.com/imagetools/jfs/t1/214225/34/8715/7002/61c31bf1E69324ee9/7a452063eba88be4.png"
        />
        <div :href="jumpHref" target="_blank" class="online-btn">在线调试</div>
      </a>
      <div class="list">
        <img
          class="online-icon"
          src="https://img10.360buyimg.com/imagetools/jfs/t1/142615/10/25537/3671/61c31e6eE3ba7fb90/d1953e2b47e40e86.png"
        />
        <div class="online-btn" @click="copyCode">复制代码</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, getCurrentInstance, onMounted, computed } from 'vue';
import { compressText, copyCodeHtml, decompressText } from './basedUtil';
export default {
  setup(props, ctx) {
    const onlineCode = ref(null);
    const sourceMainJsStr = `import { createApp } from "vue";
import App from "./app.vue";
import NutUI from "@nutui/nutui";
import "./app.scss";
import "@nutui/nutui/dist/style.css";
createApp(App).use(NutUI).mount("#app");`;
    const sourceMainJs = compressText(sourceMainJsStr);
    const mainJs = ref(sourceMainJs);
    const jumpHref = ref(``);
    onMounted(() => {
      jumpHref.value = `https://codehouse.jd.com/?source=share&type=vue&mainJs=${mainJs.value}&appValue=${onlineCode.value.dataset.value}&scssValue=`;
    });
    const copyCode = () => {
      const sourceValue = decompressText(onlineCode.value.dataset.value);
      copyCodeHtml(sourceValue, () => {
        alert('复制成功');
      });
    };
    return {
      jumpHref,
      onlineCode,
      copyCode
    };
  }
};
</script>
