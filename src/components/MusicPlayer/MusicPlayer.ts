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

    public get nowPlayingText(): string {
        if (this.song.artist && this.song.title)
            return `${this.song.artist} — ${this.song.title}`;
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
        if (this.isMute) this.audioPlayer.volume = 0;
        else this.audioPlayer.volume = this.volume / 100;
    }

    beforeMount(): void {
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
