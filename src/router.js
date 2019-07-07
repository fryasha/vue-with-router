import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import TempComp from './components/TempComp.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
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
