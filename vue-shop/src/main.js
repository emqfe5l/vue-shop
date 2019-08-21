import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Vue.component('cart', require('./components/cart.vue'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');