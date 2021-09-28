<template>
    <div id="Team">
        <div class="main-container">
            <section class="header">
                <span class="title">Unser Team</span>
                <el-button type="primary" class="contact-btn" @click="$router.push('Kontakt')">
                    Bewirb dich hier
                </el-button>
            </section>
            <section class="sub-container">
                <div class="member" v-for="member in team" :key="member.memberId">
                    <section class="profile-pic">
                        <img :src="getImageUrl(member.imageUrl, 'team')" alt="" />
                    </section>
                    <section class="person">
                        <div class="title">
                            <div class="name">{{ member.name }}</div>
                            <div class="social-media">
                                <div
                                    class="icon"
                                    v-for="icon in member.socialMedia"
                                    :key="icon.name"
                                >
                                    <i :class="`fab fa-${getIconFromBrand(icon.brand)}`" />
                                    <md-tooltip md-delay="300">
                                        {{ icon.brand }}
                                    </md-tooltip>
                                </div>
                            </div>
                        </div>
                        <div class="role">
                            {{ member.role }}
                        </div>
                        <div class="desc">
                            {{ member.desc }}
                        </div>
                    </section>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script src="./Team.ts" lang="ts"></script>
<style src="./Team.scss" lang="scss"></style>
