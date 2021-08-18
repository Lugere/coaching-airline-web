<template>
    <div id="Main">
        <div class="nav-bar">
            <div class="content">
                <div class="logo">
                    <img src="@/assets/images/logo-cropped.png" alt="coaching airline logo" />
                </div>
                <div class="title">Coaching Airline Radio</div>
                <div class="player">
                    <div
                        class="play-btn"
                        @click="onPlayClicked()"
                        :alt="isPlaying ? 'musik pausieren' : 'musik abspielen'"
                    >
                        <md-icon v-if="!isPlaying" class="">play_circle</md-icon>
                        <md-icon v-else>pause_circle</md-icon>
                        <md-tooltip :md-delay="300">
                            {{ isPlaying ? "Pause" : "Abspielen" }}
                        </md-tooltip>
                    </div>
                    <div class="player-grp">
                        <span class="song-title">{{ songTitle }}</span>
                        <ProgressBar :pb-length="length" />
                        <div class="info">
                            <div class="moderator">Andrea Hohmann moderiert</div>
                            <div class="time">
                                {{
                                    `${convertToMinutes(songPlayed)} | ${convertToMinutes(
                                        songLength,
                                    )}`
                                }}
                            </div>
                        </div>
                    </div>
                    <div class="open-player-btn" alt="lokalen player öffnen">
                        <md-icon class="">radio</md-icon>
                        <md-tooltip :md-delay="300">Öffne lokalen Player</md-tooltip>
                    </div>
                    <VolumeControl />
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
        </div>
        <router-view />
    </div>
</template>

<script src="./Main.ts" lang="ts"></script>
<style src="./Main.scss" lang="scss"></style>
