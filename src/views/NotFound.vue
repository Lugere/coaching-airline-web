<template>
    <div id="not-found">
        <div class="main-container">
            <router-link to="Home" class="logo">
                <img src="@/assets/images/logo.png" />
            </router-link>
            <div class="title">404</div>
            <div class="subtitle">
                    Ups! Da ist was schiefgelaufen!</div>
            <section class="desc">
                <div>
                    Die von Ihnen gesuchte Seite wurde nicht gefunden!
                </div>
            </section>
            <section class="return-home">
                <span>
                    <el-button @click="$router.push('Home')" type="primary">
                        Hier gehts zurück zur Startseite!
                    </el-button>
                </span>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script src="./NotFound.ts" lang="ts"></script>
<style src="./NotFound.scss" lang="scss"></style>
