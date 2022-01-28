<template>
    <div id="Home">
        <div class="main-container">
            <div class="panel welcome-panel">
                <section class="title">
                    Warum
                    <span class="highlight-text">Coaching Airline Radio</span>
                    hören?
                </section>
                <section class="content">
                    <div class="text">
                        <p>
                            Coaching Airline Radio ist ein nicht kommerzielles Webradio der Marke
                            Coaching Airline.
                        </p>
                        <p>
                            Wir gestalten für Euch ein Programm mit Themen hautnah am „Menschen“ und
                            vermitteln nicht nur Spaß und gute Laune zur Unterhaltung durch unser
                            vielfältiges Musikprogramm, sondern packen auch interessante und
                            Wissenswerte Themeninhalte an.
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
                            Ich freue mich auf eine Nachricht!
                        </p>
                        <div class="signature">
                            <img src="@/assets/images/signature.png" alt="signature" />
                        </div>
                    </div>
                </section>
                <div class="image">
                    <img src="@/assets/images/profile-1.jpg" alt="andrea hohmann profil" />
                </div>
            </div>
            <div class="panel trailer-panel">
                <div class="title">
                    Unser
                    <span class="highlight-text">Trailer</span>
                </div>
                <div class="content">
                    <video width="800" height="500" controls>
                        <source src="@/assets/videos/trailer.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="panel news-panel">
                <section class="title">
                    Aktuelle
                    <span class="highlight-text">News</span>
                </section>
                <section class="content">
                    <el-carousel
                        :autoplay="false"
                        :loop="true"
                        direction="vertical"
                        class="carousel"
                    >
                        <el-carousel-item
                            class="article"
                            v-for="article in news"
                            :key="article.newsId"
                        >
                            <div class="image">
                                <!-- <img :src="getImageUrl(article.imageUrl, '')" /> -->
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
                                <div class="date">{{ convertToDate(article.date) }}</div>
                                <div class="title">{{ article.title }}</div>
                                <div v-html="article.content" />
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </section>
            </div>
        </div>
        <div class="side-container">
            <div class="panel">
                <section class="social-media">
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
                        <a
                            href="https://www.linkedin.com/in/andrea-hohmann-0b558236/"
                            target="_blank"
                        >
                            <i class="fab fa-linkedin" />
                        </a>
                    </div>
                    <div class="sm telegram">
                        <a href="https://t.me/RadioCoachingAirline" target="_blank">
                            <i class="fab fa-telegram-plane" />
                        </a>
                    </div>
                </section>
                <section class="infos">
                    <div class="entry moderator">
                        <div class="title">
                            <md-icon>person</md-icon>
                            <div>
                                Aktueller Moderator
                            </div>
                        </div>
                        <div class="subtitle">
                            <span v-if="isLive">{{ streamerName }}</span>
                            <span v-else-if="isOnline">AUTO-DJ</span>
                            <span v-else>Stream ist Offline</span>
                            <span class="time" v-if="isOnline">18:00 - 20:00 Uhr</span>
                            <span class="time" v-else>-/-</span>
                        </div>
                        <div class="desc">
                            <span class="highlight" v-if="isLive">
                                Alles von Abba bis Zappa
                            </span>
                        </div>
                    </div>
                    <div class="entry">
                        <div class="title">
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
                    </div>
                    <div class="entry wishes">
                        <div class="title">
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
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script src="./Home.ts" lang="ts"></script>
<style src="./Home.scss" lang="scss"></style>
