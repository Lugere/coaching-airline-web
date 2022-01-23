import GetterMixin from "@/mixins/GetterMixin";
import { Component } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";

@Component({ components: { Footer } })
export default class Contact extends GetterMixin {
    public contact = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    public sendEmail(): void {
        console.log("lol");
    }
}
