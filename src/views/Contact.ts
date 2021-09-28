import GetterMixin from "@/mixins/GetterMixin";
import { Component } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";

@Component({
    components: { Footer },
})
export default class Contact extends GetterMixin {
    contact = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };
}
