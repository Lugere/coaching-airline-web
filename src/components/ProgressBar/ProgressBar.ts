import { Component, Prop } from "vue-property-decorator";
import GetterMixin from "@/mixins/GetterMixin";

@Component
export default class ProgressBar extends GetterMixin {
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
