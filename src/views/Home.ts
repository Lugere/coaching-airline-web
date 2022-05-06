import MainMixin from "@/mixins/MainMixin";
import { Component } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";

@Component({ components: { Footer } })
export default class Home extends MainMixin {
    public get plannedTime(): string {
        return "";
    }

    public get newsCarouselDirection(): string {
        if (window.innerWidth < 730) return "vertical";
        return "horizontal";
    }

    public prevSlide(): void {
        this.$refs["news-carousel"].prev();
    }

    public nextSlide(): void {
        this.$refs["news-carousel"].next();
    }
}
