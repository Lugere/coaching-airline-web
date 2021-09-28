<template>
    <div id="Contact">
        <div class="main-container">
            <section class="header">
                Kontakt
            </section>
            .
            <section class="sub-container">
                <el-form class="form" label-position="top">
                    <div class="container">
                        <el-form-item label="Name & Nachname">
                            <el-input v-model="contact.name" />
                        </el-form-item>
                        <el-form-item label="E-Mail">
                            <el-input v-model="contact.email" />
                        </el-form-item>
                    </div>
                    <el-form-item label="Betreff">
                        <el-input v-model="contact.subject" />
                    </el-form-item>
                    <el-form-item label="Nachricht">
                        <el-input
                            v-model="contact.message"
                            :autosize="{ minRows: 10, maxRows: 10 }"
                            type="textarea"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">Abschicken</el-button>
                    </el-form-item>
                </el-form>
                <div class="quotes"></div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script src="./Contact.ts" lang="ts"></script>
<style src="./Contact.scss" lang="scss"></style>
