// 抽象配置中心
const site_config = {
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
      link: 'https://github.com/jdf2e/nutui-react'
    },
    {
      name: 'nutui-cat',
      link: 'https://github.com/jdf2e/nutui-cat'
    },
    {
      name: 'nutui-bingo',
      link: 'https://github.com/jdf2e/nutui-bingo'
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
  ]
};
import vueConfig from '../docs_vue/config.json';
import reactConfig from '../docs_react/config.json';
let config: any = {};
if (import.meta.env.BASE_URL.includes('react')) {
  config = reactConfig;
} else {
  config = vueConfig;
}
let { nav, docs, version, demoUrl } = config;
const { versions, header } = site_config;
export { nav, versions, header, docs, version, demoUrl };
