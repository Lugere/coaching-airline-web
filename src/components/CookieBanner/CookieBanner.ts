import { Component } from "vue-property-decorator";
import MainMixin from "@/mixins/MainMixin";

@Component
export default class CookieBanner extends MainMixin {
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
