/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/views/Index.vue';
import Resource from '@/views/Resource.vue';
import Case from '@/views/Case.vue';
import Notice from '@/views/Notice.vue';
import NoticeDetail from '@/views/NoticeDetail.vue';
import Main from './Main.vue';
import config from '@/config/env';
const pagesRouter: Array<RouteRecordRaw> = [];

/** vite */

const modulesPage = (import.meta as any).glob('/src/docs_vue/docs/**/doc.md');
for (const path in modulesPage) {
  let name = (/docs_vue\/docs\/(.*)\/doc.md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: '/' + name,
    component: modulesPage[path],
    name
  });
}

/** vite-taro **/
const modulesPageTaro = (import.meta as any).glob('/src/docs_vue/docs/**/*.taro.md');
for (const path in modulesPageTaro) {
  let name = (/docs_vue\/docs\/(.*)\/doc.taro.md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: `/${name}-taro`,
    component: modulesPageTaro[path],
    name: `${name}-taro`
  });
}

/** vite */
const modulesDocs = (import.meta as any).glob('/src/docs/*.md');
for (const path in modulesDocs) {
  let name = (/docs\/(.*).md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: '/' + name,
    component: modulesDocs[path],
    name
  });
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Main
    // children: pagesRouter
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: pagesRouter
  },
  {
    path: '/case',
    name: 'case',
    component: Case
  },
  {
    path: '/resource',
    name: 'resource',
    component: Resource
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice
  },
  {
    path: '/noticedetail',
    name: 'noticedetail',
    component: NoticeDetail
  }
];
routes.push({
  name: 'notFound',
  path: '/:path(.*)+',
  redirect: {
    name: '/'
  }
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const id = to.hash.split('#')[1];
      const ele = document.getElementById(id);
      setTimeout(() => {
        ele && ele.scrollIntoView(true);
      });
    }
  }
});
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
  try {
    setTimeout(() => {
      new Image().src = `${config.baseUrl}/openapi/point?p=${encodeURIComponent(JSON.stringify(location))}`;
    }, 500);
  } catch (error) {}
});
export default router;
