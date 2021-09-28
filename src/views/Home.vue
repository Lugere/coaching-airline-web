<template>
    <div id="Home">
        <div class="main-container">
            <div class="panel welcome-panel">
                <section class="title">
                    Willkommen bei
                    <span class="highlight-text">Coaching Airline Radio</span>
                </section>
                <section class="content">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet.
                        <br /><br />
                        Lorem ipsum
                    </p>
                </section>
                <div class="image">
                    <img src="@/assets/images/profile-1.jpg" alt="andrea hohmann profil" />
                </div>
            </div>
            <div class="panel news-panel">
                <section class="title">
                    Aktuelle
                    <span class="highlight-text">News</span>
                </section>
                <section class="content">
                    <el-carousel :interval="5000" class="carousel">
                        <el-carousel-item
                            class="article"
                            v-for="article in news"
                            :key="article.newsId"
                        >
                            <div class="image">
                                <img :src="getImageUrl(article.imageUrl, '')" />
                            </div>
                            <div class="text">
                                <div class="date">{{ convertToDate(article.date) }}</div>
                                <div class="title">{{ article.title }}</div>
                                <p>
                                    {{ article.content }}
                                </p>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </section>
            </div>
            <div class="panel news-panel">
                <section class="title">
                    Aktuelle
                    <span class="highlight-text">News</span>
                </section>
                <section class="content">
                    <el-carousel :interval="5000" class="carousel">
                        <el-carousel-item
                            class="article"
                            v-for="article in news"
                            :key="article.newsId"
                        >
                            <div class="image">
                                <img :src="getImageUrl(article.imageUrl, '')" />
                            </div>
                            <div class="text">
                                <div class="date">{{ convertToDate(article.date) }}</div>
                                <div class="title">{{ article.title }}</div>
                                <p>
                                    {{ article.content }}
                                </p>
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
                        <a href="https://www.xing.com/profile/Andrea_Hohmann17/" target="_blank">
                            <i class="fab fa-xing"></i>
                        </a>
                    </div>
                    <div class="sm facebook">
                        <a
                            href="https://www.facebook.com/profile.php?id=100001440305754"
                            target="_blank"
                        >
                            <i class="fab fa-facebook"></i>
                        </a>
                    </div>
                    <div class="sm twitter">
                        <a href="https://twitter.com/CoachingAirline" target="_blank">
                            <i class="fab fa-twitter"></i>
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
                        <a href="https://t.me/coaching_airline" target="_blank">
                            <i class="fab fa-telegram-plane"></i>
                        </a>
                    </div>
                </section>
                <section class="infos">
                    <div class="entry">
                        <div class="title">Gruß- und Wunschbox</div>
                        <div class="desc">
                            Hier könnt ihr eure Grüße schreiben und Musikwünsche abgeben
                        </div>
                        <div class="subtitle">
                            <el-link :underline="false">
                                Zur Gruß- und Wunschbox
                                <i class="fas fa-long-arrow-alt-right" />
                            </el-link>
                        </div>
                    </div>
                    <div class="entry moderator">
                        <div class="title">Aktueller Moderator</div>
                        <div class="subtitle">
                            <span>Andrea Hohmann</span>
                            <span class="time">18:00 - 20:00 Uhr</span>
                        </div>
                        <div class="desc">
                            Thema:
                            <span class="highlight">
                                Von Abba bis Zappa
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script src="./Home.ts" lang="ts"></script>
<style src="./Home.scss" lang="scss"></style>
