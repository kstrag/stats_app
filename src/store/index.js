import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        teams: ['MKS Pałac Młodzieży Tarnów', 'UKS Żak Nowy Sącz', 'MTS Ikar Niepołomice', 'Wisła CANPACK Kraków', 'MLKS-MOS Rzeszów', 'KK UR Kraków'],
        matchType: 'all',
        addedMath: false,
        error: false,
        tableHedaers: [
            {
                text: 'Numer',
                align: 'left',
                value: 'playerDetails.number',
            },
            {text: 'Nazwisko', value: 'playerDetails.name', sortable: false},
            {text: 'Punkty', value: 'stats.points'},
            {text: 'Asysty', value: 'stats.assist'},
            {text: 'Straty', value: 'stats.turnovers'},
            {text: 'Faule', value: 'stats.fouls'},
            {text: 'Tr za 1', value: 'stats.oneM'},
            {text: 'P za 1', value: 'stats.oneA'},
            {text: '% za 1', value: 'stats.oneP'},
            {text: 'Tr za 2', value: 'stats.twoM'},
            {text: 'P za 2', value: 'stats.twoA'},
            {text: '% za 2', value: 'stats.twoP'},
            {text: 'Tr za 3', value: 'stats.threeM'},
            {text: 'P za 3', value: 'stats.threeA'},
            {text: '% za 3', value: 'stats.threeP'},
            {text: 'Zb of', value: 'stats.ofReb'},
            {text: 'Zb def', value: 'stats.dReb'},
        ],
        players: [
            {name: 'Magdalena Puter', number: '8'},
            {name: 'Aisza Buczek', number: '4'},
            {name: 'Monika Malinowska', number: '24'},
            {name: 'Wiktoria Zając', number: '6'},
            {name: 'Karolina Przybyła', number: '23'},
            {name: 'Gabriela Czekaj', number: '34'},
            {name: 'Natalia Mazur', number: '7'},
            {name: 'Agnieszka Blum', number: '13'},
            {name: 'Dorota Świercz', number: '14'},
            {name: 'Aleksandra Klimas', number: '1'},
            {name: 'Julia Fortuna', number: '5'},
            {name: 'Gabriela Rak', number: '15'},
            {name: 'Julia Natkaniec', number: '12'},
            {name: 'Agnieszka Krawiec', number: '9'},
        ],
        mosirGames: [],
        oppGames: []
    },
    getters: {
        games(state) {
            return state.mosirGames.map((mosir, i) => {
                return {
                    mosir: mosir,
                    opponent: state.oppGames[i]
                }
            })
        },
        getNotification(state) {
            return state.addedMath
        }

    },
    mutations: {
        SET_LOADED_MOSIR_GAMES(state, payload) {
            state.mosirGames = payload
        },
        SET_LOADED_OPP_GAMES(state, payload) {
            state.oppGames = payload
        },
        SET_MATCH_TYPE(state, payload) {
            state.matchType = payload
        },
        CREATE_MATCH(state, payload) {
            state.mosirGames.push(payload)
        },
        CREATE_MATCH_OPP(state, payload) {
            state.oppGames.push(payload)
        },
        SHOW_NOTIFICATION(state) {
            state.addedMath = true
        },
        HIDE_NOTIFICATION(state) {
            state.addedMath = false
        },
        SHOW_ERROR(state) {
            state.error = true
        }

    },
    actions: {
        LOAD_MOSIR_GAMES({commit}) {
            firebase.database().ref('mosirGames').once('value')
                .then((data) => {
                    const mosirGames = []
                    const obj = data.val()
                    for (let key in obj) {
                        mosirGames.push({
                            id: key,
                            category: obj[key].category,
                            date: obj[key].date,
                            points: obj[key].points,
                            oneM: obj[key].oneM,
                            oneA: obj[key].oneA,
                            oneP: obj[key].oneP,
                            twoM: obj[key].twoM,
                            twoA: obj[key].twoA,
                            twoP: obj[key].twoP,
                            threeM: obj[key].threeM,
                            threeA: obj[key].threeA,
                            threeP: obj[key].threeP,
                            assist: obj[key].assist,
                            fouls: obj[key].fouls,
                            turnovers: obj[key].turnovers,
                            dReb: obj[key].dReb,
                            ofReb: obj[key].ofReb,
                            players: obj[key].players,
                        })
                    }
                    commit('SET_LOADED_MOSIR_GAMES', mosirGames)
                })
                .catch(
                    commit('SHOW_ERROR')
                )
        },
        LOAD_OPP_GAMES({commit}) {
            firebase.database().ref('oppGames').once('value')
                .then((data) => {
                    const oppGames = []
                    const obj = data.val()
                    for (let key in obj) {
                        oppGames.push({
                            id: key,
                            name: obj[key].name,
                            points: obj[key].points,
                            oneM: obj[key].oneM,
                            oneA: obj[key].oneA,
                            oneP: obj[key].oneP,
                            twoM: obj[key].twoM,
                            twoA: obj[key].twoA,
                            twoP: obj[key].twoP,
                            threeM: obj[key].threeM,
                            threeA: obj[key].threeA,
                            threeP: obj[key].threeP,
                            assist: obj[key].assist,
                            fouls: obj[key].fouls,
                            turnovers: obj[key].turnovers,
                            dReb: obj[key].dReb,
                            ofReb: obj[key].ofReb,
                        })
                    }
                    commit('SET_LOADED_OPP_GAMES', oppGames)
                })
                .catch(
                    commit('SHOW_ERROR')
                )
        },
        CREATE_MATCH({commit}, payload) {
            const mosirGame = {
                category: payload.selectMatch,
                date: payload.date,
                points: payload.points,
                oneM: payload.oneM,
                oneA: payload.oneA,
                oneP: (payload.oneM / payload.oneA * 100).toFixed(1),
                twoM: payload.twoM,
                twoA: payload.twoA,
                twoP: (payload.twoM / payload.twoA * 100).toFixed(1),
                threeM: payload.threeM,
                threeA: payload.threeA,
                threeP: (payload.threeM / payload.threeA * 100).toFixed(1),
                assist: payload.assist,
                fouls: payload.fouls,
                turnovers: payload.turnovers,
                dReb: payload.dReb,
                ofReb: payload.ofReb,
                players: payload.mPlayers
            }
            firebase.database().ref('mosirGames').push(mosirGame)
                .then((data) => {
                    const key = data.key
                    commit('CREATE_MATCH', {
                        ...mosirGame,
                        id: key
                    })
                    commit('SHOW_NOTIFICATION')

                })
                .catch(
                    commit('SHOW_ERROR')
                )

        },
        CREATE_MATCH_OPP({commit}, payload) {
            const oppGames = {
                name: payload.name,
                points: payload.points,
                oneM: payload.oneM,
                oneA: payload.oneA,
                oneP: (payload.oneM / payload.oneA * 100).toFixed(1),
                twoM: payload.twoM,
                twoA: payload.twoA,
                twoP: (payload.twoM / payload.twoA * 100).toFixed(1),
                threeM: payload.threeM,
                threeA: payload.threeA,
                threeP: (payload.threeM / payload.threeA * 100).toFixed(1),
                assist: payload.assist,
                fouls: payload.fouls,
                turnovers: payload.turnovers,
                dReb: payload.dReb,
                ofReb: payload.ofReb,

            }
            firebase.database().ref('oppGames').push(oppGames)
                .then((data) => {
                    const key = data.key
                    commit('CREATE_MATCH_OPP', {
                        ...oppGames,
                        id: key
                    }),
                        commit('SHOW_NOTIFICATION')
                })
                .catch(
                    commit('SHOW_ERROR')
                )

        },
    },
    modules: {}
})
