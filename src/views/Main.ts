import { Component } from "vue-property-decorator";
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

    public toggleDrawer() {
        this.showDrawer = !this.showDrawer;
    }

    public async onPlayClicked() {
        if (this.songLength <= this.songPlayed && !this.isPlaying) {
            await store.dispatch("setSongPlayed", 0);
            await store.dispatch("toggleIsPlaying", true);
        } else {
            this.isLoading = true;
            setTimeout(() => {
                return 0;
            }, 2000);
            await store.dispatch("toggleIsPlaying", !this.isPlaying);
        }
        console.log(this.isPlaying);
    }

    public convertToMinutes(time: number) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        // Time format => ##:## | cut everything else
        return `${minutes}:${seconds < 10 ? "0" : ""}${Math.floor(seconds)}`.replace(
            /[^\d:]/gm,
            "",
        );
    }

    get activeTab() {
        return this.$route.name;
    }

    mounted() {
        setInterval(() => {
            if (this.isPlaying) {
                const length = (100 / this.songLength) * this.songPlayed;
                store.dispatch("setLength", length);
                if (Math.floor(this.songPlayed) >= this.songLength)
                    store.dispatch("toggleIsPlaying", false);
                else store.dispatch("setSongPlayed", this.songPlayed + 0.01);
            }
        }, 10);
    }
}
