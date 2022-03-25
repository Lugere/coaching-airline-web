<template>
    <div id="Home">
        <main>
            <section id="welcome" class="panel welcome-panel">
                <div class="title">
                    Warum
                    <span class="highlight-text">Coaching Airline Radio</span>
                    hören?
                </div>
                <div class="content">
                    <div class="text">
                        <p>
                            Coaching Airline Radio ist ein nicht kommerzielles Webradio der Marke
                            <a target="_blank" href="https://www.coachingairline.de">
                                Coaching Airline®
                            </a>
                            .
                        </p>
                        <p>
                            Wir gestalten für Euch ein Programm mit Themen hautnah am „Menschen“ und
                            vermitteln nicht nur Spaß und gute Laune zur Unterhaltung durch unser
                            vielfältiges Musikprogramm, sondern packen auch interessante und
                            wissenswerte Themeninhalte an.
                        </p>
                        <p>
                            Livetalks, Interviews mit Künstlern und authentische Geschichten die
                            ihresgleichen suchen.
                        </p>
                        <p>
                            Jeder der etwas zu erzählen hat und es in die Welt hinaustragen will,
                            ist bei Coaching Airline Radio herzlich willkommen.
                        </p>
                        <p>
                            Einfach Kontakt aufnehmen, sein Anliegen schildern über unser
                            <router-link to="Kontakt">
                                Kontaktformular!
                            </router-link>
                        </p>
                        <p>
                            Wir freuen uns auf eine Nachricht!
                        </p>
                        <div class="signature">
                            <img src="@/assets/images/signature.png" alt="signature" />
                        </div>
                    </div>
                </div>
                <div class="image">
                    <img src="@/assets/images/profile-1.jpg" alt="andrea hohmann profil" />
                </div>
            </section>
            <section id="podcast" class="panel podcast-panel">
                <div class="title">
                    <span> Radio </span>
                    <span class="highlight-text"> podcast </span>
                </div>
                <div class="content">
                    <div class="image">
                        <img src="@/assets/images/radiopodcast.jpg" alt="">
                    </div>
                </div>
            </section>
            <section id="trailer" class="panel trailer-panel">
                <div class="title">
                    Unsere
                    <span class="highlight-text">Crew</span>
                    vorgestellt
                </div>
                <div class="content">
                    <video controls>
                        <source src="@/assets/videos/crew.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <section id="news" class="panel news-panel">
                <section class="title">
                    Aktuelle
                    <span class="highlight-text">News</span>
                </section>
                <section class="content">
                    <el-button @click="prevSlide()" class="carousel-trigger left">
                        <md-icon>arrow_back</md-icon>
                    </el-button>
                    <el-carousel
                        :autoplay="false"
                        arrow="never"
                        indicator-position="none"
                        class="carousel"
                        ref="news-carousel"
                        :direction="newsCarouselDirection"
                        trigger="click"
                    >
                        <el-carousel-item
                            class="article"
                            v-for="article in news"
                            :key="article.newsId"
                        >
                            <div class="image">
                                <el-image :src="getImageUrl(article.imageUrl, '')" fit="cover">
                                    <div slot="placeholder" class="placeholder">
                                        <div>
                                            <span> Bild wird geladen </span>
                                            <span class="dot">...</span>
                                        </div>
                                    </div>
                                </el-image>
                            </div>
                            <div class="text">
                                <time :datetime="convertToDate(article.date)" class="date">
                                    {{ convertToDate(article.date) }}
                                </time>
                                <div class="title">{{ article.title }}</div>
                                <div v-html="article.content" />
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                    <el-button @click="nextSlide()" class="carousel-trigger right">
                        <md-icon>arrow_forward</md-icon>
                    </el-button>
                </section>
            </section>
        </main>
        <aside>
            <section title="Social Media Links" class="social-media">
                <div class="sm xing">
                    <a href="https://www.xing.com/profile/Andrea_Hohmann17/cv" target="_blank">
                        <i class="fab fa-xing" />
                    </a>
                </div>
                <div class="sm facebook">
                    <a href="https://www.facebook.com/coachingirlineradio/" target="_blank">
                        <i class="fab fa-facebook" />
                    </a>
                </div>
                <div class="sm twitter">
                    <a href="https://twitter.com/AirlineCoaching" target="_blank">
                        <i class="fab fa-twitter" />
                    </a>
                </div>
                <div class="sm linkedin">
                    <a href="https://www.linkedin.com/in/andrea-hohmann-0b558236/" target="_blank">
                        <i class="fab fa-linkedin" />
                    </a>
                </div>
                <div class="sm telegram">
                    <a href="https://t.me/RadioCoachingAirline" target="_blank">
                        <i class="fab fa-telegram-plane" />
                    </a>
                </div>
                <div class="sm instagram">
                    <a href="https://www.instagram.com/coachingairline/" target="_blank">
                        <i class="fab fa-instagram" />
                    </a>
                </div>
            </section>
            <section title="Zusätzliche Informationen" class="infos">
                <section aria-labelledby="moderator-title" class="entry moderator">
                    <div id="moderator-title" class="title">
                        <md-icon>person</md-icon>
                        <div>
                            Aktueller Moderator
                        </div>
                    </div>
                    <div class="subtitle">
                        <span v-if="isLive">{{ streamerName }}</span>
                        <span v-else-if="isOnline">AUTO-DJ</span>
                        <span v-else>Stream ist Offline</span>
                        <span class="time" v-if="isOnline">
                            {{ plannedTime }}
                        </span>
                        <span class="time" v-else>-/-</span>
                    </div>
                    <div class="desc">
                        <span class="highlight" v-if="isLive">
                            Alles von Abba bis Zappa
                        </span>
                    </div>
                </section>
                <section aria-labelledby="guestbook-title" class="entry guestbook">
                    <div id="guestbook-title" class="title">
                        <md-icon>menu_book</md-icon>
                        <div>
                            Gästebuch
                        </div>
                    </div>
                    <div class="desc">
                        Hier könnt ihr eure Grüße schreiben
                    </div>
                    <el-button type="primary" disabled>
                        Cooming Soon
                    </el-button>
                </section>
                <section aria-labelledby="wishes-title" class="entry wishes">
                    <div id="wishes-title" class="title">
                        <md-icon>auto_awesome</md-icon>
                        <div>
                            Wunschbox
                        </div>
                    </div>
                    <div class="desc">
                        Du willst etwas bestimmtes hören? Dann kannst du dir hier was wünschen!
                    </div>
                    <el-button type="primary" disabled>
                        Cooming Soon
                    </el-button>
                </section>
            </section>
        </aside>
        <Footer />
    </div>
</template>

<script src="./Home.ts" lang="ts"></script>
<style src="./Home.scss" lang="scss"></style>
