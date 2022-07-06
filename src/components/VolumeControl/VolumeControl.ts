import { Component, Watch } from "vue-property-decorator";
import MainMixin from "@/mixins/MainMixin";
import store from "@/store";

@Component({
    name: "VolumeControl",
})
export default class VolumeControl extends MainMixin {
    public toggleIsMute(): void {
        store.dispatch("toggleIsMute", !this.isMute);
        this.$cookies.set("isMute", this.isMute);
    }

    public updateVolume(event): void {
        if (this.volume > 0) {
            store.dispatch("toggleIsMute", false);
            this.$cookies.set("isMute", "false");
        }
        store.dispatch("updateVolume", event.target.value);
    }

    public updateVolumeCookie(): void {
        const volume = store.state.volume;
        this.$cookies.set("volume", `${volume}`);
    }

    public getVolumeCookie(): void {
        const volume: string = this.$cookies.get("volume");
        const isMute: boolean = this.$cookies.get("isMute") === "true";
        store.dispatch("updateVolume", volume ? volume : "50");
        store.dispatch("toggleIsMute", isMute);
    }

    public getVolumeTooltip(): string {
        if (this.isMute) return "Stumm";
        return `${this.volume}%`;
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
