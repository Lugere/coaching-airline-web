import MainMixin from "@/mixins/MainMixin";
import { Component } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";
import emailjs from "emailjs-com";

@Component({ components: { Footer } })
export default class Contact extends MainMixin {
    //     public contact = {
    //         name: "Max Mustermann",
    //         email: "max@mustermann.de",
    //         subject: "Betreffs sind sehr wichtig!",
    //         message: `Hallo Frau Musterfrau,

    // ich hoffe sie sind gesund und munter!

    // Mit freundlichen Grüßen

    // Max Mustermann
    //         `,
    //     };

    public contact = {
        name: "",
        email: "",
        subject: "",
        message: ``,
    };

    public isSendEmailLoading = false;

    public sendEmail(): void {
        this.isSendEmailLoading = true;
        emailjs
            .send("service_dlyfxaz", "contact_form", this.contact)
            .then(result => {
                console.log("Success!", result.text);
                this.isSendEmailLoading = false;
            })
            .catch(error => {
                console.log("Failure!", error.text);
                this.isSendEmailLoading = false;
            });
    }

    mounted() {
        // this.$refs["contact"];
        // emailjs.init("user_HQM5zs9Lg6EbiOlSLYIB1");
    }
}
