<template>
    <div id="app">
        <transition name="slide-left">
            <router-view />
        </transition>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Main from "./views/Main.vue";
@Component({
    components: {
        Main,
    },
})
export default class App extends Vue {}
</script>

<style src="./App.scss" lang="scss"></style>
