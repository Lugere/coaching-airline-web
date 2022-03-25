<template>
    <footer id="Footer">
        <div class="content">
            <section title="Kontaktinformationen" class="contact">
                <span class="title">
                    <span>
                        Coaching Airline® Radio
                    </span>
                    <span class="rights">
                        ©2022 Coaching Airline &mdash; Alle Rechte vorbehalten
                    </span>
                </span>
                <div class="options">
                    <div class="option address">
                        <span>Andrea Hohmann</span>
                        <span>Langasse 63</span>
                        <span>65597 Hünfelden</span>
                        <span>Deutschland</span>
                    </div>
                    <div class="option digital">
                        <div class="line">
                            <div class="highlight">E-Mail</div>
                            <a href="mailto:info@coachingairline.de">
                                info@coachingairline.de
                            </a>
                        </div>
                        <div class="line">
                            <div class="highlight">Telefon</div>
                            <a href="tel:064388349742">
                                06438 / 8349742
                            </a>
                        </div>
                        <div class="line">
                            <div class="highlight">Mobil</div>
                            <a href="tel:+4917630783508">
                                +49 176 / 30783508
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section aria-labelledby="mod-portal-title" class="mod-portal">
                <div id="mod-portal-title" class="title">
                    Mod-Portal
                </div>
                <el-button disabled type="primary" class="el-button--accent" @click="openLogin()">
                    Coming Soon
                </el-button>
            </section>
            <section aria-labelledby="social-media-title" class="social-media">
                <div id="social-media-title" class="title">Social Media</div>
                <div class="links">
                    <div class="link">
                        <a href="https://www.xing.com/profile/Andrea_Hohmann17/cv" target="_blank">
                            <i class="fab fa-xing" />
                        </a>
                        <md-tooltip md-delay="300">/Andrea_Hohmann17</md-tooltip>
                    </div>
                    <div class="link">
                        <a href="https://www.facebook.com/coachingirlineradio/" target="_blank">
                            <i class="fab fa-facebook-f" />
                        </a>
                        <md-tooltip md-delay="300">/coachingirlineradio</md-tooltip>
                    </div>
                    <div class="link">
                        <a href="https://twitter.com/AirlineCoaching" target="_blank">
                            <i class="fab fa-twitter" />
                        </a>
                        <md-tooltip md-delay="300">@AirlineCoaching</md-tooltip>
                    </div>
                    <div class="link">
                        <a
                            href="https://www.linkedin.com/in/andrea-hohmann-0b558236/"
                            target="_blank"
                        >
                            <i class="fab fa-linkedin-in" />
                        </a>
                        <md-tooltip md-delay="300">/in/andrea-hohmann-0b558236/</md-tooltip>
                    </div>
                    <div class="link">
                        <a href="https://t.me/RadioCoachingAirline" target="_blank">
                            <i class="fab fa-telegram-plane" />
                        </a>
                        <md-tooltip md-delay="300">
                            t.me/RadioCoachingAirline
                        </md-tooltip>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/coachingairline/" target="_blank">
                            <i class="fab fa-instagram" />
                        </a>
                        <md-tooltip md-delay="300">
                            @coachingairline
                        </md-tooltip>
                    </div>
                </div>
            </section>
            <section aria-labelledby="links-title" class="other-info">
                <div id="links-title" class="title">Links</div>
                <div class="imprint info">
                    <router-link to="Impressum">
                        Impressum
                    </router-link>
                    &amp;
                    <router-link to="Datenschutz">
                        Datenschutz
                    </router-link>
                </div>
                <div class="help info">
                    <router-link to="Kontakt">
                        Hilfe / Kontakt
                    </router-link>
                </div>
                <!-- <div class="agb info">
                    <router-link to="AGB">
                        AGB
                    </router-link>
                </div> -->
            </section>
        </div>
    </footer>
</template>

<script lang="ts" src="./Footer.ts"></script>

<style lang="scss" src="./Footer.scss"></style>
