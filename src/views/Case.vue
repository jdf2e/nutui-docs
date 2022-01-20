<template>
  <doc-header></doc-header>
  <div class="resource-main">
    <div class="resource-main-content">
      <h3 class="sub-title">案例</h3>
      <p class="sub-desc">这里有 NutUI 开发的优秀项目案例，您也可以上传您的开发成果，期待您的投稿。</p>
    </div>
  </div>
  <!-- 案例 -->
  <div class="resource-content">
    <div class="resource-block">
      <h4 class="sub-title">上传案例地址</h4>
      <p class="sub-desc">
        请<a class="download" target="_blank" href="https://get.jd.com/#/survey/index?id=4217247740034539"> 点击上传 </a
        >或微信扫描下方二维码。
        <br />
        <img class="sub-ercode" src="@/assets/images/case-ercode.png" />
      </p>
      <p class="sub-desc"
        >我们将从所有案例中挑出一个优秀案例（每两月），送出一个<a
          target="_blank"
          class="download"
          href="https://img12.360buyimg.com/imagetools/jfs/t1/170596/37/27410/2643716/61b72009Ec4332f11/f7ba0a1f661effac.jpg"
          >小礼品。</a
        >
      </p>
      <img
        class="sub-gifs"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/170596/37/27410/2643716/61b72009Ec4332f11/f7ba0a1f661effac.jpg"
        alt=""
        srcset=""
      />
    </div>
    <div class="resource-block">
      <div class="no-data" v-if="caseList.length === 0">
        <img class="nodata-img-joy" src="@/assets/images/img-joy.png" />
        <p class="nodata-desc">敬请期待</p>
      </div>
      <div class="tab-box" v-else>
        <h4 class="sub-title">全部案例</h4>
        <template v-for="pItem in caseList" v-show="activeIndex === 0">
          <h3>{{ pItem.year }}</h3>
          <div class="tab-bd">
            <div class="design-item" v-for="(item, i) in pItem.list" :key="i">
              <img
                class="img-design"
                :src="item.cover_image.split(',')[0]"
                @click="showDesignImgFun(item.cover_image.split(','))"
              />
              <p class="design-title" v-hover @click="showDesignImgFun(item.cover_image.split(','))">{{
                item.product_name
              }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>

  <div
    class="resource-design-item-swiper"
    v-if="showDesignItemImg && showDesignItemArray.length > 0"
    @click="closeSwiper"
  >
    <div class="resource-design-item-swiper-main" v-if="showDesignItemArray.length > 1">
      <div class="resource-design-item-swiper-main-lefticon" @click.stop="onLeft"></div>
      <div class="resource-design-item-swiper-main__list">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in showDesignItemArray" :key="index">
            <img :src="item" />
          </div>
        </div>
      </div>
      <div class="resource-design-item-swiper-main-righticon" @click.stop="onRight"></div>
    </div>

    <div class="resource-design-item-swiper-main" v-else>
      <div class="resource-design-item-swiper-main__list">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in showDesignItemArray" :key="index">
            <img :src="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <doc-footer></doc-footer>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { RefData } from '@/assets/util/ref';
import Swiper from 'swiper/swiper-bundle.min.js';
import { ApiService } from '@/service/ApiService';
export default defineComponent({
  name: 'doc',
  components: {
    [Header.name]: Header,
    [Footer.name]: Footer
  },
  setup() {
    const caseList: any[] = [];
    const data = reactive({
      caseList,
      showNutuiCat: false,
      showDesignItemImg: false,
      showDesignItemArray: []
    });
    let caseSwiper: any = null;
    const watchDemoUrl = (router: RouteLocationNormalized) => {
      RefData.getInstance().currentRoute.value = router.name as string;
    };
    onMounted(() => {
      // 路由
      const route = useRoute();
      watchDemoUrl(route);

      // 文章列表接口
      const apiService = new ApiService();
      apiService.getCases(0).then((res) => {
        if (res?.state == 0) {
          (res.value.data.arrays as any[]).forEach((element) => {
            let year = element.create_time.split('-')[0];
            let index = data.caseList.findIndex((item) => item.year == year);
            if (index == -1) {
              data.caseList.push({
                year,
                list: [element]
              });
            } else {
              data.caseList[index].list.push(element);
            }
          });
        }
      });
    });
    onBeforeRouteUpdate((to) => {
      watchDemoUrl(to);
    });

    const onLeft = () => {
      caseSwiper.slidePrev();
    };

    const onRight = () => {
      caseSwiper.slideNext();
    };
    const showDesignImgFun = (item: []) => {
      data.showDesignItemArray = [].concat(item);
      data.showDesignItemImg = true;
      if (item.length > 1) {
        setTimeout(() => {
          caseSwiper = new Swiper('.resource-design-item-swiper-main__list', {
            direction: 'horizontal',
            loop: true,
            touchRatio: 0
          });
        }, 500);
      }
    };

    const closeSwiper = () => {
      data.showDesignItemImg = false;
      caseSwiper = null;
    };
    return {
      ...toRefs(data),
      onLeft,
      onRight,
      showDesignImgFun,
      closeSwiper
    };
  }
});
</script>

<style lang="scss" scoped>
$mainRed: #fa685d;
.resource {
  &-main {
    background-color: #1d1d1d;
    &-content {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 48px;
      padding-bottom: 53px;
      background: url('@/assets/images/bg-article.png') no-repeat;
      background-size: 307px 200px;
      background-position: right 280px top 0;
      .sub-title {
        margin-left: 8px;
        margin-bottom: 40px;
        line-height: 36px;
        font-size: 30px;
        color: $white;
      }
      .sub-desc {
        line-height: 22px;
        font-size: 16px;
        color: $white;
      }
    }
  }
  &-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
  }
  &-block {
    margin-bottom: 50px;
    text-align: left;
    .download {
      color: #38f;
    }
    > img {
      width: 100%;
      box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    }
    .sub-title {
      margin-bottom: 15px;
      line-height: 42px;
      font-size: 30px;
      color: #1a1a1a;
    }
    .sub-desc {
      margin-bottom: 40px;
      line-height: 22px;
      font-size: 16px;
      color: #959fb1;
      .sub-ercode {
        width: 130px;
        margin-top: 40px;
      }
    }
    .sub-gifs {
      width: 200px;
      height: auto;
      box-shadow: 0 2px 4px 1px rgb(40 120 255 / 8%), 0 0 6px 1px rgb(0 0 0 / 8%);
    }
    .sub-red {
      color: #fa2c19;
    }
  }

  &-design-item-swiper {
    position: fixed;
    // top: 64px;
    z-index: 9999;
    width: 100%;
    min-width: 1300px;
    height: calc(100% - 64px);
    background: rgba(0, 0, 0, 0.9);

    &-main {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-lefticon {
        margin-left: 50px;
        width: 50px;
        height: 50px;
        background-image: url('@/assets/images/right-arrow.png');
        transform: rotate(180deg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        &:hover {
          transform: rotate(0);
          background-image: url('@/assets/images/left-arrow.png');
        }
      }
      &-righticon {
        margin-right: 50px;
        width: 50px;
        height: 50px;
        background-image: url('@/assets/images/right-arrow.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        z-index: 1;
        &:hover {
          transform: rotate(180deg);
          background-image: url('@/assets/images/left-arrow.png');
        }
      }
      &__list {
        flex: 1;
        overflow: hidden;
        height: 100%;
      }
      .swiper-wrapper {
        display: flex;
        .swiper-slide {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          > img {
            width: auto;
            max-height: 100%;

            &::selection {
              background: transparent !important;
            }
          }
        }
      }
    }
  }
}
.no-data {
  text-align: center;
  .nodata-img-joy {
    width: 269px;
    height: 153px;
    margin-bottom: 30px;
  }
  .nodata-desc {
    font-size: 16px;
    color: #959fb1;
  }
}
.tab {
  &-box {
    > h3 {
      margin-bottom: 10px;
    }
  }
  &-hd {
    display: flex;
    margin-bottom: 30px;
  }
  &-bd {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  &-hd-item {
    margin-right: 40px;
    line-height: 25px;
    font-size: 18px;
    color: #808080;
    cursor: pointer;
    &:first-child {
      color: #1a1a1a;
    }
    &.active {
      color: #e32c36;
    }
  }
}
.design {
  &-item {
    width: 280px;
    margin-right: 26px;
    margin-bottom: 45px;
    cursor: pointer;
    &:nth-child(4n) {
      margin-right: 0;
    }
    .img-design {
      width: 180px;
      height: 390px;
      margin-bottom: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px 1px rgb(40 120 255 / 8%), 0 0 6px 1px rgb(0 0 0 / 8%);
    }
  }
  &-title {
    width: 280px;
    height: 44px;
    line-height: 22px;
    font-size: 16px;
    color: #1d1d21;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.article {
  &-item {
    position: relative;
    padding-left: 34px;
    margin-bottom: 20px;
    color: $mainRed;
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -8px;
      width: 12px;
      height: 12px;
      border: 2px solid #fa2c19;
      border-radius: 50%;
    }
  }
  &-link {
    line-height: 22px;
    font-size: 14px;
    color: $mainRed;
    cursor: pointer;
  }
}
</style>
