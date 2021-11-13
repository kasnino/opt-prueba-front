import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";



import header from '@/components/Header'
Vue.component("header-app", header);


import login from '@/components/Login'
Vue.component("login-app", login);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
