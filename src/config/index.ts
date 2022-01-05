import vueConfig from '../docs_vue/config.json';
import reactConfig from '../docs_react/config.json';

import { SiteReact, SiteVue } from './baseConfig';

let config: any = {};
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
