import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Vue Axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// Firebase Auth
import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "coachingairlineradio.de",
    projectId: "coaching-airline-radio",
    storageBucket: "coaching-airline-radio.appspot.com",
    messagingSenderId: "62439671826",
    appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

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

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
