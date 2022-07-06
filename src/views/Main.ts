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

        this.audioPlayer.volume = this.volume / 100;
        this.audioPlayer.addEventListener("pause", () => {
            store.dispatch("toggleIsPlaying", false);
        });
        this.audioPlayer.addEventListener("play", () => {
            store.dispatch("toggleIsPlaying", true);
        });
    }
}
