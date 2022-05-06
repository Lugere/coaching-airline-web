<template>
    <div id="Schedule">
        <main>
            <section class="header">
                <div class="title">Unser Sendeplan</div>
                <div class="week-pagination">
                    <label for="weekpicker">
                        <span> Kalenderwoche </span>
                        <span> auswählen </span>
                    </label>
                    <el-date-picker
                        v-model="selectedWeek"
                        @change="onWeekPicked()"
                        format="[KW] WW - yyyy"
                        name="weekpicker"
                        :clearable="false"
                        type="week"
                        :picker-options="{
                            firstDayOfWeek: 1,
                        }"
                    />
                    <el-button-group>
                        <el-button type="primary" @click="updateWeek('decr')">
                            Letzte Woche
                        </el-button>
                        <el-button type="primary" @click="updateWeek()">
                            Heute
                        </el-button>
                        <el-button type="primary" @click="updateWeek('incr')">
                            Nächste Woche
                        </el-button>
                    </el-button-group>
                </div>
            </section>
            <!-- <el-calendar /> -->
            <section class="sub-container">
                <table ref="schedule-table" v-loading="isTableLoading">
                    <tr class="days">
                        <th class="corner">
                            <span class="year"> {{ currYear }} </span>
                            <span> KW {{ currWeek }} </span>
                        </th>
                        <th
                            :class="{ today: isCellToday(day.date) }"
                            v-for="(day, index) in days"
                            :key="index"
                        >
                            <div class="date">{{ day.date.substr(0, 7) }}</div>
                            <div>{{ day.weekDay }}</div>
                        </th>
                    </tr>
                    <tr class="times" v-for="(time, timeIndex) in times" :key="timeIndex">
                        <th>{{ getTableTime(timeIndex) }}</th>
                        <td
                            v-for="(day, dayIndex) in days"
                            :key="dayIndex"
                            :class="{ today: isCellToday(day.date) }"
                        >
                            <el-tooltip
                                :open-delay="300"
                                placement="bottom"
                                v-if="isStreamerPlanned(day.date, time)"
                            >
                                <img
                                    class="streamer"
                                    :src="
                                        getImageUrl(
                                            getCurrStreamer(day.date, time).imageUrl,
                                            'team',
                                        )
                                    "
                                    alt=""
                                />
                                <div slot="content" class="content">
                                    <div class="header">
                                        <div class="streamer">
                                            <span
                                                v-if="
                                                    getCurrStreamer(day.date, time).modName.length >
                                                        0
                                                "
                                            >
                                                {{ getCurrStreamer(day.date, time).modName }}
                                            </span>
                                            <span v-else>
                                                {{ getCurrStreamer(day.date, time).name }}
                                            </span>
                                        </div>
                                        <div class="time">
                                            {{
                                                getStreamerTime(
                                                    getCurrEventData(day.date, time).time,
                                                )
                                            }}
                                        </div>
                                    </div>
                                    <div class="body">
                                        <div class="theme">
                                            {{ getCurrEventData(day.date, time).theme }}
                                        </div>
                                        <div
                                            class="desc"
                                            v-html="
                                                truncateString(
                                                    getCurrEventData(day.date, time).desc,
                                                )
                                            "
                                        ></div>
                                        <!-- <el-button class="more-info-btn" size="mini" type="primary">
                                        Mehr erfahren
                                    </el-button> -->
                                        <div class="tags">
                                            <el-tag
                                                v-for="(tag, index) in getCurrEventData(
                                                    day.date,
                                                    time,
                                                ).tags"
                                                :key="index"
                                                :type="tag.type"
                                                effect="dark"
                                                size="mini"
                                            >
                                                <span class="label"> {{ tag.label }} </span>
                                            </el-tag>
                                        </div>
                                    </div>
                                </div>
                            </el-tooltip>
                            <el-tooltip :open-delay="300" placement="bottom" v-else>
                                <img src="@/assets/images/default-profile.png" alt="" />
                                <div slot="content" class="content">
                                    <div class="header">
                                        <div class="title">Auto-DJ</div>
                                        <div class="time">{{ getTableTime(timeIndex) }}</div>
                                    </div>
                                </div>
                            </el-tooltip>
                        </td>
                    </tr>
                </table>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script src="./Schedule.ts" lang="ts"></script>
<style src="./Schedule.scss" lang="scss"></style>
