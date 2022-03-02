<template>
  <div class="doc-footer" :class="`doc-footer-${themeColor}`">
    <div class="doc-footer-content" :class="!showLogo ? 'minisize' : ''">
      <div class="doc-footer-list" v-if="showLogo">
        <img class="doc-footer-logo" v-if="language.toLowerCase() == 'vue'" src="@/assets/images/logo-header-red.png" />
        <img class="doc-footer-logo" v-else src="@/assets/images/logo-header-red-react.png" />
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">相关产品</h4>

        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="https://taro.jd.com" v-hover>Taro</a>
        </div>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="http://deco.jd.com/" v-hover>Deco</a>
        </div>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="https://relay.jd.com" v-hover>Relay</a>
        </div>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="https://ling.jd.com/jdw" v-hover>羚珑</a>
        </div>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="https://legao.jd.com/" v-hover>Legao</a>
        </div>
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">社区</h4>
        <div class="doc-footer-item"><a class="sub-link" target="_blank" :href="repository.git" v-hover>GitHub</a></div>
        <div class="doc-footer-item vx-item">
          <span v-hover>微信</span>
          <i class="icon-vx"></i>
          <div class="vx-box">
            <p class="vx-desc">微信交流群</p>
            <p class="vx-desc">扫码添加好友</p>
            <img class="img-code" src="@/assets/images/vx-codeys.png" />
            <p class="vx-desc">回复<span class="vx-red">NutUI</span>即刻进群</p>
          </div>
        </div>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="https://juejin.cn/user/3949101495616919" v-hover>掘金专栏</a></div
        >
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="https://space.bilibili.com/549965366" v-hover>哔哩哔哩</a></div
        >
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="https://www.zhihu.com/column/c_1263837684834889728" v-hover
            >知乎专栏</a
          ></div
        >

        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="timline://chat/?topin=82957939&type=2" v-hover
            >咚咚群：82957939</a
          ></div
        >
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">帮助</h4>
        <div class="doc-footer-item"><a class="sub-link" :href="repository.releases" v-hover>更新日志</a></div>
        <div class="doc-footer-item"><a class="sub-link" target="_blank" href="#/notice" v-hover>常见问题</a></div>
        <div class="doc-footer-item" v-if="language.toLowerCase() == 'vue'"
          ><a class="sub-link" target="_blank" href="#/contributing" v-hover>贡献指南</a></div
        >
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" :href="repository.issues" v-hover>报告 Bug</a>
        </div>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" :href="repository.discussions" v-hover>讨论区</a>
        </div>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" :href="repository.plan" v-hover>开发计划</a></div
        >
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">关于我们</h4>
        <div class="doc-footer-item"><a class="sub-link" href="#/joinus" v-hover>加入我们</a></div>
        <div class="doc-footer-item"><a class="sub-link" href="mailto:nutui@jd.com" v-hover>联系我们</a></div>
        <div class="doc-footer-item"
          ><a class="sub-link" target="_blank" href="http://fe.jd.com" v-hover>京东前端</a></div
        >
      </div>
      <div class="doc-footer-list" @click.stop="data.isShowSelect = !data.isShowSelect">
        <div class="doc-footer-select-hd"><i class="icon-color"></i>主题换肤</div>
        <div class="doc-footer-select-bd" v-show="data.isShowSelect">
          <div
            class="doc-footer-select-item"
            v-for="(item, index) in data.themeList"
            :key="index"
            @click.stop="checkTheme(item.color, index)"
            :class="{ active: data.activeIndex === index }"
          >
            <i :class="`circle-${item.color}`"></i>{{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- <p class="doc-footer-desc">2021 京东零售 - 平台产品部 - 基础业务体验部.&nbsp;All Rights Reserved.</p> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { repository, language } from '@/config/index';
import { RefData } from '@/assets/util/ref';
export default defineComponent({
  name: 'doc-footer',
  props: {
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    console.log(props.showLogo, 6666666666);
    const data = reactive({
      themeList: [
        {
          name: '热情红',
          color: 'red'
        },
        {
          name: '暗黑风',
          color: 'black'
        },
        {
          name: '纯净白',
          color: 'white'
        }
      ],
      activeIndex: 0,
      isShowSelect: false
    });
    const clickOut = () => {
      //点击组件以外的地方，收起
      document.addEventListener(
        'click',
        (e) => {
          console.log('e.target', e.target);
        },
        false
      );
    };
    // checked active index
    data.activeIndex = data.themeList.findIndex((i) => i.color == RefData.getInstance().themeColor.value);
    const checkTheme = (color: string, index: number) => {
      data.isShowSelect = false;
      data.activeIndex = index;
      RefData.getInstance().themeColor.value = color;
      localStorage.setItem('nutui-theme-color', color);
    };
    return {
      themeColor: RefData.getInstance().themeColor,
      repository,
      language,
      data,
      clickOut,
      checkTheme
    };
  }
});
</script>

<style lang="scss">
.doc {
  &-footer {
    margin-top: 30px;
    padding: 30px 80px 20px;
    text-align: center;
    &-content {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &-list {
      position: relative;
      &:first-child {
        margin-right: 65px;
      }
    }
    &-logo {
      margin-top: 8px;
    }
    &-title {
      margin-bottom: 24px;
      font-size: 16px;
      font-weight: bold;
      text-align: left;
    }
    &-item {
      margin-bottom: 14px;
      line-height: 17px;
      font-size: 12px;
      text-align: left;
      cursor: pointer;
      .sub-link {
        // cursor: pointer;
      }
    }
    &-desc {
      font-size: 12px;
      line-height: 30px;
    }
    &-select-hd {
      width: 92px;
      height: 32px;
      padding: 0 10px;
      line-height: 32px;
      font-size: 12px;
      text-align: left;
      border-width: 1px;
      border-style: solid;
      border-radius: 2px;
      cursor: pointer;
    }
    &-select-bd {
      position: absolute;
      border-radius: 2px;
      text-align: left;
    }
    .minisize {
      width: 100%;
    }
    .minisize {
      .doc-footer-select-hd {
        margin-top: 24px;
      }
    }
    &-select-item {
      width: 92px;
      height: 32px;
      padding: 0 10px;
      line-height: 32px;
      font-size: 12px;
      border-width: 0px 1px 1px;
      border-style: solid;
      border-radius: 2px;
      cursor: pointer;
    }
    .icon-color {
      display: inline-block;
      width: 12px;
      height: 10px;
      margin-right: 10px;
      background: url('@/assets/images/icon-color.png') no-repeat center/100%;
    }
    .circle-red,
    .circle-black,
    .circle-white {
      position: relative;
      top: -1px;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 10px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}
// 颜色
.doc-footer {
  // height: 240px;
  // 黑色
  &-black {
    background: $theme-black-footer-bg;
    border-top: 1px solid $theme-black-footer-border;
    .doc-footer {
      &-title {
        color: $theme-black-footer-word1;
      }
      &-item {
        color: $theme-black-footer-word2;
        .sub-link {
          color: $theme-black-footer-word2;
        }
      }
      &-desc {
        color: $theme-black-footer-word4;
      }
      &-select-hd {
        color: $theme-black-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-black-theme-border;
        &:hover {
          color: $theme-black-footer-hover;
        }
      }
      &-select-item {
        color: $theme-black-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-black-theme-border;
        .circle-red {
          background: $theme-red-gradient;
        }
        .circle-black {
          background: $theme-black-circle;
          border: 1px solid $theme-black-theme-border;
        }
        .circle-white {
          background: $theme-white-circle;
        }
        &:hover {
          background-color: $theme-black-theme-border;
          .circle-black {
            border-color: $theme-black-circle;
          }
        }
        &.active {
          background-color: $theme-black-footer-hover;
          border-color: $theme-black-footer-hover;
          .circle-red {
            border: 1px solid $theme-red-border;
          }
          .circle-black {
            border-color: $theme-black-footer-bg;
          }
        }
      }
    }
  }
  // 白色、红色
  &-white,
  &-red {
    background: $theme-white-footer-bg;
    border-top: 1px solid $theme-white-footer-border;
    .doc-footer {
      &-title {
        color: $theme-white-footer-word1;
      }
      &-item {
        color: $theme-white-footer-word2;
        .sub-link {
          color: $theme-white-footer-word2;
        }
      }
      &-desc {
        color: $theme-white-footer-word4;
      }
      &-select-hd {
        color: $theme-white-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-white-theme-border;
        &:hover {
          color: $theme-white-footer-hover;
        }
      }
      &-select-item {
        color: $theme-white-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-white-theme-border;
        .circle-red {
          background: $theme-red-gradient;
        }
        .circle-black {
          background: $theme-black-circle;
          border: 1px solid $theme-black-circle;
        }
        .circle-white {
          background: $theme-white-circle;
          border: 1px solid $theme-white-circle-border;
        }
        &:hover {
          color: $theme-white-footer-word3;
          background-color: $theme-white-theme-border;
          .circle-black {
            border-color: $theme-black-circle;
          }
        }
        &.active {
          color: $theme-white;
          background-color: $theme-white-footer-hover;
          border-color: $theme-white-footer-hover;
          .circle-red {
            border: 1px solid $theme-red-border;
          }
          .circle-black {
            border-color: $theme-black-circle;
          }
          .circle-white {
            border-color: $theme-white-circle;
          }
        }
      }
    }
  }
}
.vx-item {
  position: relative;
  &:hover {
    .vx-box {
      display: block;
    }
  }
}
.icon-vx {
  display: inline-block;
  width: 13px;
  height: 13px;
  margin-left: 5px;
  vertical-align: -2px;
  background: url('@/assets/images/icon-footer-vx.png') no-repeat center/100%;
}
.vx-box {
  display: none;
  position: absolute;
  right: -144px;
  top: -160px;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
  box-shadow: 0px 2px 4px 0px rgba(143, 143, 143, 0.5);
  .vx-desc {
    margin-bottom: 10px;
    line-height: 17px;
    font-size: 12px;
    color: #1a1a1a;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .img-code {
    width: 121px;
    height: 121px;
    margin-bottom: 10px;
  }
  .vx-red {
    margin: 0 4px;
    font-weight: bold;
    color: #fa2c19;
  }
}
</style>
