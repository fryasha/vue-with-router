import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;


// router.beforeEach((to, from, next) => {
//   store.commit('ROUTE_LEAVE', true);
//   const timeout = store.getters.getLeaveTime[from.path.substr(1)];
//   console.log(`we leaving from ${from.path} with ${timeout} duration`);
//   setTimeout(() => {
//     next();
//   }, timeout || 0);
// });

// router.afterEach((to) => {
//   store.commit('ROUTE_LEAVE', false);
//   console.log(`we entered to ${to.path} route`);
// });


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
