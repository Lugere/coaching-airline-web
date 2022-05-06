import { Component } from "vue-property-decorator";
import MainMixin from "@/mixins/MainMixin";
import store from "@/store";

@Component
export default class Footer extends MainMixin {
    public openLogin(): void {
        store.dispatch("toggleLogin", true);
    }
}
