import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueHighlightJS from 'vue-highlightjs'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueHighlightJS);

new Vue({
  render: h => h(App),
}).$mount('#app');
