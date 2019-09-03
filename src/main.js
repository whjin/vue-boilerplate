import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import RouterConfig from './router/main';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter(RouterConfig);

const store = new Vuex.Store({});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
