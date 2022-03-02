<template>
  <div>
    <doc-header></doc-header>
    <doc-nav></doc-nav>
    <div class="doc-content">
      <div class="doc-content-document">
        <div class="doc-content-tabs" v-if="isShow() && isShowTaroDoc && language == 'vue'">
          <div
            class="tab-item"
            :class="{ cur: curKey === item.key }"
            v-for="item in tabs"
            :key="item.key"
            @click="handleTabs(item.key)"
            >{{ item.text }}</div
          >
        </div>
        <div class="doc-content-tabs" v-if="isShow() && !isShowTaroDoc && language == 'vue'">
          <div class="tab-item cur">vue/taro</div>
        </div>
        <router-view />
        <div class="doc-content-contributors" v-if="isShow() && contributorsData.length !== 0">
          <a
            :href="'https://github.com/' + item.username"
            v-for="(item, index) in contributorsData"
            :key="index + 'Contributor'"
          >
            <img :src="item.url" alt="" />
            <div class="contributors-hover">贡献者:{{ item.username }}</div>
          </a>
        </div>
        <doc-footer v-if="isShow()" :showLogo="false"></doc-footer>
      </div>
      <doc-demo-preview v-if="isShow()" :url="demoUrl"></doc-demo-preview>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed, ref } from 'vue';
import { demoUrl, language, nav } from '@/config/index';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute, useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import DemoPreview from '@/components/DemoPreview.vue';
import { RefData } from '@/assets/util/ref';
import { ApiService } from '@/service/ApiService';
export default defineComponent({
  name: 'doc',
  components: {
    [Header.name]: Header,
    [Nav.name]: Nav,
    [Footer.name]: Footer,
    [DemoPreview.name]: DemoPreview
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const excludeTaroVue = ['/intro', '/start', '/theme', '/joinus', '/starttaro', '/contributing'];

    const excludeTaroReact = [
      '/intro-react',
      '/start-react',
      '/theme-react',
      '/joinus',
      '/international',
      '/resource',
      '/contributing'
    ];

    const data = reactive({
      demoUrl: 'demo.html',
      curKey: 'vue',
      tabs: [
        {
          key: 'vue',
          text: 'vue'
        },
        {
          key: 'taro',
          text: 'taro'
        }
      ]
    });
    const contributorsData = ref([]); //贡献者表格

    const configNav = computed(() => {
      let tarodocs = [] as string[];
      nav.map((item) => {
        item.packages.forEach((element) => {
          let { tarodoc, name } = element;
          if (tarodoc) {
            tarodocs.push(name.toLowerCase());
            tarodocs.push(`${name.toLowerCase()}-taro`);
          }
        });
      });
      return tarodocs;
    });

    const isTaro = (router: RouteLocationNormalized) => {
      return router.path.indexOf('taro') > -1;
    };

    const isShow = () => {
      let exclude = language == 'vue' ? excludeTaroVue : excludeTaroReact;
      return !exclude.includes(route.path);
    };

    const isShowTaroDoc = computed(() => {
      return configNav.value.findIndex((item) => item === route.path.toLocaleLowerCase().substr(1)) > -1;
    });
    const getContributors = (router: RouteLocationNormalized) => {
      // 贡献者列表接口
      const apiService = new ApiService();
      apiService.getContributors(router.path.toLocaleLowerCase().split('/')[1].split('-')[0]).then((res) => {
        if (res && res.state == 0) {
          contributorsData.value = res.value.data;
        }
      });
    };

    const watchDemoUrl = (router: RouteLocationNormalized) => {
      const { origin, pathname } = window.location;
      RefData.getInstance().currentRoute.value = router.name as string;
      // data.demoUrl = `${origin}${pathname.replace('index.html', '')}demo.html#${router.path}`;
      data.demoUrl = `${demoUrl}${router.path}`;
    };

    const watchDocMd = () => {
      const path = route.path.toLocaleLowerCase();
      router.replace(isTaro(route) ? path.substr(0, path.length - 5) : `${path}-taro`);
    };

    const handleTabs = (curKey: string) => {
      data.curKey = curKey;
      watchDocMd();
    };

    onMounted(() => {
      watchDemoUrl(route);
      data.curKey = isTaro(route) ? 'taro' : 'vue';
      getContributors(route);
    });

    onBeforeRouteUpdate((to) => {
      watchDemoUrl(to);
      data.curKey = isTaro(to) ? 'taro' : 'vue';
      getContributors(to);
    });

    return {
      ...toRefs(data),
      handleTabs,
      isShow,
      isShowTaroDoc,
      language,
      contributorsData
    };
  }
});
</script>

<style lang="scss" scoped>
.doc {
  &-content {
    margin-left: 290px;
    display: flex;
    flex-direction: column;

    &-document {
      min-height: 800px;

      .markdown-body {
        min-height: 600px;
      }
    }
    &-tabs {
      position: absolute;
      right: 445px;
      top: 48px;
      display: flex;
      height: 50px;
      align-items: center;
      margin-bottom: 20px;
      z-index: 1;
      .tab-item {
        position: relative;
        padding: 10px 25px;
        height: 100%;
        cursor: pointer;
        font-size: 16px;
        color: #323232;
        text-align: center;
        border-radius: 4px;
        &.cur {
          color: #fa2c19;
          &:after {
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #fa2c19;
          }
        }
        &:hover {
          background-color: #f7f8fa;
        }
      }
    }
    &-contributors {
      margin: 50px 0;
      a {
        position: relative;
      }
      img {
        height: 26px;
        height: 26px;
        border-radius: 50%;
        margin-left: 8px;
      }
      .contributors-hover {
        display: none;
        padding: 5px 10px;
        color: #fff;
        font-size: 12px;
        background-color: #000;
        border-radius: 5px;
        position: absolute;
        /* min-width:150px; */
        white-space: nowrap;
        top: -200%;
        transform: translateX(-55%);
      }
      a:hover {
        .contributors-hover {
          display: inline-block;
        }
      }
    }
  }
}
</style>
