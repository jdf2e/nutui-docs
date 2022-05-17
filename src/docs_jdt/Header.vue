<template>
  <div class="doc-header doc-header-jdt" id="jdtHeader">
    <div class="header-logo">
      <a class="logo-link" href="#" @click="toHome"></a>
    </div>
    <div class="header-nav">
      <Search />
      <div class="nav-box">
        <ul class="nav-list">
          <li class="nav-item" v-for="item in header" :key="item.name" :class="{ active: isActive(item.name) }">
            <a :href="item.path">
              {{ item.cName }}
            </a>
          </li>
          <li class="nav-item">
            <div
              @mouseenter="onMouseHover(true)"
              @mouseleave="onMouseHover(false)"
              tabindex="0"
              class="header-select-box"
              :class="[data.isShowGuid == true ? 'select-up' : 'select-down']"
              @click.stop="data.isShowGuid = !data.isShowGuid"
            >
              <div class="header-select-hd">{{ data.verson }}<i class=""></i></div>
              <div class="guild-line"></div>
              <transition name="fade">
                <div class="guid-data" v-show="data.isShowGuid">
                  <div
                    class="info"
                    v-for="(item, indexKey) in guide"
                    :key="indexKey"
                    :class="{ contentKey: indexKey === 1 }"
                  >
                    <div class="header">
                      <img :src="item.icon" class="icon" />
                      <div class="type"> {{ item.type }}</div>
                    </div>
                    <div
                      class="content"
                      v-for="(info, index) in item.data"
                      :key="index"
                      @click.stop="checkGuidTheme(info)"
                      :class="{
                        active: (info.name === 'vue 3.x' || info.name === '1.x') && item.type.toLowerCase() == language
                      }"
                    >
                      <div class="version"> {{ info.name }}</div>
                      <div class="list">
                        <div class="lang" v-for="(lang, index) in info.language" :key="index"
                          ><div class="name">{{ lang }}</div>
                        </div></div
                      >

                      <div class="app"> {{ info.app }}</div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </li>
          <li class="nav-item">
            <a class="user-link" target="_blank" v-if="repository.git" :href="repository.git"></a>
            <a class="user-link gitee" target="_blank" v-if="repository.gitee" :href="repository.gitee"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import Search from '@/components/Search.vue';
import { header, versions, version, nav, repository, language, guide } from '@/config/index';
import { RefData } from '@/assets/util/ref';
export default defineComponent({
  name: 'doc-header-jdt',
  components: {
    Search
  },
  setup() {
    let packages = [] as any[];
    nav.forEach((item: any) => {
      packages.push(...item.packages);
    });
    const data = reactive({
      theme: 'black',
      verson: language == 'vue' ? '3.x' : '1.x',
      navIndex: 0,
      activeIndex: 2,
      isShowGuid: false
    });

    const handleFocus = () => {
      console.log(1);
    };

    const handleGuidFocusOut = () => {
      data.isShowGuid = false;
    };

    const onMouseHover = (flag: any) => {
      data.isShowGuid = flag;
    };

    const toHome = () => {
      RefData.getInstance().currentRoute.value = '/';
    };

    const isActive = computed(() => {
      let value = RefData.getInstance().currentRoute.value;
      return function (name: string) {
        const lName = name.toLowerCase();
        if (lName === 'component') {
          if (value.indexOf('-taro') > -1) {
            value = value.split('-taro')[0];
          }
          return packages.findIndex((item) => item.name.toLowerCase() === value) > -1;
        } else {
          return value === lName || lName.includes(value);
        }
      };
    });
    const themeName = computed(() => {
      return function () {
        return `doc-header-${RefData.getInstance().themeColor.value}`;
      };
    });
    const checkGuidTheme = (item: any, index: number) => {
      data.isShowGuid = false;
      window.open(item.link);
    };
    return {
      header,
      versions,
      version,
      repository,
      data,
      language,
      toHome,
      isActive,
      checkGuidTheme,
      themeName,
      handleFocus,
      handleGuidFocusOut,
      onMouseHover,
      guide
    };
  }
});
</script>

<style lang="scss" scoped>
#jdtHeader {
  z-index: 5;
  .logo-link {
    background: url('@/docs_jdt/assets/images/logo.png') no-repeat center/100%;
  }

  .header-select-hd {
    border: 1px solid;
    color: #000;
    background-image: url('@/docs_jdt/assets/images/arrow-down.png');
  }
  .guild-line {
    position: absolute;
    right: 0%;
    height: 20px;
    width: 77px;
    background: transparent;
  }

  .guid-data {
    position: absolute;
    top: 40px;
    right: 0%;
    margin-left: -60px;
    overflow: hidden;
    padding-left: 29px;
    padding-right: 29px;
    width: 336px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #f0f2f5;
    border-radius: 12px;
    z-index: 10;
    .info {
      padding-top: 16px;
      padding-bottom: 22px;
      &:first-child {
        border-bottom: 1px solid $theme-black-nav-select-border;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        line-height: 24px;
        .icon {
          width: 22px;
          height: 19px;
          margin-right: 9px;
        }
      }
      .content {
        padding-top: 6px;
        padding-bottom: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 24px;
        margin-top: 2px;
        margin-bottom: 2px;
        border-radius: 4px;
        &.active {
          background-color: $theme-black-nav-select-active-bg;
        }
        &:hover {
          background-color: $theme-black-nav-select-hover-bg;
        }
        .version {
          width: 91px;
          text-align: center;
        }
        .list {
          width: 95px;
          height: 24px;
          align-items: center;
          justify-content: flex-start;
          display: flex;
          .lang {
            height: 24px;
            background: $doc-nav-icon-bg1;
            border-radius: 4px;
            margin-right: 4px;
            &:nth-child(2) {
              background: $doc-nav-icon-bg2;
              .name {
                color: $doc-nav-icon-color2;
              }
            }
            .name {
              padding-left: 6px;
              padding-right: 6px;
              font-size: 14px;
              font-family: PingFangSC;
              font-weight: normal;
              color: $doc-nav-icon-color1;
            }
          }
        }
        .app {
          display: flex;
          justify-content: flex-start;
          width: 64px;
          margin-left: 18px;
          margin-right: 19px;
        }
      }
    }
  }

  .search-box {
    visibility: hidden;
  }

  .search-input {
    color: red;
    background-position: 0 0;
    &::-webkit-input-placeholder {
      color: red;
    }
  }

  .nav-item {
    a {
      color: #000;
    }
  }
  .nav-item.active:after {
    content: none;
  }

  .user-link {
    display: inline-block;
    width: 26px;
    height: 26px;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-image: url('@/docs_jdt/assets/images/github-icon.png');
    background-size: 26px;

    &.gitee {
      margin-left: 20px;
      background-image: url('@/docs_jdt/assets/images/gitee-icon.png');
    }
  }
}
</style>
