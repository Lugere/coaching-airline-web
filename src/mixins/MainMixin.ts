import { Vue, Component } from "vue-property-decorator";
import moment from "moment";
import { mapState } from "vuex";
// import * as firebase from "firebase/app";
moment.locale("de");
import VClamp from "vue-clamp";

@Component({
    components: {
        VClamp
    },
    computed: {
        ...mapState([
            "isLive",
            "isMute",
            "isOnline",
            "isPlaying",
            "news",
            "schedule",
            "recurringSchedule",
            "showLogin",
            "song",
            "songLength",
            "songPlayed",
            "songTitle",
            "streamerName",
            "team",
            "volume",
        ]),
    },
})
export default class MainMixin extends Vue {
    $refs;

    public isLive!: any;
    public isMute!: any;
    public isOnline!: any;
    public isPlaying!: any;
    public news!: any;
    public schedule!: any;
    public recurringSchedule!: any;
    public song!: any;
    public songLength!: any;
    public songPlayed!: any;
    public songTitle!: any;
    public streamerName!: any;
    public team!: any;
    public volume!: any;

    public audioPlayer = new Audio("https://stream.coachingairlineradio.de/radio/8000/radio.mp3");

    public sleep(ms: number) {
        return new Promise(r => setTimeout(r, ms));
    }

    public isFormValid(form): boolean {
        let isValid = false;
        this.$refs[form].validate((valid: boolean) => {
            isValid = valid;
            if (!valid) return false;
        });
        return isValid;
    }

    public convertToDate(timestamp: number): string {
        const DATE = new Date(timestamp * 1000);
        return moment(DATE).format("dddd, D. MMMM YYYY, HH:mm [Uhr]");
    }

    public getImageUrl(imageName: string, additionalPath: string) {
        let images = require.context(`../assets/images`, false, /\.jpg$/);
        if (additionalPath == "team") {
            images = require.context(`../assets/images/team`, false, /\.jpg$/);
        }
        return images("./" + imageName);
    }

    public getIconFromBrand(brand: string) {
        switch (brand.toLowerCase()) {
            case "facebook":
                return "facebook-f";
            case "twitter":
                return "twitter";
            case "telegram":
                return "telegram-plane";
            case "xing":
                return "xing";
            case "linkedin":
                return "linkedin-in";
            case "instagram":
                return "instagram";
            default:
                return "";
        }
    }
}
