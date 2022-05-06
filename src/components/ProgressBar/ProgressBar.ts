import { Component, Prop } from "vue-property-decorator";
import MainMixin from "@/mixins/MainMixin";

@Component
export default class ProgressBar extends MainMixin {
    // song-bar length
    public length = 0;

    mounted() {
        setInterval(() => {
            if (this.isPlaying) {
                this.length = (100 / this.songLength) * this.songPlayed;
            }
        }, 10);
    }
}
