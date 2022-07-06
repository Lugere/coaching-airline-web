import MainMixin from "@/mixins/MainMixin";
import { Component, Watch } from "vue-property-decorator";
import Footer from "@/components/Footer/Footer.vue";
import moment from "moment";
moment.locale("de-de");

@Component({ components: { Footer } })
export default class Schedule extends MainMixin {
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
            start: "2000",
            end: "2200",
        },
        {
            start: "2200",
            end: "0000",
        },
    ];
    public days: any = [];

    public selectedDate: number;
    public selectedWeek = new Date();

    public currStreamer = {};
    public currEventData: any = [];

    public currWeek: number;
    public currYear: number;

    public populateDates(): void {
        this.currWeek = moment(this.selectedDate).week();
        this.currYear = moment(this.selectedDate).year();

        this.days = [];
        for (let i = 0; i < 7; i++) {
            this.days.push({
                date: moment(this.selectedDate)
                    .weekday(i)
                    .format("DD. MM. YYYY"),
                weekDay: moment(this.selectedDate)
                    .weekday(i)
                    .format("dddd"),
            });
        }
    }

    public async onWeekPicked() {
        this.isTableLoading = true;
        this.selectedDate = moment(this.selectedWeek).valueOf();
        this.populateDates();
        this.isTableLoading = false;
    }

    public isTableLoading = false;

    public async updateWeek(direction: string) {
        this.isTableLoading = true;
        switch (direction) {
            case "decr":
                this.selectedDate = moment(this.selectedDate)
                    .subtract(7, "days")
                    .valueOf();
                this.populateDates();
                break;
            case "incr":
                this.selectedDate = moment(this.selectedDate)
                    .add(7, "days")
                    .valueOf();
                this.populateDates();
                break;
            default:
                this.selectedDate = moment().valueOf();
                this.populateDates();
        }
        this.selectedWeek = moment(this.selectedDate).toDate();
        this.isTableLoading = false;
    }

    public isCellToday(date: string): boolean {
        console.log(date);
        return date == moment().format("DD. MM. yyyy");
    }

    public isNow(time) {
        const { end, start } = time;
        console.log(moment().format("HHmm"));
        return (end >= moment().format("HHmm") && start <= moment().format("HHmm"));
    }

    public isStreamerPlanned(day, time): boolean {
        // this method is called everytime a cell is rendered
        let isPlanned = false;
        this.recurringSchedule.map(event => {
            if (
                moment(day, "DD. MM. yyyy").weekday() == event.day &&
                moment(day, "DD. MM. yyyy").valueOf() >=
                    moment(event.firstDate, "DD. MM. yyyy").valueOf() &&
                moment(day, "DD. MM. yyyy").valueOf() <=
                    moment(event.lastDate, "DD. MM. yyyy").valueOf() &&
                time.start == event.time.start
            )
                isPlanned = true;
        });
        this.schedule.map(event => {
            if (day == event.date && time.start == event.time.start) isPlanned = true;
        });

        return isPlanned;
    }

    public getCurrStreamer(day, time): any {
        let currStreamer;
        this.schedule.map(event => {
            if (day == event.date && time.start == event.time.start)
                currStreamer = this.team.find(member => member.id == event.streamerId);
        });
        this.recurringSchedule.map(event => {
            if (
                moment(day, "DD. MM. yyyy").weekday() == event.day &&
                moment(day, "DD. MM. yyyy").valueOf() >=
                    moment(event.firstDate, "DD. MM. yyyy").valueOf() &&
                moment(day, "DD. MM. yyyy").valueOf() <=
                    moment(event.lastDate, "DD. MM. yyyy").valueOf() &&
                time.start == event.time.start
            )
                currStreamer = this.team.find(member => member.id == event.streamerId);
        });

        return currStreamer;
    }

    public animateTable(): void {
        return;
    }

    public getCurrEventData(day, time) {
        let currEventData;
        this.schedule.map(event => {
            if (day == event.date && time.start == event.time.start) currEventData = event;
        });
        this.recurringSchedule.map(event => {
            if (
                moment(day, "DD. MM. yyyy").weekday() == event.day &&
                moment(day, "DD. MM. yyyy").valueOf() >=
                    moment(event.firstDate, "DD. MM. yyyy").valueOf() &&
                moment(day, "DD. MM. yyyy").valueOf() <=
                    moment(event.lastDate, "DD. MM. yyyy").valueOf() &&
                time.start == event.time.start
            )
                currEventData = event;
        });

        return currEventData;
    }

    public getTableTime(index: number): string {
        const hoursStart = this.times[index].start.slice(0, 2);
        const hoursEnd = this.times[index].end.slice(0, 2);
        const minutesStart = this.times[index].start.slice(2, 4);
        const minutesEnd = this.times[index].end.slice(2, 4);
        return `${hoursStart}:${minutesStart} - ${hoursEnd}:${minutesEnd} Uhr`;
    }

    public getStreamerTime(time: { start: string; end: string }): string {
        const hoursStart = time.start.slice(0, 2);
        const hoursEnd = time.end.slice(0, 2);
        const minutesStart = time.start.slice(2, 4);
        const minutesEnd = time.end.slice(2, 4);
        return `${hoursStart}:${minutesStart} - ${hoursEnd}:${minutesEnd} Uhr`;
    }

    public truncateString(str: string): string {
        if (str.length > 100) {
            return str.slice(0, 200) + "...";
        } else return str;
    }

    public beforeMount() {
        this.selectedDate = moment().valueOf();
        this.populateDates();
    }

    @Watch("selectedDate", { immediate: true })
    public selectedDateHandler() {
        this.populateDates();
    }
}
