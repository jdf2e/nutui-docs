<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'app',
  setup() {}
});
</script>

<style lang="scss">
a[title='站长统计'] {
  display: none;
}
::selection {
  background: $doc-default-color;
  color: #fff;
}
#doc {
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding-top: $doc-header-height;
}
</style>
