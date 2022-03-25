import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";
import Schedule from "../views/Schedule.vue";
import Legal from "../views/Legal.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "*",
        redirect: "/404",
    },
    {
        path: "/",
        name: "Main",
        redirect: "/Home",
        children: [
            {
                path: "/404",
                name: "NotFound",
                meta: {
                    breadcrumb: "Seite nicht gefunden",
                },
                component: NotFound,
            },
            {
                path: "/Home",
                name: "Home",
                meta: {
                    breadcrumb: "Startseite",
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
            {
                path: "/Legal",
                name: "Legal",
                redirect: "Impressum",
                children: [
                    {
                        path: "/Impressum",
                        name: "Impressum",
                        meta: {
                            breadcrumb: "Impressum",
                        },
                    },
                    {
                        path: "/Datenschutz",
                        name: "Datenschutz",
                        meta: {
                            breadcrumb: "Datenschutz",
                        },
                    },
                    {
                        path: "/AGB",
                        name: "AGB",
                        meta: {
                            breadcrumb: "AGB",
                        },
                    },
                ],
                component: Legal,
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

    if (to.meta) document.title = `${to.meta.breadcrumb} \u2014 Coaching Airline Radio`;
    else document.title = "Coaching Airline Radio";
    next();
});

export default router;
