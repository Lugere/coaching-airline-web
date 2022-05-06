<template>
    <main id="Main">
        <nav>
            <div class="content">
                <router-link class="logo" to="Home">
                    <img
                        src="@/assets/images/logo-cropped.png"
                        alt="coaching airline logo - papierflieger fliegt um globus"
                    />
                    <header class="title">
                        <div class="highlight">
                            Coaching Airline
                        </div>
                        <div>
                            Radio
                        </div>
                    </header>
                </router-link>
                <section class="player">
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
                        <ProgressBar />
                        <div class="info">
                            <div class="moderator">
                                <span v-if="isLive">{{ streamerName }} moderiert</span>
                                <span v-else-if="isOnline">AUTO-DJ moderiert</span>
                                <span v-else>-/-</span>
                            </div>
                            <div class="time">
                                {{ `${songPlayedInMinutes} | ${songLengthInMinutes}` }}
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
                                <md-icon>people</md-icon>
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
                <VolumeControl class="volume-control-resp" />
                <section class="burger-menu" @click="toggleDrawer()">
                    <md-icon>menu</md-icon>
                </section>
            </div>
        </nav>
        <el-drawer class="drawer" :visible.sync="showDrawer" direction="rtl">
            <ul class="list">
                <router-link to="Home" class="link">
                    <li
                        class="list-item"
                        :class="activeDrawerLink == 'Home' ? 'active' : null"
                        @click="showDrawer = false"
                    >
                        <md-icon>home</md-icon>
                        <span>Home</span>
                    </li>
                </router-link>
                <router-link to="Sendeplan" class="link">
                    <li
                        class="list-item"
                        :class="activeDrawerLink == 'Sendeplan' ? 'active' : null"
                        @click="showDrawer = false"
                    >
                        <md-icon>event_note</md-icon>
                        <span>Sendeplan</span>
                    </li>
                </router-link>
                <router-link to="Team" class="link">
                    <li
                        class="list-item"
                        :class="activeDrawerLink == 'Team' ? 'active' : null"
                        @click="showDrawer = false"
                    >
                        <md-icon>group</md-icon>
                        <span>Team</span>
                    </li>
                </router-link>
                <router-link to="Kontakt" class="link">
                    <li
                        class="list-item"
                        :class="activeDrawerLink == 'Kontakt' ? 'active' : null"
                        @click="showDrawer = false"
                    >
                        <md-icon>email</md-icon>
                        <span>Kontakt</span>
                    </li>
                </router-link>
            </ul>
        </el-drawer>
        <!-- Mod Portal Login -->
        <el-dialog
            :visible="showLogin"
            class="login-dialog"
            id="login"
            @close="handleLoginClose()"
            @open="handleLoginOpen()"
            :modal="true"
            v-if="false"
        >
            <section class="side-image">
                <img src="@/assets/images/kassetten.jpg" alt="" />
            </section>
            <section class="header" slot="title">
                <!-- <md-icon class="login-icon">face</md-icon> -->
                <div class="title">
                    <span class="bold">
                        <span class="highlight-text">login</span>
                        mod-portal
                    </span>
                    <span class="subtitle">
                        Zugriff nur für Moderatoren!
                    </span>
                </div>
            </section>
            <el-form :hide-required-asterisk="true" class="form" :rules="loginRules" ref="login-form" :model="loginForm">
                <el-form-item label="E-Mail" prop="email">
                    <el-input v-model="loginForm.email" auto-complete="email" />
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="loginForm.password" show-password />
                </el-form-item>
                <div class="links">
                    <router-link to="" class="forgot-password">Password vergessen?</router-link>
                </div>
            </el-form>
            <div slot="footer" class="button-group">
                <el-button class="cancel-button" type="info" @click="handleLoginClose()">
                    Abbrechen
                </el-button>
                <el-button :loading="isLoginLoading" class="submit-button" type="success" @click="loginUser()">
                    {{ isLoginLoading ? "Melde an" : "Anmelden" }}
                </el-button>
            </div>
        </el-dialog>
        <router-view />
        <CookieBanner v-if="!isCookieAgreement" />
    </main>
</template>

<script src="./Main.ts" lang="ts"></script>
<style src="./Main.scss" lang="scss"></style>
