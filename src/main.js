import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/global.css";
import dayjs from "dayjs";
import store from "@/store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;


const relativeTime = require('dayjs/plugin/relativeTime')
require('dayjs/locale/ru')
dayjs.extend(relativeTime)
dayjs.locale('ru')
Vue.prototype.$dayjs = dayjs;

const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  icon: true,
};

Vue.use(Toast, options);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
