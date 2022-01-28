<template>
    <div id="Schedule">
        <div class="main-container">
            <section class="header">
                <div class="title">Unser Sendeplan</div>
                <div class="week-pagination">
                    <el-button-group>
                        <el-button type="primary" @click="updateWeek('decr')">Letzte Woche</el-button>
                        <el-button type="primary" @click="updateWeek()">Heute</el-button>
                        <el-button type="primary" @click="updateWeek('incr')">Nächste Woche</el-button>
                    </el-button-group>
                </div>
            </section>
            <!-- <el-calendar /> -->
            <section class="sub-container">
                <table>
                    <tr class="days">
                        <th class="corner">
                            <span class="year"> {{ currYear }} </span>
                            <span> KW {{ calendarWeek }} </span>
                        </th>
                        <th v-for="(day, index) in days" :key="index">
                            <div class="date">{{ day.date }}</div>
                            <div>{{ day.weekDay }}</div>
                        </th>
                    </tr>
                    <tr class="times" v-for="(time, timeIndex) in times" :key="timeIndex">
                        <th>{{ getTableTime(timeIndex) }}</th>
                        <td v-for="(day, dayIndex) in days" :key="dayIndex">
                            <el-tooltip
                                :open-delay="300"
                                placement="bottom"
                                v-if="isStreamerPlanned(day, time)"
                            >
                                <img :src="getImageUrl(currStreamer.imageUrl, 'team')" alt="" />
                                <div slot="content" class="content">
                                    <div class="title">
                                        {{ currStreamer.name }}
                                    </div>
                                    <div class="time">{{ getTableTime(timeIndex) }}</div>
                                    <div class="theme">{{ currEventData.theme }}</div>
                                    <div class="desc">
                                        {{ truncateString(currEventData.desc) }}
                                    </div>
                                    <!-- <el-button disabled class="more-info-btn" size="mini" type="primary">
                                        Mehr erfahren
                                    </el-button> -->
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
            </section>
        </div>
        <Footer />
    </div>
</template>

<script src="./Schedule.ts" lang="ts"></script>
<style src="./Schedule.scss" lang="scss"></style>
