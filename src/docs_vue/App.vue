<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useThemeEditor } from '@/assets/util/helper';
export default defineComponent({
  name: 'app',
  setup() {
    useThemeEditor();
  }
});
</script>

<style lang="scss">
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
  padding-top: $doc-header-height;
}
</style>
