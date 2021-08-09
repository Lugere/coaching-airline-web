import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";
import Schedule from "../views/Schedule.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "*",
        redirect: "Home",
    },
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/",
        name: "Home",
        meta: {
            breadcrumb: "Home",
        },
        component: Home,
    },
    {
        path: "/Team",
        name: "Team",
        meta: {
            breadcrumb: "Team",
        },
        component: Team,
    },
    {
        path: "/Contact",
        name: "Contact",
        meta: {
            breadcrumb: "Contact",
        },
        component: Contact,
    },
    {
        path: "/Schedule",
        name: "Schedule",
        meta: {
            breadcrumb: "Schedule",
        },
        component: Schedule,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta) document.title = `Coaching Airline Radio | ${to.meta.breadcrumb}`;
});

export default router;
