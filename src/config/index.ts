import vueConfig from '../docs_vue/config.json';
import reactConfig from '../docs_react/config.json';

import { SiteReact, SiteVue } from './baseConfig';

let config: any = {};

let guide = [
  {
    type: 'Vue',
    icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/221256/40/8490/1929/61d64810Ec6a88d27/99270cce560545d5.png',
    data: [
      {
        name: '1.0',
        link: '/1x/',
        language: ['Vue2'],
        app: 'App 7.0'
      },
      {
        name: '2.x',
        link: '/2x/',
        language: ['Vue2'],
        app: 'App 7.0'
      },
      {
        name: '3.x',
        link: '/',
        language: ['Vue3', 'Taro'],
        app: 'App 10.0'
      },
      {
        name: 'JDL',
        link: '/jdl/',
        language: ['Vue2'],
        app: '物流视觉'
      },
      {
        name: 'JDT',
        link: '/?theme=jdt/#/button',
        language: ['Vue3', 'Taro'],
        app: '科技视觉'
      }
    ]
  },

  {
    type: 'React',
    icon: 'https://img10.360buyimg.com/imagetools/jfs/t1/91454/20/21042/3482/61d64815E5c35af0a/ecf7aded2f5ffc6b.png',
    data: [
      {
        name: '1.x',
        link: 'https://nutui.jd.com/react',
        language: ['React17'],
        app: 'App 10.0'
      }
    ]
  }
];
if ((import.meta as any).env.BASE_URL.includes('react')) {
  config = {
    ...reactConfig,
    ...SiteReact
  };
} else {
  config = {
    ...vueConfig,
    ...SiteVue
  };
}

export const { nav, docs, version, demoUrl, homePage, versions, header, language, repository } = config;
export { guide };
