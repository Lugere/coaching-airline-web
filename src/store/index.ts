import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // API URLs
        streamURL: "https://demo.azuracast.com/api",

        // Playing Data
        isLive: true,
        isMute: false,
        isPlaying: false,
        length: 0,
        showLogin: false,
        song: {
            artist: "",
            title: "",
        },
        songLength: 0,
        songPlayed: 0,
        volume: 25,

        // Main View
        news: [
            {
                title: "Wir führen wieder spannende Interviews!",
                content: `
                    Start der sensationellen Radioshow von Herbert, das Skelett aus dem wunderbaren Kinderbuch von Martina Murseli: "die verrückte Hexte".
                    <br />
                    Die Stimme von Herbert das Skelett ist kein geringerer als Charli Wolf!
                    <br />
                    Im Februar (Termin wird noch bekannt gegeben) wird anlässlich des 35-jährigen Todestages und zu Ehren Hans Rosenthal 
                    am 10. Februar 22 eine  Sondersendung stattfinden, rund um die Sendung 50 Jahre Dallli Dalli und das Wirken des Hans Rosenthal.
                    <br />
                    Mit Live-Zuschaltung per Telefon der Sohn Gert Rosenthal, der sich zu einen Kurzinterview per Telefon bereit erklärt hat.
                    <br />
                    Christian Deussen als Moderator mit seinen Best Of sowie gemeinsam mit Andrea Hohmann die Fortsetzung der Gospel- u. Spirituals
                `,
                date: 1642599114,
                imageUrl: "radio-booth.jpg",
                newsId: 1,
            },
            {
                title: "Live Sendungen",
                content: `
                    Zusammen mit Burkhard Thom erstmal 14-tägig (Tag wird noch bekannt gegeben) informatives und Aufklärung gemeinsam in einer
                    Präventionssendung. Schwerpunkt /Thema: Alkoholismus und Co-Abhängigkeit
                    <br /><br />
                    Außerdem stellen wir im Laufe des Monats unsere Live Moderatoren vor, die sich schon für Coaching Airline Radio entschieden haben, mit dabei zu sein!
                    <br /><br />
                    Wir halten Euch ständig mit unseren News auf dem laufenden über unsere besonderen Programmpunkte!
                `,
                date: 1642599114,
                imageUrl: "radio-booth.jpg",
                newsId: 2,
            },
            {
                title: "Live Sendungen",
                content: `
                    Zusammen mit Burkhard Thom erstmal 14-tägig (Tag wird noch bekannt gegeben) informatives und Aufklärung gemeinsam in einer
                    Präventionssendung. Schwerpunkt /Thema: Alkoholismus und Co-Abhängigkeit
                    <br /><br />
                    Außerdem stellen wir im Laufe des Monats unsere Live Moderatoren vor, die sich schon für Coaching Airline Radio entschieden haben, mit dabei zu sein!
                    <br /><br />
                    Wir halten Euch ständig mit unseren News auf dem laufenden über unsere besonderen Programmpunkte!
                `,
                date: 1642599114,
                imageUrl: "radio-booth.jpg",
                newsId: 3,
            },
        ],

        // Team View
        team: [
            {
                name: "Andrea Hohmann",
                role: "Chefin, Moderatorin",
                imageUrl: "andrea-hohmann.jpg",
                socialMedia: [
                    {
                        brand: "LinkedIn",
                        link: "www.linkedin.com",
                    },
                    {
                        brand: "Twitter",
                        link: "www.twitter.com",
                    },
                    {
                        brand: "Facebook",
                        link: "www.facebook.com",
                    },
                    {
                        brand: "Xing",
                        link: "www.xing.com",
                    },
                    {
                        brand: "Telegram",
                        link: "www.telegram.com",
                    },
                ],
                desc: `Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.`,
            },
            {
                name: "Thomas Bockmann",
                role: "Moderator",
                imageUrl: "thomas-bockmann.jpg",
                socialMedia: [
                    {
                        brand: "Twitter",
                        link: "www.twitter.com",
                    },
                    {
                        brand: "Telegram",
                        link: "www.telegram.com",
                    },
                    {
                        brand: "Xing",
                        link: "www.xing.com",
                    },
                ],
                desc: `Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.`,
            },
            {
                name: "Jonas Richter",
                role: "Moderator",
                imageUrl: "jonas-richter.jpg",
                socialMedia: [
                    {
                        brand: "Xing",
                        link: "www.xing.com",
                    },
                    {
                        brand: "LinkedIn",
                        link: "www.linkedin.com",
                    },
                    {
                        brand: "Facebook",
                        link: "www.facebook.com",
                    },
                    {
                        brand: "Twitter",
                        link: "www.twitter.com",
                    },
                ],
                desc: `Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.`,
            },
            {
                name: "Uta Strauss",
                role: "Moderatorin",
                imageUrl: "uta-strauss.jpg",
                socialMedia: [
                    {
                        brand: "Twitter",
                        link: "www.twitter.com",
                    },
                    {
                        brand: "LinkedIn",
                        link: "www.linkedin.com",
                    },
                    {
                        brand: "Facebook",
                        link: "www.facebook.com",
                    },
                    {
                        brand: "Xing",
                        link: "www.xing.com",
                    },
                ],
                desc: `Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.`,
            },
            {
                name: "Bernd König",
                role: "Moderator",
                imageUrl: "bernd-koenig.jpg",
                socialMedia: [
                    {
                        brand: "Xing",
                        link: "www.xing.com",
                    },
                    {
                        brand: "Telegram",
                        link: "www.telegram.com",
                    },
                    {
                        brand: "Facebook",
                        link: "www.facebook.com",
                    },
                ],
                desc: `Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.`,
            },
            {
                name: "Katrin Lange",
                role: "Moderatorin",
                imageUrl: "katrin-lange.jpg",
                socialMedia: [
                    {
                        brand: "Twitter",
                        link: "www.twitter.com",
                    },
                    {
                        brand: "Telegram",
                        link: "www.telegram.com",
                    },
                    {
                        brand: "Xing",
                        link: "www.xing.com",
                    },
                ],
                desc: `Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet,
                       consectetuer adipiscing elit.
                       Aenean commodo ligula eget dolor.
                       Aenean massa. Cum sociis natoque
                       penatibus et magnis dis parturient
                       montes, nascetur ridiculus mus.`,
            },
        ],
        // Schedule View
        schedule: [{}],
    },
    mutations: {
        setIsLive(state, value: boolean): void {
            state.isLive = value;
        },

        setIsPlaying(state, value: boolean): void {
            state.isPlaying = value;
        },

        setLength(state, value: number): void {
            state.length = value;
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
                    console.log(result.data);
                    if (result.data) {
                        const { live, now_playing, is_online } = result.data;
                        commit("setIsLive", is_online);
                        commit("setSongLength", now_playing.duration);
                        commit("setSongPlayed", now_playing.elapsed);
                        commit("setSongArtist", now_playing.song.artist);
                        commit("setSongTitle", now_playing.song.title);
                    }
                })
                .catch(e => {
                    console.error(e);
                    return {};
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
                name: string;
                role: string;
                imageUrl: string;
                socialMedia: [
                    {
                        brand: string;
                        link: string;
                    },
                ];
                desc: string;
            },
        ): void {
            const team = store.state.team;
            team.push(member);
            commit("setTeam", team);
        },

        toggleIsMute(
            { commit },
            isMute: {
                title: string;
                content: string;
                date: number;
                imageUrl: string;
                newsId: number;
            },
        ): void {
            commit("setIsMute", isMute);
        },

        toggleLogin({ commit }, showLogin: boolean): void {
            commit("setShowLogin", showLogin);
        },
    },
    modules: {},
});

export default store;
