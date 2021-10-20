<template>
    <div id="progress-bar">
        <input class="slider" type="range" name="time" id="time" disabled min="1" step="0.0001" max="100" :value="length">
        <div :style="`width: ${length}%; !important`" class="bar">&nbsp;</div>
    </div>
</template>

<script src="./ProgressBar.ts" lang="ts"></script>
<style src="./ProgressBar.scss" lang="scss"></style>
