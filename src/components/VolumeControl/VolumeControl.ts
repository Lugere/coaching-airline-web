import { Component } from "vue-property-decorator";
import GetterMixin from "@/mixins/GetterMixin";
import store from "@/store";

@Component
export default class VolumeControl extends GetterMixin {
    public isMute = false;

    public get volumeIcon() {
        if (this.volume == 0) return "volume_off";
        else if (this.volume <= 10) return "volume_mute";
        else if (this.volume <= 60) return "volune_down";
        else return "volume_up";
    }

    public updateVolume() {
        if (this.volume > 0) this.isMute = false;
        store.dispatch("updateVolume", (document.getElementById("volume-slider-js") as HTMLInputElement).value);
    }
}
