import GetterMixin from "@/mixins/GetterMixin";
import { Component } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";
import emailjs from "emailjs-com";

@Component({ components: { Footer } })
export default class Contact extends GetterMixin {
    public contact = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    public sendEmail(): void {
        // const emailjsTemplate = process.env.EMAILJS_CARC_TEMPLATE_ID;
        // const emailjsUserId = process.env.EMAILJS_USER_ID;

        // emailjs
        //     .sendForm("gmail", emailjsTemplate, this.$refs["contact"], emailjsUserId)
        //     .then(result => {
        //         console.log("Email sent!", result.text);
        //     })
        //     .catch(error => {
        //         console.error("Email failed!", error.text);
        //     });
    }

    mounted() {
        this.$refs["contact"];
    }
}
