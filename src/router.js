import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import TempComp from './components/TempComp.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // all data from this file renders to <router-view> tag;
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      // here we can pass additional <router-view> for nested routes inside our router;
      children: [
        {
          path: ':slug',
          name: 'children',
          component: TempComp,
        },
      ],
    },
  ],
});
