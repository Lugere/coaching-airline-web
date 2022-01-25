<template>
    <div id="progress-bar">
        <input
            :value="length"
            class="slider"
            disabled
            id="time"
            max="100"
            min="1"
            name="time"
            step="0.0001"
            type="range"
        />
        <div :style="`width: ${length}%; !important`" class="bar">&nbsp;</div>
    </div>
</template>

<script src="./ProgressBar.ts" lang="ts"></script>
<style src="./ProgressBar.scss" lang="scss"></style>
