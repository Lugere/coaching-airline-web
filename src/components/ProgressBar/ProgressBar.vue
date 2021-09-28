<template>
    <div id="progress-bar">
        <div class="track">&nbsp;</div>
        <div :style="`width: ${length}%; !important`" class="bar">&nbsp;</div>
        <div :style="`left: ${length}%;`" class="handle">&nbsp;</div>
    </div>
</template>

<script src="./ProgressBar.ts" lang="ts"></script>
<style src="./ProgressBar.scss" lang="scss"></style>
