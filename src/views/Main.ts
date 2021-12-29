import { Component, Watch } from "vue-property-decorator";
import GetterMixin from "@/mixins/GetterMixin";
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue";
import VolumeControl from "@/components/VolumeControl/VolumeControl.vue";
import store from "@/store";

@Component({
    components: {
        ProgressBar,
        VolumeControl,
    },
})
export default class Main extends GetterMixin {
    public showDrawer = false;
    public isLoading = false;

    // mod-portal
    public login = {
        email: "",
        password: "",
        passwordRepeat: "",
        name: "",
    };
    public activeTab = "login";
    public activeStep = 1;
    // public showLogin = false;

    public handleLoginClose(): void {
        store.dispatch("toggleLogin", false);
    }

    public handleLoginOpen(): void {
        this.login.email = "";
        this.login.password = "";
    }

    // audio-player
    public audioPlayer;
    public soundSrc;
    public onPlayClicked(): void {
        if (this.songLength <= this.songPlayed && !this.isPlaying) {
            // set player to 0 and start playing when song has ended and play is pressed
            store.dispatch("setSongPlayed", 0);
            store.dispatch("toggleIsPlaying", true);
        } else {
            // start/stop playing when play is pressed
            this.isLoading = true;
            setTimeout(() => {
                return 0;
            }, 2000);
            store.dispatch("toggleIsPlaying", !this.isPlaying);
        }
        // play/pause audio
        if (this.isPlaying) this.audioPlayer.play();
        else this.audioPlayer.pause();
    }

    public toggleDrawer(): void {
        this.showDrawer = !this.showDrawer;
    }

    public convertToMinutes(time: number): string {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        // Time format => ##:## | cut everything else
        return `${minutes}:${seconds < 10 ? "0" : ""}${Math.floor(seconds)}`.replace(
            /[^\d:]/gm,
            "",
        );
    }

    // getters

    get activeDrawerLink(): string | null | undefined {
        return this.$route.name;
    }

    @Watch("volume")
    volumeHandler(): void {
        this.audioPlayer.volume = this.volume / 100;
    }

    @Watch("isMute")
    isMuteHandler(): void {
        if (this.isMute) this.audioPlayer.volume = 0;
        else this.audioPlayer.volume = this.volume / 100;
    }

    mounted(): void {
        setInterval(() => {
            if (this.isPlaying) {
                const length = (100 / this.songLength) * this.songPlayed;
                store.dispatch("setLength", length);
                if (Math.floor(this.songPlayed) >= this.songLength)
                    store.dispatch("toggleIsPlaying", false);
                else store.dispatch("setSongPlayed", this.songPlayed + 0.01);
            }
        }, 10);

        // this.audioPlayer = new Audio(require(`@/assets/sounds/${this.song.meta.file}`));
        this.audioPlayer = new Audio("http://5.9.153.212:8000/stream.ogg");
        this.audioPlayer.volume = this.volume / 100;
        this.audioPlayer.addEventListener("pause", () => {
            store.dispatch("toggleIsPlaying", false);
        });
        this.audioPlayer.addEventListener("play", () => {
            store.dispatch("toggleIsPlaying", true);
        });
    }
}
