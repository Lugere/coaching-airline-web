import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // API URLs
        streamURL: "https://stream.coachingairlineradio.de/api",

        // Playing Data
        isOnline: true,
        isLive: false,
        isMute: true,
        isPlaying: false,
        showLogin: false,
        song: {
            artist: "",
            title: "",
        },
        songLength: 0,
        songPlayed: 0,
        streamerName: "",
        volume: 25,

        // Main View
        news: [
            {
                newsId: 1,
                title: "Wir führen wieder spannende Interviews!",
                content: `
                    Start der sensationellen Radioshow von Herbert, das Skelett aus dem wunderbaren
                    Kinderbuch von Martina Murseli: "die verrückte Hexte".
                    <br />
                    Die Stimme von Herbert das Skelett ist kein geringerer als Charli Wolf!
                    <br />
                    Im Februar (Termin wird noch bekannt gegeben) wird anlässlich des 35-jährigen
                    Todestages und zu Ehren Hans Rosenthal am 10. Februar 22 eine Sondersendung
                    stattfinden, rund um die Sendung 50 Jahre Dallli Dalli und das Wirken des
                    HansRosenthal.
                    <br />
                    Wir freuen uns Euch mitteilen zu können, dass sich der Sohn Gert Rosenthal - Leiter
                    der Hans-Rosenthal-Stiftung - zu einem Live Kurzinterview per Telefon bereit erklärt hat.
                    <br />
                    Christian Deussen als Moderator mit seinen Best Of sowie gemeinsam mit Andrea
                    Hohmann die Fortsetzung der Gospel- u. Spirituals
                `,
                date: 1642599114,
                imageUrl: "radio-booth.jpg",
            },
            {
                newsId: 3,
                title: 'Live Sendung: "Unter uns gesagt"',
                content: `
                Zusammen mit Burkhard Thom erstmal 14-tägig (Tag wird noch bekannt gegeben) informatives
                und Aufklärung gemeinsam in einer Präventionssendung. Schwerpunkt /Thema: Alkoholismus und
                Co-Abhängigkeit
                <br /><br />
                Außerdem stellen wir im Laufe des Monats unsere Live Moderatoren vor, die sich schon für
                Coaching Airline Radio entschieden haben, mit dabei zu sein!
                <br /><br />
                Wir halten Euch ständig mit unseren News auf dem laufenden über unsere besonderen
                Programmpunkte!
                `,
                date: 1642599114,
                imageUrl: "radio-booth.jpg",
            },
            {
                newsId: 4,
                title: "Blockchain-Stammtisch",
                content: `
                    Alphabetisierung für die Blockchain- und Krypto-Zukunft ABCF-Academy
                `,
                date: 1643304381,
                imageUrl: "abcf.jpg",
            },
        ],

        // Team View
        team: [
            {
                id: 1,
                name: "Andrea Hohmann",
                modName: "",
                role: "Chefin, Moderatorin",
                imageUrl: "andrea-hohmann.jpg",
                socialMedia: [
                    {
                        brand: "Xing",
                        link: "https://www.xing.com/profile/Andrea_Hohmann17/cv",
                    },
                    {
                        brand: "Facebook",
                        link: "https://www.facebook.com/coachingirlineradio/",
                    },
                    {
                        brand: "Twitter",
                        link: "https://twitter.com/AirlineCoaching",
                    },
                    {
                        brand: "LinkedIn",
                        link: "https://www.linkedin.com/in/andrea-hohmann-0b558236/",
                    },
                    {
                        brand: "Telegram",
                        link: "https://t.me/RadioCoachingAirline",
                    },
                    {
                        brand: "Instagram",
                        link: "https://www.instagram.com/coachingairline/",
                    },
                ],
                desc: ``,
            },
            {
                id: 2,
                name: "Thomas Brockmann",
                modName: "",
                role: "Moderator",
                imageUrl: "thomas_brockmann.jpg",
                socialMedia: [],
                desc: ``,
            },
            // {
            //     id: 3,
            //     name: "Berni Schroeter",
            //     modName: "",
            //     role: "Moderator",
            //     imageUrl: "berni_schroeter.jpg",
            //     socialMedia: [],
            //     desc: `Lorem ipsum dolor sit amet,
            //            consectetuer adipiscing elit.
            //            Aenean commodo ligula eget dolor.
            //            Aenean massa. Cum sociis natoque
            //            penatibus et magnis dis parturient
            //            montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet,
            //            consectetuer adipiscing elit.
            //            Aenean commodo ligula eget dolor.
            //            Aenean massa. Cum sociis natoque
            //            penatibus et magnis dis parturient
            //            montes, nascetur ridiculus mus.`,
            // },
            {
                id: 4,
                name: "Alexandra Speder",
                modName: "",
                role: "Moderatorin",
                imageUrl: "alexandra_speder.jpg",
                socialMedia: [],
                desc: ``,
            },
            {
                id: 5,
                name: "Sabrina König",
                modName: "",
                role: "Moderatorin",
                imageUrl: "sabrina_koenig.jpg",
                socialMedia: [],
                desc: ``,
            },
            {
                id: 6,
                name: "Sascha König",
                modName: "SilentAngel",
                role: "Moderator",
                imageUrl: "sascha_koenig.jpg",
                socialMedia: [],
                desc: ``,
            },
            {
                id: 7,
                name: "Burkhard Thom",
                modName: "",
                role: "Moderator",
                imageUrl: "burkhard_thom.jpg",
                socialMedia: [],
                desc: ``,
            },
            {
                id: 8,
                name: "Christian Deussen",
                modName: "",
                role: "Moderator",
                imageUrl: "christian_deussen.jpg",
                socialMedia: [
                    {
                        brand: "Facebook",
                        link: "https://www.facebook.com/ChristianDeussenSaenger",
                    },
                ],
                desc: ``,
            },
            {
                id: 9,
                name: "Pino",
                modName: "",
                role: "Moderator",
                imageUrl: "pino.jpg",
                socialMedia: [],
                desc: ``,
            },
        ],
        // Schedule View
        schedule: [
            {
                time: {
                    start: "1800",
                    end: "2000",
                },
                date: "29. 01. 2022",
                streamerId: 1,
                tags: [
                    {
                        label: "Stream",
                        type: "danger",
                        icon: "stream",
                    },
                ],
                theme: "",
                desc: "",
            },
            {
                time: {
                    start: "2000",
                    end: "2200",
                },
                date: "06. 05. 2022",
                streamerId: 1,
                tags: [
                    {
                        label: "Stream",
                        type: "danger",
                        icon: "stream",
                    },
                ],
                theme: "50 Jahre Dalli Dalli",
                desc: "35-Jähriger Todestag von Hans Rosenthal.<br /> Live am Mikrofon sind Andrea und Constance",
            },
            {
                time: {
                    start: "1800",
                    end: "2000",
                },
                date: "05. 03. 2022",
                streamerId: 1,
                tags: [
                    {
                        label: "Stream",
                        type: "danger",
                        icon: "stream",
                    },
                ],
                theme: "",
                desc: "",
            },
            {
                time: {
                    start: "2000",
                    end: "2200",
                },
                date: "05. 03. 2022",
                streamerId: 6,
                tags: [
                    {
                        label: "Stream",
                        type: "danger",
                        icon: "stream",
                    },
                ],
                theme: "",
                desc: "",
            },
            {
                time: {
                    start: "2000",
                    end: "2200",
                },
                date: "17. 06. 2022",
                streamerId: 1,
                tags: [
                    {
                        label: "Stream",
                        type: "danger",
                        icon: "stream",
                    },
                ],
                theme: "",
                desc: "",
            },
            {
                time: {
                    start: "2200",
                    end: "0000",
                },
                date: "17. 06. 2022",
                streamerId: 6,
                tags: [
                    {
                        label: "Stream",
                        type: "danger",
                        icon: "stream",
                    },
                ],
                theme: "",
                desc: "",
            },
            {
                time: {
                    start: "1800",
                    end: "2000",
                },
                date: "18. 06. 2022",
                streamerId: 1,
                tags: [
                    {
                        label: "Stream",
                        type: "danger",
                        icon: "stream",
                    },
                ],
                theme: "Musicals",
                desc: "",
            },
            {
                time: {
                    start: "1800",
                    end: "2000",
                },
                date: "22. 08. 2022",
                streamerId: 1,
                tags: [
                    {
                        label: "Podcast",
                        type: "success",
                        icon: "podcasts",
                    },
                ],
                theme: '"Unter uns gesagt"',
                desc: "Alkoholismus, Sucht und sein Umfeld mit Andrea und Burkhard Thom",
            },
        ],
        recurringSchedule: [
            {
                day: 0,
                firstDate: "21. 03. 2022",
                lastDate: "31. 12. 2022",
                time: {
                    start: "1800",
                    end: "1900",
                },
                streamerId: 1,
                tags: [
                    {
                        label: "Podcast",
                        type: "success",
                        icon: "podcasts",
                    },
                ],
                theme: "Monday Podcast",
                desc: "Mit Andrea Hohmann und Musik vom Feinsten",
            },
        ],
    },
    mutations: {
        setIsOnline(state, value: boolean): void {
            state.isOnline = value;
        },

        setIsLive(state, value: boolean): void {
            state.isLive = value;
        },

        setIsPlaying(state, value: boolean): void {
            state.isPlaying = value;
        },

        setSongLength(state, value: number): void {
            state.songLength = value;
        },

        setSongPlayed(state, value: number): void {
            state.songPlayed = value;
        },

        setSongArtist(state, value: string) {
            state.song.artist = value;
        },

        setSongTitle(state, value: string) {
            state.song.title = value;
        },

        setStreamerName(state, value: string) {
            state.streamerName = value;
        },

        setVolume(state, value: number): void {
            state.volume = value;
        },

        setNews(state, value): void {
            state.news = value;
        },

        setTeam(state, value): void {
            state.team = value;
        },

        setIsMute(state, value: boolean): void {
            state.isMute = value;
        },

        setShowLogin(state, value): void {
            state.showLogin = value;
        },
    },
    actions: {
        async updatePlayingData({ commit, state }) {
            await Vue.axios
                .get(`${state.streamURL}/nowplaying/1`)
                .then(result => {
                    if (result.data) {
                        const { live, now_playing, is_online } = result.data;

                        commit("setIsOnline", is_online);
                        commit("setIsLive", live.is_live);

                        if (is_online) {
                            commit("setStreamerName", live.streamer_name);
                            commit("setSongLength", now_playing.duration);
                            commit("setSongPlayed", now_playing.elapsed);
                            commit("setSongArtist", now_playing.song.artist);
                            commit("setSongTitle", now_playing.song.title);
                        }
                    }
                })
                .catch(e => {
                    console.error(e.message);
                    commit("setIsOnline", false);
                    commit("setIsLive", false);
                });
        },

        toggleIsPlaying({ commit }, isPlaying): void {
            commit("setIsPlaying", isPlaying);
        },

        setSongPlayed({ commit }, songPlayed): void {
            commit("setSongPlayed", songPlayed);
        },

        setLength({ commit }, length): void {
            commit("setLength", length);
        },

        setSongLength({ commit }, length): void {
            commit("setSongLength", length);
        },

        updateVolume({ commit }, volume): void {
            commit("setVolume", volume);
        },

        addTeamMember(
            { commit },
            member: {
                id: number;
                name: string;
                role: string;
                imageUrl: string;
                socialMedia: [
                    {
                        brand: string;
                        link: string;
                    },
                ];
                modName;
                desc: string;
            },
        ): void {
            const team = store.state.team;
            team.push(member);
            commit("setTeam", team);
        },

        toggleIsMute({ commit }, isMute: boolean): void {
            commit("setIsMute", isMute);
        },

        toggleLogin({ commit }, showLogin: boolean): void {
            commit("setShowLogin", showLogin);
        },
    },
    modules: {},
});

export default store;
