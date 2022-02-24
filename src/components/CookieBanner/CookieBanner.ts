import { Component } from "vue-property-decorator";
import GetterMixin from "@/mixins/GetterMixin";

@Component
export default class CookieBanner extends GetterMixin {
    $refs: any;

    public setCookieAgreement() {
        this.$refs["cookie-banner"].classList.add("hide");

        setTimeout(() => {
            this.$cookies.set("allowCookies", true, "10y");
            this.$refs["cookie-banner"].remove();
        }, 1000);
    }

    public mounted() {
        if (
            (!this.$cookies.isKey("allowCookies") ||
                this.$cookies.get("allowCookies") === "false") &&
            this.$refs["cookie-banner"]
        ) {
            setTimeout(() => {
                this.$refs["cookie-banner"].classList.add("show");
            }, 3000);
        }
    }
}
