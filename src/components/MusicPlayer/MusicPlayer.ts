import MainMixin from "@/mixins/MainMixin";
import { Component, Watch } from "vue-property-decorator";
import VolumeControl from "@/components/VolumeControl/VolumeControl.vue";
import store from "@/store";

@Component({
    name: "MusicPlayer",
    components: { VolumeControl },
})
export default class MusicPlayer extends MainMixin {
    public isLoading = false;
    public audioPlayer: HTMLAudioElement;

    public async onPlayClicked(): Promise<void> {
        // start/stop playing when play is pressed
        store.dispatch("toggleIsPlaying", !this.isPlaying);
        // play/pause audio
        if (this.isPlaying) {
            // this.audioPlayer.load();
            await this.audioPlayer.play();
        } else this.audioPlayer.pause();
    }

    public get nowPlayingText(): string {
        if (this.song.artist && this.song.title) return `${this.song.artist} — ${this.song.title}`;
        return "";
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
        this.audioPlayer.muted = this.isMute;
        this.audioPlayer.volume = this.volume / 100;
    }

    beforeMount(): void {
        this.audioPlayer = new Audio("https://stream.coachingairlineradio.de/radio/8000/256kb.mp3");

        store.dispatch("updatePlayingData");
        setInterval(() => {
            if (this.isPlaying) store.dispatch("updatePlayingData");
        }, 1000);

        this.isMuteHandler();

        // Event listener is needed, when the player gets handled from outside
        // e.g. windows audio control
        this.audioPlayer.addEventListener("pause", () => {
            store.dispatch("toggleIsPlaying", false);
        });
        this.audioPlayer.addEventListener("play", () => {
            store.dispatch("toggleIsPlaying", true);
        });
    }
}
