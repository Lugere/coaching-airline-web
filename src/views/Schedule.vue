<template>
    <div id="Schedule">
        <div class="main-container">
            <section class="header">
                <div class="title">Unser Sendeplan</div>
                <div class="week-pagination">
                    <el-button-group>
                        <el-button type="primary">Letzte Woche</el-button>
                        <el-button type="primary">Heute</el-button>
                        <el-button type="primary">Nächste Woche</el-button>
                    </el-button-group>
                </div>
            </section>
            <el-calendar />
            <!-- <section class="sub-container">
                <table>
                    <tr class="days">
                        <th>KW 38</th>
                        <th>
                            <div class="date">20.09.</div>
                            <div>Montag</div>
                        </th>
                        <th>
                            <div class="date">21.09.</div>
                            <div>Dienstag</div>
                        </th>
                        <th>
                            <div class="date">22.09.</div>
                            <div>Mittwoch</div>
                        </th>
                        <th>
                            <div class="date">23.09.</div>
                            <div>Donnerstag</div>
                        </th>
                        <th>
                            <div class="date">24.09.</div>
                            <div>Freitag</div>
                        </th>
                        <th>
                            <div class="date">25.09.</div>
                            <div>Samstag</div>
                        </th>
                        <th>
                            <div class="date">26.09.</div>
                            <div>Sonntag</div>
                        </th>
                    </tr>
                    <tr class="times" v-for="(time, timeIndex) in times" :key="timeIndex">
                        <th>{{ getTableTime(timeIndex) }}</th>
                        <td v-for="(time, dayIndex) in days" :key="dayIndex">
                            <el-tooltip
                                :open-delay="300"
                                placement="bottom"
                                v-if="Math.floor(Math.random() * 2) == 1"
                            >
                                <img
                                    :src="
                                        getImageUrl(
                                            team[Math.floor(Math.random() * 6)].imageUrl,
                                            'team',
                                        )
                                    "
                                    alt=""
                                />
                                <div slot="content" class="content">
                                    <div class="title">
                                        {{ team[Math.floor(Math.random() * 6)].name }}
                                    </div>
                                    <div class="time">{{ getTableTime(timeIndex) }}</div>
                                    <div class="theme">Alles von Abba bis Zappa</div>
                                    <div class="desc">
                                        {{
                                            truncateString(team[Math.floor(Math.random() * 6)].desc)
                                        }}
                                    </div>
                                    <el-button class="more-info-btn" type="text"
                                        >Mehr erfahren</el-button
                                    >
                                </div>
                            </el-tooltip>
                            <el-tooltip :open-delay="300" placement="bottom" v-else>
                                <img src="@/assets/images/default-profile.png" alt="" />
                                <div slot="content" class="content">
                                    <div class="title">Auto-DJ</div>
                                    <div class="time">{{ getTableTime(timeIndex) }}</div>
                                </div>
                            </el-tooltip>
                        </td>
                    </tr>
                </table>
            </section> -->
        </div>
        <Footer />
    </div>
</template>

<script src="./Schedule.ts" lang="ts"></script>
<style src="./Schedule.scss" lang="scss"></style>
