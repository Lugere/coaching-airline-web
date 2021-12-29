import { Component } from "vue-property-decorator";
import GetterMixin from "@/mixins/GetterMixin";
import store from "@/store";

@Component
export default class Footer extends GetterMixin {
    public openLogin(): void {
        store.dispatch("toggleLogin", true);
    }
}
