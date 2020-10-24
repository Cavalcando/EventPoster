import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Moment from 'vue-moment';
import store from './store/store';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Moment);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
