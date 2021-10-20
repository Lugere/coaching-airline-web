import { Vue, Component } from "vue-property-decorator";
import store from "@/store";
import moment from "moment";
import { mapState, mapGetters } from "vuex";
moment.locale("de");

@Component({
    computed: {
        ...mapState(["team", "isPlaying", "length", "songTitle", "songLength", "songPlayed", "volume", "news"]),
    },
})
export default class GetterMixin extends Vue {
    public isPlaying!: any;
    public length!: any;
    public songTitle!: any;
    public songLength!: any;
    public songPlayed!: any;
    public volume!: any;
    public news!: any;
    public team!: any;

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
        }
    }
}
