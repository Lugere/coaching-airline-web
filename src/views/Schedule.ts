import GetterMixin from "@/mixins/GetterMixin";
import { Component } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";

@Component({
    components: { Footer },
})
export default class Schedule extends GetterMixin {
    noentry = "---";
    times = [
        {
            start: "0800",
            end: "1000",
        },
        {
            start: "1000",
            end: "1200",
        },
        {
            start: "1200",
            end: "1400",
        },
        {
            start: "1400",
            end: "1600",
        },
        {
            start: "1600",
            end: "1800",
        },
        {
            start: "1800",
            end: "2000",
        },
        {
            start: "2200",
            end: "0000",
        },
    ];
    days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

    getTableTime(index) {
        const hoursStart = this.times[index].start.slice(0, 2);
        const hoursEnd = this.times[index].end.slice(0, 2);
        const minutesStart = this.times[index].start.slice(2, 4);
        const minutesEnd = this.times[index].end.slice(2, 4);
        return `${hoursStart}:${minutesStart} - ${hoursEnd}:${minutesEnd} Uhr`;
    }

    public truncateString(str) {
        if (str.length > 100) {
            return str.slice(0, 74) + "...";
        }
    }
}
