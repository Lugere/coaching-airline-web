<template>
    <div id="MusicPlayer">
        <div
            class="play-button"
            @click="onPlayClicked()"
            :alt="isPlaying ? 'musik pausieren' : 'musik abspielen'"
        >
            <md-icon v-if="!isPlaying" class="">play_circle</md-icon>
            <!-- <md-icon v-else-if="isPlaying && isLoading" class="spinning">play_circle</md-icon> -->
            <md-icon v-else>pause_circle</md-icon>
            <md-tooltip :md-delay="300">
                {{ isPlaying ? "Pause" : "Abspielen" }}
            </md-tooltip>
        </div>
        <div class="player-group">
            <!-- <div class="live-indicator" :class="isLive ? 'live' : 'offline'">
                            <md-tooltip :md-delay="300">
                                {{ `Stream ist ${isLive ? "Live" : "Offline"}` }}</md-tooltip
                            >
                        </div> -->
            <div class="on-air-indicator" :class="onAirStatus">
                <span v-if="isLive">ON-AIR</span>
                <span v-else-if="!isLive && isOnline">ONLINE</span>
                <span v-else>OFFLINE</span>
            </div>
            <span class="song">
                <span v-if="!isOnline">Stream ist offline</span>
                <span v-else-if="isOnline && nowPlayingText.length > 0">
                    {{ nowPlayingText }}
                    <md-tooltip md-delay="300" v-if="nowPlayingText.length > 30">
                        {{ `${song.artist} — ${song.title}` }}
                    </md-tooltip>
                </span>
                <span v-else>&lt;Songtitel nicht verfügbar&gt;</span>
            </span>
            <div class="seperation-bar"></div>
            <div class="info">
                <div class="moderator">
                    <span v-if="isLive">{{ streamerName }} moderiert</span>
                    <span v-else-if="isOnline">AUTO-DJ moderiert</span>
                    <span v-else>&mdash;</span>
                </div>
                <!-- <div class="time">
                    {{ `${songPlayedInMinutes} | ${songLengthInMinutes}` }}
                </div> -->
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
        <VolumeControl />
    </div>
</template>

<script src="./MusicPlayer.ts" lang="ts"></script>
<script src="./MusicPlayer.scss" lang="scss"></script>
