import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // Player
        isMute: false,
        isPlaying: false,
        length: 0,
        showLogin: false,
        song: {
            meta: {
                artist: "Peter Maffay",
                name: "So bist du",
                file: "stream.pls",
            },
        },
        songLength: 307,
        songPlayed: 0,
        volume: 25,
        // Main View
        news: [
            {
                title: "Dieter Bohlen am Freitag bei uns im Radio!",
                content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.`,
                date: 1630005029,
                imageUrl: "dieter-bohlen.jpg",
                newsId: 1,
            },
            {
                title: "Wir sind bald wieder On-Air!",
                content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
                Lorem ipsum`,
                date: 1631618869,
                imageUrl: "radio-booth.jpg",
                newsId: 2,
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
