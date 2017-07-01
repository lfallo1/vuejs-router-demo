import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js';
import App from './App.vue'

export const eventBus = new Vue();

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routes,
  linkExactActiveClass: 'exact-route-match'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
