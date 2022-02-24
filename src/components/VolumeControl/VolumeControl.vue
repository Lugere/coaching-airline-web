<template>
    <div id="volume-control">
        <div class="volume-icon" @click="toggleIsMute()">
            <md-icon v-if="isMute">volume_off</md-icon>
            <md-icon v-else-if="volume <= 10">volume_mute</md-icon>
            <md-icon v-else-if="volume <= 60">volume_down</md-icon>
            <md-icon v-else>volume_up</md-icon>
            <md-tooltip :md-delay="300">{{ isMute ? "Stummschaltung aufheben" : "Stummschalten" }}</md-tooltip>
        </div>
        <div class="volume-bar">
            <input
                type="range"
                name="volume-slider"
                :value="isMute ? 0 : volume"
                id="volume-slider-js"
                class="volume-slider"
                @input="updateVolume()"
                @change="updateVolumeCookie()"
            />
            <div :style="`width: ${isMute ? 0 : volume}%; !important`" class="bar">&nbsp;</div>
            <md-tooltip>{{ `${volume}%` }}</md-tooltip>
        </div>
    </div>
</template>

<script src="./VolumeControl.ts" lang="ts"></script>
<style src="./VolumeControl.scss" lang="scss"></style>
