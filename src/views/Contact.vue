<template>
    <div id="Contact">
        <main>
            <section class="header">
                Kontakt
            </section>
            <section class="sub-container">
                <el-form ref="contact" class="form" label-position="top">
                    <div class="container">
                        <el-form-item label="Name & Nachname">
                            <el-input name="name" v-model="contact.name" />
                        </el-form-item>
                        <el-form-item label="E-Mail">
                            <el-input name="email" v-model="contact.email" />
                        </el-form-item>
                    </div>
                    <el-form-item label="Betreff">
                        <el-input name="subject" v-model="contact.subject" />
                    </el-form-item>
                    <el-form-item label="Nachricht">
                        <el-input
                            name="message"
                            v-model="contact.message"
                            :autosize="{ minRows: 10, maxRows: 10 }"
                            type="textarea"
                        />
                    </el-form-item>
                    <el-form-item class="submit-btn">
                        <el-button
                            disabled
                            :loading="isSendEmailLoading"
                            type="primary"
                            @click="sendEmail()"
                        >
                            <!-- Absenden -->
                            Coming Soon
                        </el-button>
                    </el-form-item>
                </el-form>
                <div class="quotes">
                    <blockquote class="quote-1">
                        mache die reise deines lebens und fliege mit coaching airline radio in eine
                        neue welt
                    </blockquote>
                    <div class="container">
                        <div class="img">
                            <img
                                src="@/assets/images/team/andrea-hohmann.jpg"
                                alt="andrea hohmann"
                            />
                        </div>
                        <div class="sub-container">
                            <div class="quote-2">
                                das beste was du zu bieten hast bist du selbst
                            </div>
                            <div class="signature">
                                <img src="@/assets/images/signature.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script src="./Contact.ts" lang="ts"></script>
<style src="./Contact.scss" lang="scss"></style>
