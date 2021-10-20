<template>
    <footer id="Footer">
        <div class="content">
            
            <section class="contact">
                <span class="title">Coaching Airline Radio</span>
                <div class="options">
                    <div class="option address">
                        <span>Andrea Hohmann</span>
                        <span>Musterstraße 12</span>
                        <span>12345 Musterstadt</span>
                    </div>
                    <div class="option">
                        <div class="line">
                            <div class="highlight">E-Mail</div>
                            info@coachingairline.de
                        </div>
                        <div class="line">
                            <div class="highlight">Telefon</div>
                            01234 567 890
                        </div>
                        <div class="line">
                            <div class="highlight">Mobil</div>
                            +49 876 543 210
                        </div>
                    </div>
                </div>
            </section>
            <section class="social-media">
                <div class="title">Social Media</div>
                <div class="links">
                    <div class="link">
                        <a href="https://www.xing.com/profile/Andrea_Hohmann17/" target="_blank">
                            <i class="fab fa-xing" />
                        </a>
                        <md-tooltip md-delay="300">/Andrea_Hohmann17</md-tooltip>
                    </div>
                    <div class="link">
                        <a
                            href="https://www.facebook.com/profile.php?id=100001440305754"
                            target="_blank"
                        >
                            <i class="fab fa-facebook-f" />
                        </a>
                        <md-tooltip md-delay="300">/hohmann.andrea</md-tooltip>
                    </div>
                    <div class="link">
                        <a href="https://twitter.com/CoachingAirline" target="_blank">
                            <i class="fab fa-twitter" />
                        </a>
                        <md-tooltip md-delay="300">@CoachingAirline</md-tooltip>
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
                        <a href="https://t.me/coaching_airline" target="_blank">
                            <i class="fab fa-telegram-plane" />
                        </a>
                        <md-tooltip md-delay="300">
                            t.me/coaching_airline
                        </md-tooltip>
                    </div>
                </div>
            </section>
            <section class="other-info">
                <div class="title">Links</div>
                <div class="imprint info">
                    <router-link to="#">
                        Impressum
                    </router-link>
                    &
                    <router-link to="#">
                        Datenschutz
                    </router-link>
                </div>
                <div class="help info">
                    <router-link to="Kontakt">
                        Hilfe / Kontakt
                    </router-link>
                </div>
                <div class="agb info">
                    <router-link to="Kontakt">
                        AGB
                    </router-link>
                </div>
            </section>
        </div>
    </footer>
</template>

<script lang="ts" src="./Footer.ts">
</script>

<style lang="scss" src="./Footer.scss"></style>
