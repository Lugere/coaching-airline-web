import { Vue, Component } from "vue-property-decorator";
import store from "@/store";
import moment from "moment";
import { mapState } from "vuex";
moment.locale("de");

@Component({
    computed: {
        ...mapState(["isPlaying", "team"]),
        // isPlaying: {
        //     get() {
        //         return store.state.isPlaying;
        //     },
        //     set(val) {
        //         store.commit("setIsPlaying", val);
        //     },
        // },
        length: {
            get() {
                return store.state.length;
            },
            set(val) {
                store.commit("setLength", val);
            },
        },
        songTitle: {
            get() {
                return store.state.songTitle;
            },
            set(val) {
                store.commit("setSongTitle", val);
            },
        },
        songLength: {
            get() {
                return store.state.songLength;
            },
            set(val) {
                store.commit("setSongLength", val);
            },
        },
        songPlayed: {
            get() {
                return store.state.songPlayed;
            },
            set(val) {
                store.commit("setSongPlayed", val);
            },
        },
        volume: {
            get() {
                return store.state.volume;
            },
            set(val) {
                store.commit("setVolume", val);
            },
        },
        news: {
            get() {
                return store.state.news;
            },
            set(val) {
                store.commit("setNews", val);
            },
        },
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
