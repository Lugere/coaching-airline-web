<template>
    <div id="Main">
        <div class="nav-bar">
            <div class="logo">
                <img src="@/assets/images/logo-cropped.png" alt="coaching airline logo" />
            </div>
            <div class="title">Coaching Airline Radio</div>
            <div class="player">
                <div class="play-btn" @click="isPlaying = !isPlaying">
                    <md-icon v-if="!isPlaying" class="md-size-2x">play_circle</md-icon>
                    <md-icon v-else class="md-size-2x">play_circle</md-icon>
                    <md-tooltip md-direction="bottom">Play</md-tooltip>
                </div>
                <div class="player-grp">
                    <span class="song-title">Peter Maffay - So bist du</span>
                    <div class="progress">
                        <div class="track">&nbsp;</div>
                        <div class="bar">&nbsp;</div>
                    </div>
                    <div class="info">
                        <div class="moderator">Andrea Hohmann moderiert</div>
                        <div class="time">1:33 / 2:50</div>
                    </div>
                </div>
                <div class="open-player-btn">
                    <md-icon class="md-size-2x">radio</md-icon>
                    <md-tooltip>60%</md-tooltip>
                </div>
                <div class="volume-control">
                    <div class="volume-down">
                        <md-icon>volume_down</md-icon>
                    </div>
                    <div class="volume-bar">
                        <div class="track">&nbsp;</div>
                        <div class="bar">&nbsp;</div>
                        <div class="volume-btn">&nbsp;</div>
                    </div>
                    <div class="volume-up">
                        <md-icon>volume_up</md-icon>
                    </div>
                </div>
            </div>
            <div class="links">
                <ul>
                    <li>
                        <router-link to="Schedule">Sendeplan</router-link>
                    </li>
                    <li>
                        <router-link to="Team">Unser Team</router-link>
                    </li>
                    <li>
                        <router-link to="Contact">Kontakt</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view />
    </div>
</template>

<style src="./Main.ts" lang="ts"></style>
<style src="./Main.scss" lang="scss"></style>
