import { Component } from "vue-property-decorator";
import GetterMixin from "@/mixins/GetterMixin";

@Component
export default class VolumeControl extends GetterMixin {
    public setVolume() {
        const volumeBtnElement = document.getElementById("js-volume-btn");
        const volumeBarElement = document.getElementById("js-volume-bar");
        volumeBtnElement!.style.left = this.volume;
        volumeBarElement!.style.width = this.volume;
    }

    public get volumeIcon() {
        if (this.volume == 0) return "volume_off";
        else if (this.volume <= 10) return "volume_mute";
        else if (this.volume <= 60) return "volune_down";
        else return "volume_up";
    }

    mounted() {
        this.setVolume();
    }
}
