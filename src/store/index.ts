import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isPlaying: false,
        length: 0,
        songTitle: "Peter Maffay - So bist du",
        songLength: 175,
        songPlayed: 0,
        volume: 20,
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
        schedule: [
            {
                
            }
        ]
    },
    mutations: {
        setIsPlaying(state, val) {
            state.isPlaying = val;
        },
        setLength(state, val) {
            state.length = val;
        },
        setSongTitle(state, val) {
            state.songTitle = val;
        },
        setSongLength(state, val) {
            state.songLength = val;
        },
        setSongPlayed(state, val) {
            state.songPlayed = val;
        },
        setVolume(state, val) {
            state.volume = val;
        },
        setNews(state, val) {
            state.news = val;
        },
        setTeam(state, val) {
            state.team = val;
        },
    },
    actions: {},
    modules: {},
});

export default store;
