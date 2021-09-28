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
        redirect: "Home",
        children: [
            {
                path: "/Home",
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
                path: "/Kontakt",
                name: "Kontakt",
                meta: {
                    breadcrumb: "Kontakt",
                },
                component: Contact,
            },
            {
                path: "/Sendeplan",
                name: "Sendeplan",
                meta: {
                    breadcrumb: "Sendeplan",
                },
                component: Schedule,
            },
        ],
        component: Main,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta) document.title = `Coaching Airline Radio | ${to.meta.breadcrumb}`;
    else document.title = "Coaching Airline Radio";
    next();
});

export default router;
