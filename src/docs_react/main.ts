import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/styles/reset.scss';
import '@/assets/styles/md-style.scss';
import DemoBlock from '@/components/demo-block';
import { Hover } from '@/directive/hover/hover';
import { isMobile } from '@/assets/util';

if (isMobile) {
  location.replace('demo.html' + location.hash);
}

createApp(App).directive('hover', Hover).component('demo-block', DemoBlock).use(router).mount('#doc');
