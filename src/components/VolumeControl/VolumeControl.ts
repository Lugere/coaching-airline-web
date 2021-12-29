import { Component } from "vue-property-decorator";
import GetterMixin from "@/mixins/GetterMixin";
import store from "@/store";

@Component
export default class VolumeControl extends GetterMixin {
    public toggleIsMute(): void {
        store.dispatch("toggleIsMute", !this.isMute);
    }

    public updateVolume(): void {
        if (this.volume > 0) store.dispatch("toggleIsMute", false);
        store.dispatch(
            "updateVolume",
            (document.getElementById("volume-slider-js") as HTMLInputElement).value,
        );
    }

    public updateVolumeCookie(): void {
        const volume = store.state.volume;
        localStorage.setItem("volume", `${volume}`);
    }

    public getVolumeCookie(): void {
        const volume = localStorage.getItem("volume");
        store.dispatch("updateVolume", volume ? volume : "50");
    }

    public get volumeIcon(): string {
        if (this.volume == 0) return "volume_off";
        else if (this.volume <= 10) return "volume_mute";
        else if (this.volume <= 60) return "volune_down";
        else return "volume_up";
    }

    mounted(): void {
        this.getVolumeCookie();
    }
}
