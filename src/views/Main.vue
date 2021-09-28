<template>
    <main id="Main">
        <div class="nav-bar">
            <div class="content">
                <router-link to="Home" class="logo">
                    <img
                        src="@/assets/images/logo-cropped.png"
                        alt="coaching airline logo - papierflieger fliegt um globus"
                    />
                    <div class="title">Coaching Airline Radio</div>
                </router-link>
                <section class="player">
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
                </section>
                <section class="links">
                    <ul>
                        <li>
                            <router-link to="Sendeplan" class="link">
                                <md-icon>event_note</md-icon>
                                <span>Sendeplan</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="Team" class="link">
                                <md-icon>group</md-icon>
                                <span>Team</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="Kontakt" class="link">
                                <md-icon>email</md-icon>
                                <span>Kontakt</span>
                            </router-link>
                        </li>
                    </ul>
                </section>
                <section class="drawer-trigger" @click="toggleDrawer()">
                    <md-icon>menu</md-icon>
                </section>
            </div>
        </div>
        <el-drawer
            class="drawer"
            title="Coaching Airline Radio"
            :visible.sync="showDrawer"
            direction="rtl"
        >
            <ul class="list">
                <router-link to="Home" class="link">
                    <li class="list-item" :class="activeTab == 'Home' ? 'active' : null" @click="showDrawer = false">
                        <md-icon>home</md-icon>
                        <span>Home</span>
                    </li>
                </router-link>
                <router-link to="Sendeplan" class="link">
                    <li class="list-item" :class="activeTab == 'Sendeplan' ? 'active' : null" @click="showDrawer = false">
                        <md-icon>event_note</md-icon>
                        <span>Sendeplan</span>
                    </li>
                </router-link>
                <router-link to="Team" class="link">
                    <li class="list-item" :class="activeTab == 'Team' ? 'active' : null" @click="showDrawer = false">
                        <md-icon>group</md-icon>
                        <span>Team</span>
                    </li>
                </router-link>
                <router-link to="Kontakt" class="link">
                    <li class="list-item" :class="activeTab == 'Kontakt' ? 'active' : null" @click="showDrawer = false">
                        <md-icon>email</md-icon>
                        <span>Kontakt</span>
                    </li>
                </router-link>
            </ul>
        </el-drawer>
        <router-view />
    </main>
</template>

<script src="./Main.ts" lang="ts"></script>
<style src="./Main.scss" lang="scss"></style>
