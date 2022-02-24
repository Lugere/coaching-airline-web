import GetterMixin from "@/mixins/GetterMixin";
import { Component } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";
import moment from "moment";
moment.locale("de-de");

@Component({ components: { Footer } })
export default class Schedule extends GetterMixin {
    public noentry = "---";
    public times = [
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
    public days: any = [];
    public dayModifier = 0;

    public currStreamer = {};
    public currEventData: any = [];

    get calendarWeek(): number {
        return moment().weekday(this.dayModifier).week();
    }

    get currYear(): number {
        return moment().weekday(this.dayModifier).year();
    }

    public populateDates(): void {
        this.days = [];
        for (let i = this.dayModifier; i < this.dayModifier + 7; i++) {
            this.days.push({
                date: moment()
                    .weekday(i)
                    .format("DD. MM."),
                weekDay: moment()
                    .weekday(i)
                    .format("dddd"),
            });
        }
    }

    public updateWeek(direction: string) {
        switch (direction) {
            case "decr":
                this.dayModifier -= 7;
                this.populateDates();
                break;
            case "incr":
                this.dayModifier += 7;
                this.populateDates();
                break;
            default:
                this.dayModifier = 0;
                this.populateDates();
        }
    }

    public isStreamerPlanned(day, time): boolean {
        // this method is called everytime a cell is rendered
        let isPlanned = false;
        this.schedule.map((event: any) => {
            if (
                event.time.start == time.start &&
                day.date == moment.unix(event.date).format("DD. MM.")
            ) {
                isPlanned = true;
                this.currStreamer = this.team.find(member => member.id == event.streamerId);
                this.currEventData = event;
            }
        });

        return isPlanned;
    }

    public getTableTime(index: number): string {
        const hoursStart = this.times[index].start.slice(0, 2);
        const hoursEnd = this.times[index].end.slice(0, 2);
        const minutesStart = this.times[index].start.slice(2, 4);
        const minutesEnd = this.times[index].end.slice(2, 4);
        return `${hoursStart}:${minutesStart} - ${hoursEnd}:${minutesEnd} Uhr`;
    }

    public truncateString(str: string): string {
        if (str.length > 100) {
            return str.slice(0, 200) + "...";
        } else return str;
    }

    public beforeMount() {
        this.populateDates();
    }
}
