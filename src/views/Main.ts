import { Vue, Component } from "vue-property-decorator";
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue";

@Component({
    components: {
        ProgressBar,
    },
})
export default class Main extends Vue {
    public isPlaying = false;
    public length = 0;
    public songTitle = "Peter Maffay - So bist du";
    public songLength = 175;
    public songPlayed = 0;

    public onPlayClicked() {
        this.isPlaying = !this.isPlaying;
    }

    public convertToMinutes(time: number) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    mounted() {
        setInterval(() => {
            if (this.isPlaying) {
                const length = Math.floor((100 / this.songLength) * this.songPlayed);
                this.length = length;
                if (this.songPlayed == this.songLength) this.songPlayed = 0;
                else this.songPlayed++;
            }
        }, 1000);
    }
}
