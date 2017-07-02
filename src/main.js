import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import App from './App.vue';
import auth from './data/auth.js';

// --- auth store ---
export const eventBus = new Vue();
eventBus.$on('updateUser', (user) => {
  auth.setUser(user)
});
// --- end auth store ---


// --- router ---
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  linkExactActiveClass: 'exact-route-match',
  scrollBehavior(to,from,savedPosition){
    return to.hash ? { selector: to.hash } : savedPosition ? savedPosition : { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if(to.matched.filter(t=>t.meta.isAuthRequired).length > 0){
    console.log('route::auth_required');
    return auth.getUser().email ? next() : next('/login');
  }
  if(to.matched.filter(t=>t.meta.isAnonymousRequired).length > 0){
    console.log('route::must_be_logged_out');
    var user = auth.getUser();
    return user.email ? next('/user/' + user._id) : next();
  }
  next();
});
// --- end router ---

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
