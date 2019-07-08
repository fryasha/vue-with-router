import Vue from 'vue';
import Router from 'vue-router';

// import Home from './views/Home.vue';
// import About from './views/About.vue';
import RouterWrap from './views/RouterWrap.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home',
    },
    // all data from this file renders to <router-view> tag;
    {
      path: '/:slug',
      name: 'Wrap',
      component: RouterWrap,
    },
  ],
});
