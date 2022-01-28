<template>
    <div id="Team">
        <div class="main-container">
            <section class="header">
                <span class="title">Unser Team</span>
                <el-button type="primary" class="contact-btn" @click="$router.push('Kontakt')">
                    Bewirb dich jetzt!
                </el-button>
            </section>
            <section class="sub-container">
                <div class="member" v-for="member in team" :key="member.memberId">
                    <section class="profile-pic">
                        <img :src="getImageUrl(member.imageUrl, 'team')" alt="" />
                    </section>
                    <section class="person">
                        <div class="title">
                            <div class="name">
                                <span> {{ member.name }} </span>
                            </div>
                            <div>
                                <span class="role">
                                    {{ member.role }}
                                </span>
                                <span v-if="member.modName">&mdash;</span>
                                <span class="mod-name" v-if="member.modName">
                                    {{ member.modName }}
                                </span>
                            </div>
                            <div class="social-media">
                                <a
                                    :href="icon.link"
                                    :key="icon.name"
                                    class="icon"
                                    target="_blank"
                                    v-for="icon in member.socialMedia"
                                >
                                    <i :class="`fab fa-${getIconFromBrand(icon.brand)}`" />
                                    <md-tooltip md-delay="300">
                                        {{ icon.brand }}
                                    </md-tooltip>
                                </a>
                            </div>
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
