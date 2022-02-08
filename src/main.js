import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import PicoUI from "../packages";
Vue.use(PicoUI);

import '@picocss/pico/css/pico.min.css';

new Vue({
  render: (h) => h(App),
}).$mount("#app");
