<template>
    <div id="not-found">
        <main>
            <router-link to="Home" class="logo">
                <img src="@/assets/images/logo.png" />
            </router-link>
            <section class="split-section">
                <div class="title">404</div>
                <div class="right-side">
                    <div class="subtitle">
                        Ups! Da ist was schiefgelaufen!
                    </div>
                    <div class="desc">
                        Die von Ihnen gesuchte Seite wurde nicht gefunden!
                    </div>
                    <el-button class="return-home" @click="$router.push('Home')" type="primary">
                        Hier gehts zurück zur Startseite!
                    </el-button>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script src="./NotFound.ts" lang="ts"></script>
<style src="./NotFound.scss" lang="scss"></style>
