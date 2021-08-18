<template>
    <div id="volume-control">
        <div class="volume-down">
            <md-icon v-if="volume == 0">volume_off</md-icon>
            <md-icon v-else-if="volume <= 10">volume_mute</md-icon>
            <md-icon v-else-if="volume <= 60">volume_down</md-icon>
            <md-icon v-else>volume_up</md-icon>
        </div>
        <div class="volume-bar">
            <div class="track">&nbsp;</div>
            <div class="bar">&nbsp;</div>
            <div class="volume-btn">
                &nbsp;
                <md-tooltip>{{ `${volume}%` }}</md-tooltip>
            </div>
        </div>
    </div>
</template>

<script src="./VolumeControl.ts" lang="ts"></script>
<style src="./VolumeControl.scss" lang="scss"></style>