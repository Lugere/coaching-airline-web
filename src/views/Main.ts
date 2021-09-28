import { Component } from "vue-property-decorator";
import { mapState } from "vuex";
import GetterMixin from "@/mixins/GetterMixin";
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue";
import VolumeControl from "@/components/VolumeControl/VolumeControl.vue";
import store from "@/store";

@Component({
    computed: {
        ...mapState(["isPlaying", "length", "songTitle", "songLength", "songPlayed", "volume"]),
    },
    components: {
        ProgressBar,
        VolumeControl,
    },
})
export default class Main extends GetterMixin {
    public showDrawer = false;

    public toggleDrawer() {
        this.showDrawer = !this.showDrawer;
    }

    public onPlayClicked() {
        if (this.songLength == this.songPlayed && !this.isPlaying) {
            this.songPlayed = 0;
            store.state.isPlaying = true;
        } else this.isPlaying = !this.isPlaying;
    }

    public convertToMinutes(time: number) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    get activeTab() {
        return this.$route.name;
    }

    mounted() {
        setInterval(() => {
            if (this.isPlaying) {
                const length = (100 / this.songLength) * this.songPlayed;
                console.log(length);
                this.length = length;
                if (this.songPlayed == this.songLength) this.isPlaying = false;
                else this.songPlayed++;
            }
        }, 1000);
    }
}
