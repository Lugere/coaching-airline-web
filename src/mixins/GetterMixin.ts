import store from "@/store";
import { Vue, Component } from "vue-property-decorator";

@Component({
    computed: {
        isPlaying: {
            get() {
                return store.state.isPlaying;
            },
            set(val) {
                store.commit("setIsPlaying", val);
            },
        },
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
    },
})
export default class GetterMixin extends Vue {
    public isPlaying!: any;
    public length!: any;
    public songTitle!: any;
    public songLength!: any;
    public songPlayed!: any;
    public volume!: any;
}
