import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:1234',
}));

new Vue({
  render: h => h(App),
}).$mount('#app');
