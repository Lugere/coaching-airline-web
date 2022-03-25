import GetterMixin from "@/mixins/GetterMixin";
import { Component, Watch } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";
import router from "@/router";

@Component({ components: { Footer } })
export default class Legal extends GetterMixin {
    public currentPage = "imprint";

    @Watch("$route", { immediate: true, deep: true })
    routeHandler() {
        const currentRoute = router.currentRoute.fullPath;
        switch (currentRoute) {
            case "/Impressum":
                this.currentPage = "imprint";
                break;
            case "/Datenschutz":
                this.currentPage = "privacy";
                break;
            case "/AGB":
                this.currentPage = "privacy";
                break;
            default:
                this.currentPage = "";
                break;
        }
    }

    @Watch("currentPage", { immediate: true })
    pageHandler() {
        const updateRoute = newRoute => {
            if (newRoute !== router.currentRoute.fullPath) router.push(newRoute);
        }

        switch (this.currentPage) {
            case "imprint":
                updateRoute("/Impressum")
                break;
            case "privacy":
                updateRoute("/Datenschutz")
                break;
            case "agb":
                updateRoute("/AGB")
                break;
        }
    }
}
