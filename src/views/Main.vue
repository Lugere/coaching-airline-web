<template>
    <main id="Main">
        <div class="nav-bar">
            <div class="content">
                <router-link to="Home" class="logo">
                    <img
                        src="@/assets/images/logo-cropped.png"
                        alt="coaching airline logo - papierflieger fliegt um globus"
                    />
                    <div class="title">
                        <div class="highlight">
                            Coaching Airline
                        </div>
                        <div>
                            Radio
                        </div>
                    </div>
                </router-link>
                <section class="player">
                    <div
                        class="play-btn"
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
                    <div class="player-grp">
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
                        href="https://stream.coachingairlineradio.de/public/coachingairlineradio/playlist.pls"
                        download="coachingairlineradio.pls"
                    >
                        <div class="open-player-btn" alt="lokalen player öffnen">
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
        <el-dialog
            :visible="showLogin"
            class="login-dialog"
            id="login"
            @close="handleLoginClose()"
            @open="handleLoginOpen()"
            :modal="true"
        >
            <section class="title" slot="title">
                <img src="@/assets/images/logo-cropped.png" class="logo" alt="" />
                <span>mod-portal</span>
            </section>
            <el-tabs stretch v-model="activeTab">
                <el-tab-pane label="Login" name="login">
                    <section class="sm-button-group">
                        <el-button class="login-google">
                            <div class="inner-content">
                                <i class="fab fa-google" />
                                <span>Mit Google anmelden</span>
                            </div>
                        </el-button>
                        <el-button class="login-facebook">
                            <div class="inner-content">
                                <i class="fab fa-facebook" />
                                <span>Mit Facebook anmelden</span>
                            </div>
                        </el-button>
                    </section>
                    <div class="seperator">
                        <span class="text">
                            oder
                        </span>
                    </div>
                    <el-form class="form" :model="login">
                        <el-form-item label="E-Mail">
                            <el-input v-model="login.email" auto-complete="email" />
                        </el-form-item>
                        <el-form-item label="Password">
                            <el-input v-model="login.password" show-password />
                        </el-form-item>
                        <div class="links">
                            <router-link to="" class="forgot-password"
                                >Password vergessen?</router-link
                            >
                            <router-link to="" class="create-account" @click="activeTab = 'signup'">
                                Noch kein Konto?
                            </router-link>
                        </div>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="Registrieren" name="signup">
                    <!-- <section class="sm-button-group">
                        <el-button class="login-google">
                            <i class="fab fa-google" />
                            <span>Mit Google registrieren</span>
                        </el-button>
                        <el-button class="login-facebook">
                            <i class="fab fa-facebook" />
                            <span>Mit Facebook registrieren</span>
                        </el-button>
                    </section>
                    <div class="seperator">
                        <span class="text">
                            oder
                        </span>
                    </div> -->
                    <el-form class="form" :model="login">
                        <div class="step-one" v-if="activeStep == 1">
                            <el-form-item label="E-Mail">
                                <el-input v-model="login.email" auto-complete="email" />
                            </el-form-item>
                            <el-form-item label="Password">
                                <el-input v-model="login.password" show-password />
                            </el-form-item>
                            <el-form-item label="Password wiederholen">
                                <el-input v-model="login.passwordRepeat" show-password />
                            </el-form-item>
                        </div>
                        <div class="step-two" v-if="activeStep == 2">
                            <el-form-item label="Nutzername">
                                <el-input v-model="login.name" auto-complete="name" />
                            </el-form-item>
                            <label class="el-form-item__label profile-label">Profilbild</label>
                            <div class="upload-profile">
                                <i class="fas fa-user" />
                            </div>
                            <el-button type="primary" class="upload-button"
                                >Bild hochladen</el-button
                            >
                        </div>
                        <div class="links">
                            <router-link to="" class="create-account" @click="activeTab = 'login'">
                                Du hast schon ein Konto?
                            </router-link>
                        </div>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
            <div class="button-group">
                <el-button class="cancel-button" type="info" @click="handleLoginClose()">
                    Abbrechen
                </el-button>
                <el-button
                    type="primary"
                    v-if="activeStep == 2 && activeTab == 'signup'"
                    @click="activeStep = 1"
                >
                    Zurück
                </el-button>
                <el-button
                    v-if="activeTab == 'login'"
                    class="submit-button"
                    type="primary"
                    @click="activeStep = 2"
                    >{{ "Anmelden" }}</el-button
                >
                <el-button v-else class="submit-button" type="primary" @click="activeStep = 2">{{
                    activeStep == 2 ? "Registrieren" : "Weiter"
                }}</el-button>
            </div>
        </el-dialog>
        <router-view />
    </main>
</template>

<script src="./Main.ts" lang="ts"></script>
<style src="./Main.scss" lang="scss"></style>
