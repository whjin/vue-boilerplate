const Routers = [
  {
    path: '/index',
    mrta: {
      title: '首页'
    },
    component: resolve => require(['./views/index.vue'], resolve)
  },
  {
    path: '/about',
    mrta: {
      title: '关于'
    },
    component: resolve => require(['./views/about.vue'], resolve)
  },
  {
    path: '/user',
    mrta: {
      title: '用户'
    },
    component: resolve => require(['./views/user.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/index'
  }
];

export const RouterConfig = {
//  使用 HTML5 的 history 路由模式
  mode: 'history',
  routes: Routers
};