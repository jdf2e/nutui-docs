<template>
  <!-- <div class="v3-banner" :class="{ active: true }">
    NutUI 正在参与 OSC 2021 年度中国开源项目评选（您的鼓励是我们坚持不懈的源动力)，请为我们投上宝贵的一票吧。
    <a href="https://www.oschina.net/project/top_cn_2021/?id=65&fr=nutui" target="_blank">去投票</a>
  </div> -->
  <div class="doc-header" :class="themeName()">
    <div class="header-logo">
      <a class="logo-link" :class="{ [language]: language }" href="#" @click="toHome"></a>
      <span class="logo-border"></span>
      <span class="version" v-if="language == 'vue'">{{ version }}</span>
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
import Search from './Search.vue';
import { header, versions, version, nav, repository, language, guide } from '@/config/index';
import { RefData } from '@/assets/util/ref';
export default defineComponent({
  name: 'doc-header',
  components: {
    Search
  },
  setup() {
    let packages = [] as any[];
    nav.forEach((item) => {
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

<style lang="scss">
.v3-banner {
  position: fixed;
  top: 0;
  transition: all 0.3s;
  > a {
    color: #fff;
    font-weight: bold;
  }
  font-size: 14px;
  width: 100%;
  z-index: 999;
  text-align: center;
  padding: 10px 60px;
  color: #fff;
  background: linear-gradient(
    135deg,
    rgba(242, 20, 12, 1) 0%,
    rgba(232, 34, 14, 1) 69.83950099728881%,
    rgba(242, 77, 12, 1) 100%
  );
}
.doc {
  &-header {
    position: fixed;
    z-index: 3;
    top: 0px;
    left: 0;
    right: 0;
    min-width: 1300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: $doc-header-height;
    line-height: $doc-header-height;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
  }
}
.header {
  &-logo {
    position: relative;
    display: inline-block;
    width: 240px;
    height: 64px;
    .logo-link {
      width: 120px;
      height: 46px;
      vertical-align: middle;
      position: absolute;
      top: 50%;
      margin-top: -23px;

      &.react {
        width: 197px;
      }
    }
    .logo-border {
      width: 1px;
      height: 26px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -13px;
    }
    .version {
      position: absolute;
      right: 70px;
      font-size: 14px;
    }
  }
  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
    width: calc(100% - 240px);
    min-width: 900px;
    padding: 0 40px;
    .nav-box {
      margin-right: 140px;
      .nav-list {
        min-width: 490px;
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-around;
      }
      .nav-item {
        position: relative;
        margin-right: 30px;
        font-size: 14px;
        height: 63px;
        line-height: 63px;
        text-align: center;
        cursor: pointer;
        flex-shrink: 0;
        a {
          display: inline-block;
          line-height: 64px;
        }
        // overflow: hidden;
        &.active {
          font-weight: bold;
          &:after {
            content: '';
            display: inline-block;
            width: 35px;
            height: 13px;
            position: absolute;
            bottom: 3px;
            left: 50%;
            margin-left: -17.5px;
            background: url('@/assets/images/item-active.png');
          }
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
      .user-link {
        display: inline-block;
        width: 26px;
        height: 26px;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-image: url('@/assets/images/icon-user.png');
        background-size: 26px;

        &.gitee {
          margin-left: 8px;
          background-image: url('@/assets/images/icon-gitee.png');
        }
      }
    }
  }
}
.header-select {
  &-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    outline: 0;
  }
  &-hd {
    min-width: 77px;
    height: 28px;
    padding: 0 30px 0 15px;
    line-height: 26px;
    font-size: 14px;
    color: $theme-red-word;
    background-position: right 15px top 12px;
    background-size: 8px 5px;
    background-repeat: no-repeat;
    border-radius: 14px;
  }
  &-bd {
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -60px;
    border-radius: 3px;
    overflow: hidden;
  }
  &-item {
    width: 120px;
    height: 28px;
    padding: 0 12px;
    line-height: 26px;
    font-size: 14px;
    border-width: 0px 1px 1px;
    border-style: solid;
    cursor: pointer;
    &:first-of-type {
      border-top-width: 1px;
    }
  }
}
// 颜色
.doc-header {
  // 红色
  &-red {
    background-image: $theme-red-header-bg;
    color: $theme-red-word;
    .header {
      &-logo {
        .logo-link {
          background: url('@/assets/images/logo-header-white.png') no-repeat center/100%;
          &.react {
            background: url('@/assets/images/logo-header-white-react.png') no-repeat center/100%;
          }
        }
        .logo-border {
          background: $theme-red-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-red-word;
            background-position: 0 0;
            &::-webkit-input-placeholder {
              color: $theme-red-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-red-word;
            a {
              color: $theme-red-word;
            }
            &.active {
              color: $theme-red-actice;
              &:after {
                background-position: 0 0;
              }
              a {
                color: $theme-red-actice;
              }
            }
          }
          .user-link {
            background-position: 0 0;
            // &:hover {
            //   background-position: -26px 0;
            // }
          }
        }
      }
    }
    .header-select {
      &-box {
        position: relative;
        &.select-down {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-white-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-white-up.png');
          }
        }
        .guild-line {
          position: absolute;
          height: 20px;
          width: 77px;
          right: 0%;
          background: transparent;
        }
        .guid-data {
          position: absolute;
          top: 40px;
          right: 0%;
          margin-left: -60px;
          border-radius: 3px;
          overflow: hidden;
          padding-left: 29px;
          padding-right: 29px;
          width: 336px;
          background: $theme-black-nav-select-bg;
          border: 1px solid $theme-black-nav-select-border;
          border-radius: 12px;
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
          .contentKey {
            @extend .info;
            .content {
              .list {
                .lang {
                  background: $doc-nav-icon-bg2;
                  .name {
                    color: $doc-nav-icon-color2;
                  }
                }
              }
            }
          }
        }
      }
      &-hd {
        color: $theme-red-word;
        border: 1px solid $theme-white-select-border;
      }
      &-bd {
        color: $theme-white-select-word;
      }
      &-item {
        border-color: $theme-red-select-border;
        background-color: $theme-red-select-bg;
        &:hover {
          color: $theme-red;
        }
      }
    }
  }
  // 白色
  &-white {
    background: $white;
    color: $theme-white-word;
    border-bottom: 1px solid $theme-white-box-border;
    .header {
      &-logo {
        .logo-link {
          background: url('@/assets/images/logo-header-red.png') no-repeat center/100%;
          &.react {
            background: url('@/assets/images/logo-header-red-react.png') no-repeat center/100%;
          }
        }
        .logo-border {
          background: $theme-white-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-white-word;
            background-position: 0 -22px;
            &::-webkit-input-placeholder {
              color: $theme-white-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-white-word;
            a {
              color: $theme-white-word;
            }
            &.active {
              color: $theme-white-actice;
              &:after {
                background-position: 0 -13px;
              }
              a {
                color: $theme-white-actice;
              }
            }
          }
          .user-link {
            background-position: 0 -25px;
            // &:hover {
            //   background-position: -26px -25px;
            // }
          }
        }
      }
    }
    .header-select {
      &-box {
        position: relative;
        &.select-down {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-gray-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-gray-up.png');
          }
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
          border-radius: 3px;
          overflow: hidden;
          padding-left: 29px;
          padding-right: 29px;
          width: 336px;
          background: $theme-white;
          border: 1px solid $theme-white-select-border;
          border-radius: 12px;
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
                background-color: $theme-white-select-active;
              }
              &:hover {
                background-color: $theme-white-select-hover;
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
          .contentKey {
            @extend .info;
            .content {
              .list {
                .lang {
                  background: $doc-nav-icon-bg2;
                  .name {
                    color: $doc-nav-icon-color2;
                  }
                }
              }
            }
          }
        }
      }
      &-hd {
        color: $theme-white-select-word;
        border: 1px solid $theme-white-select-border;
      }
      &-bd {
        color: $theme-white-select-word;
      }
      &-item {
        border-color: $theme-white-select-border;
        background-color: $theme-white-select-bg;
        &:hover {
          color: $theme-white-actice;
        }
      }
    }
  }
  // 黑色
  &-black {
    background: $black;
    color: $theme-black-word;
    border-bottom: 1px solid $theme-black-box-border;
    .header {
      &-logo {
        .logo-link {
          background: url('@/assets/images/logo-header-red.png') no-repeat center/100%;
          &.react {
            background: url('@/assets/images/logo-header-red-react.png') no-repeat center/100%;
          }
        }
        .logo-border {
          background: $theme-black-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-black-word;
            background-position: 0 -44px;
            &::-webkit-input-placeholder {
              color: $theme-black-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-black-word;
            a {
              color: $theme-black-word;
            }
            &.active {
              color: $theme-black-actice;
              &:after {
                background-position: 0 -13px;
              }
              a {
                color: $theme-black-actice;
              }
            }
          }
          .user-link {
            background-position: 0 -51px;
            // &:hover {
            //   background-position: -26px -51px;
            // }
          }
        }
      }
    }
    .header-select {
      &-box {
        &.select-down {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-white-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('@/assets/images/icon-select-white-up.png');
          }
        }
        .guild-line {
          position: absolute;
          height: 20px;
          right: 0%;
          width: 77px;
          background: transparent;
        }
        .guid-data {
          position: absolute;
          top: 40px;
          right: 0%;
          margin-left: -60px;
          border-radius: 3px;
          overflow: hidden;
          padding-left: 29px;
          padding-right: 29px;
          width: 336px;
          background: $theme-black-nav-select-bg;
          border: 1px solid $theme-black-nav-select-border;
          border-radius: 12px;
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
          .contentKey {
            @extend .info;
            .content {
              .list {
                .lang {
                  background: $doc-nav-icon-bg2;
                  .name {
                    color: $doc-nav-icon-color2;
                  }
                }
              }
            }
          }
        }
      }
      &-hd {
        color: $theme-black-select-word;
        background-color: $theme-black-select-bg;
        border: 1px solid $theme-black-select-border;
      }
      &-bd {
        color: $theme-black-select-word;
      }
      &-item {
        background-color: $theme-black-select-bg;
        border-color: $theme-black-select-bg;
        &:hover {
          background-color: $theme-black-select-hover;
          border-color: $theme-black-select-hover;
        }
      }
    }
  }
}
// 下拉列表选择动画效果
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
