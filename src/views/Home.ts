import GetterMixin from "@/mixins/GetterMixin";
import { Component } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";

@Component({
    components: { Footer },
})
export default class Home extends GetterMixin {}
