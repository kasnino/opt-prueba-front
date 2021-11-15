import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";


import header from "@/components/Header";
Vue.component("header-app", header);

import login from "@/components/Login";
Vue.component("login-app", login);

import search from "@/components/Search";
Vue.component("search-app", search);

import registro from "@/components/RegistroAlerta";
Vue.component("registro-app", registro);


import listaEnvios from "@/components/ListEnvios";
Vue.component("lista-envios", listaEnvios);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
