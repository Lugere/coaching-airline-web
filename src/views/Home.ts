import GetterMixin from "@/mixins/GetterMixin";
import { Component } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";

@Component({ components: { Footer } })
export default class Home extends GetterMixin {
    public get plannedTime(): string {
        


        return "";
    }

    public get newsCarouselDirection(): string {
        if (window.innerWidth < 730) return "vertical";
        return "horizontal";
    }

    $refs;

    public prevSlide(): void {
        this.$refs["news-carousel"].prev();
    }

    public nextSlide(): void {
        this.$refs["news-carousel"].next();
    }
    
}
