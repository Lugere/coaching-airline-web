import MainMixin from "@/mixins/MainMixin";
import { Component } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";

@Component({ components: { Footer } })
export default class NotFound extends MainMixin {}
