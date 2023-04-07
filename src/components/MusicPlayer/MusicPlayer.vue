<template>
    <div class="MusicPlayer">
        <div class="play-button" @click="onPlayClicked()" :alt="isPlaying ? 'musik pausieren' : 'musik abspielen'">
            <md-icon v-if="!isPlaying" class="">play_circle</md-icon>
            <md-icon v-else>pause_circle</md-icon>
            <md-tooltip :md-delay="300">
                {{ isPlaying ? "Pause" : "Abspielen" }}
            </md-tooltip>
        </div>
        <div class="player-group">
            <div class="top-line">
                <span class="song">
                    <v-clamp v-if="!isOnline" autoresize :max-lines="1">
                        Hier Coaching Airline Radio hören
                    </v-clamp>
                    <v-clamp v-else-if="isOnline && nowPlayingText.length > 0" autoresize :max-lines="1">
                        {{ nowPlayingText }}
                    </v-clamp>
                    <span v-else>Songtitel nicht verfügbar</span>
                    <md-tooltip md-delay="300" v-if="nowPlayingText.length > 30">
                        {{ `${song.artist} — ${song.title}` }}
                    </md-tooltip>
                </span>
                <div v-if="isOnline" class="on-air-indicator" :class="onAirStatus">
                    <span v-if="isLive">ON-AIR</span>
                    <span v-else>ONLINE</span>
                </div>
            </div>
            <div class="seperation-bar"></div>
            <div class="info">
                <div class="moderator">
                    <span v-if="isLive">{{ streamerName }} moderiert</span>
                    <span v-else>AUTO-DJ moderiert</span>
                </div>
            </div>
        </div>
        <a
            class="open-player-button"
            href="https://stream.coachingairlineradio.de/public/coachingairlineradio/playlist.pls"
            download="coachingairlineradio.pls"
        >
            <div alt="lokalen player öffnen">
                <md-icon>radio</md-icon>
                <md-tooltip :md-delay="300">Öffne lokalen Player</md-tooltip>
            </div>
        </a>
    </div>
</template>

<script src="./MusicPlayer.ts" lang="ts"></script>
<style src="./MusicPlayer.scss" lang="scss"></style>
