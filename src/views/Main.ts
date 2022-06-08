import MainMixin from "@/mixins/MainMixin";
import { Component, Vue, Watch } from "vue-property-decorator";
import store from "@/store";
// Components
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue";
import VolumeControl from "@/components/VolumeControl/VolumeControl.vue";
import CookieBanner from "@/components/CookieBanner/CookieBanner.vue";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer.vue";

@Component({
    components: {
        ProgressBar,
        VolumeControl,
        CookieBanner,
        MusicPlayer,
    },
})
export default class Main extends MainMixin {
    public showDrawer = false;
    public isLoading = false;
    public isLoginLoading = false;

    // mod-portal
    public loginForm = {
        email: "",
        password: "",
    };
    public loginRules = {
        email: [
            {
                required: true,
                message: "Bitte E-Mail eingeben!",
                trigger: "blur",
            },
            {
                type: "email",
                message: "Diese E-Mail ist leider ungültig!",
                trigger: "blur",
            },
        ],
        password: [
            {
                required: true,
                message: "Bitte Passwort eingeben!",
                trigger: "blur",
            },
        ],
    };

    public async loginUser(): Promise<void> {
        this.isLoginLoading = true;
        // await this.sleep(1000);
        if (this.isFormValid("login-form")) console.log("login...");
        this.isLoginLoading = false;
    }

    public handleLoginClose(): void {
        store.dispatch("toggleLogin", false);
        this.$refs["login-form"].resetFields();
    }

    public handleLoginOpen(): void {
        this.loginForm.email = "";
        this.loginForm.password = "";
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

    public get isCookieAgreement(): boolean {
        return this.$cookies.get("allowCookies") === "true";
    }

    public get activeDrawerLink(): string | null | undefined {
        return this.$route.name;
    }

    public get songPlayedInMinutes(): string {
        return this.convertToMinutes(this.songPlayed);
    }

    public get songLengthInMinutes(): string {
        return this.convertToMinutes(this.songLength);
    }

    public get nowPlayingText(): string {
        let rawText = "";
        if (this.song.artist && this.song.title)
            rawText = `${this.song.artist} — ${this.song.title}`;
        if (rawText.length >= 30) return `${rawText.slice(0, 30)}...`;
        return rawText;
    }

    public get onAirStatus(): string {
        if (this.isLive) return "live";
        if (!this.isLive && this.isOnline) return "online";
        else return "offline";
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

    beforeMount(): void {
        if (!this.$cookies.get("allowCookies")) this.$cookies.set("allowCookies", false);

        store.dispatch("updatePlayingData");
        setInterval(() => {
            if (this.isPlaying) store.dispatch("updatePlayingData");
        }, 1000);

        // this.audioPlayer = new Audio(require(`@/assets/sounds/${this.song.meta.file}`));
        this.audioPlayer = new Audio("https://stream.coachingairlineradio.de/radio/8000/radio.mp3");
        this.audioPlayer.volume = this.volume / 100;
        this.audioPlayer.addEventListener("pause", () => {
            store.dispatch("toggleIsPlaying", false);
        });
        this.audioPlayer.addEventListener("play", () => {
            store.dispatch("toggleIsPlaying", true);
        });
    }
}
