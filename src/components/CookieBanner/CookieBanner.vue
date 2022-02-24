<template>
    <div id="CookieBanner" ref="cookie-banner">
        <div class="title">
            wir nutzen cookies
        </div>
        <span>
            Unsere Website nutzt ausschließlich technisch notwendige Cookies. Es werden
            keine persönlichen Daten an Drittanbieter weitergegeben!
        </span>
        <div class="action-group">
            <router-link to="Datenschutz">
                Mehr erfahren
            </router-link>
            <el-button @click="setCookieAgreement()" type="primary" class="close-button">
                Verstanden
            </el-button>
        </div>
    </div>
</template>

<script src="./CookieBanner.ts" lang="ts"></script>
<style src="./CookieBanner.scss" lang="scss"></style>
