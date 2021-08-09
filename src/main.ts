import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { MdIcon, MdTooltip } from "vue-material/dist/components";
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(MdIcon);
Vue.use(MdTooltip);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
