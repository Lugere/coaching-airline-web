import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Vue Axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// Easier Cookies
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

// Element
import ElementUI from "element-ui";
import "./utilities/theme/index.css";
import locale from "element-ui/lib/locale/lang/de";
Vue.use(ElementUI, { locale });

// Vue Material
import { MdIcon, MdTooltip } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
Vue.use(MdIcon);
Vue.use(MdTooltip);

// import { AUTH } from "./firebase";

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
