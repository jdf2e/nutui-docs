// 抽象配置中心

import homefeatures1 from '@/assets/images/img-home-features1.png';
import homefeatures2 from '@/assets/images/img-home-features2.png';
import homefeatures3 from '@/assets/images/img-home-features3.png';
import homefeatures4 from '@/assets/images/img-home-features4.png';
import homefeatures5 from '@/assets/images/img-home-features5.png';

// React 官网配置
export const SiteReact = {
  repository: {
    git: 'https://github.com/jdf2e/nutui-react',
    gitee: '',
    releases: 'https://github.com/jdf2e/nutui-react/releases', // git 更新日志
    issues: 'https://github.com/jdf2e/nutui-react/issues',
    discussions: 'https://github.com/jdf2e/nutui-react/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  versions: [
    {
      name: '1.x',
      link: '/'
    },
    {
      name: 'nutui-vue',
      link: 'https://nutui.jd.com/'
    }
  ],
  header: [
    {
      name: 'intro,theme,start',
      cName: '指南',
      path: '#/intro-react'
    },
    {
      name: 'component',
      cName: '组件',
      path: '#/button'
    },
    {
      name: 'example',
      cName: '示例',
      path: 'demo.html'
    },
    {
      name: 'resource',
      cName: '资源',
      path: '#/resource'
    },
    {
      name: 'notice',
      cName: '通知',
      path: '#/notice'
    },
    {
      name: 'joinus',
      cName: '加入我们',
      path: '#/joinus'
    }
  ],
  homePage: {
    gitstar: 'https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui-react&type=star&count=true&size=large',
    platform: [
      {
        title: '京东风格',
        desc: '遵循京东 App 10.0 设计规范',
        url: homefeatures1
      },
      {
        title: '前沿技术',
        desc: 'React Vite 2.x TypeScript',
        url: homefeatures3
      },
      //   {
      //     title: '适配多端',
      //     desc: '基于 Taro 轻松开发多端小程序',
      //     url: homefeatures5
      //   },
      {
        title: '组件丰富',
        desc: '30+ 组件，覆盖多数业务场景',
        url: homefeatures2
      },
      {
        title: '贴心通道',
        desc: '社区维护 高效服务<br />技术支持 经验沉淀',
        url: homefeatures4
      }
    ],
    // 是否展示taro楼层
    taroShow: false,
    bizComponent: [],
    cases: {
      show: false
    },
    // 学习资源
    article: {
      show: true,
      moreRouter: '#/resource'
    }
  },
  language: 'react'
};

// React 官网配置
export const SiteVue = {
  repository: {
    git: 'https://github.com/jdf2e/nutui',
    gitee: 'https://gitee.com/jd-platform-opensource/nutui',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://github.com/jdf2e/nutui/issues',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  versions: [
    {
      name: '1.x',
      link: '/1x/'
    },
    {
      name: '2.x',
      link: '/2x/'
    },
    {
      name: '3.x',
      link: '/'
    },
    {
      name: 'nutui-jdl',
      link: '/jdl/'
    },
    {
      name: 'nutui-react',
      link: 'https://nutui.jd.com/react'
    }
  ],
  header: [
    {
      name: 'intro,theme,start',
      cName: '指南',
      path: '#/intro'
    },
    {
      name: 'component',
      cName: '组件',
      path: '#/button'
    },
    {
      name: 'example',
      cName: '示例',
      path: 'demo.html'
    },
    {
      name: 'case',
      cName: '案例',
      path: '#/case'
    },
    {
      name: 'resource',
      cName: '资源',
      path: '#/resource'
    },
    {
      name: 'notice',
      cName: '通知',
      path: '#/notice'
    },
    {
      name: 'joinus',
      cName: '加入我们',
      path: '#/joinus'
    }
  ],
  // 官网 首页
  homePage: {
    gitstar: 'https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large',
    // 平台资源楼层
    platform: [
      {
        title: '京东风格',
        desc: '遵循京东 App 10.0 设计规范',
        url: homefeatures1
      },
      {
        title: '前沿技术',
        desc: 'Vue3 Vite 2.x TypeScript',
        url: homefeatures3
      },
      {
        title: '适配多端',
        desc: '基于 Taro 轻松开发多端小程序',
        url: homefeatures5
      },
      {
        title: '组件丰富',
        desc: '70+ 组件，覆盖多数业务场景',
        url: homefeatures2
      }
      // {
      //   title: '贴心通道',
      //   desc: '社区维护 高效服务<br />技术支持 经验沉淀',
      //   url: homefeatures4,
      // },
    ],
    // 是否展示taro楼层
    taroShow: true,
    // 是否展示 业务组件
    bizComponent: [
      {
        title: 'cat',
        desc: '基于 NutUI 的大促组件',
        release: true
      },
      {
        title: 'bingo',
        desc: '基于 NutUI 的抽奖组件',
        release: false
      }
    ],
    // 应用案例
    cases: {
      show: true,
      moreRouter: '#/case'
    },

    // 学习资源
    article: {
      show: true,
      moreRouter: '#/resource'
    }
  },
  language: 'vue'
};
