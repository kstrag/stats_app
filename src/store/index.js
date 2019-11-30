import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        matchType: 'all',
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
        mosirGames: [
            {
                id: 1,
                category: 'homeGame',
                date: '12.06.19',
                team: {
                    points: 60,
                    shots: {
                        oneM: 9,
                        oneA: 13,
                        twoM: 30,
                        twoA: 45,
                        threeM: 9,
                        threeA: 22
                    },
                    assist: 14,
                    fouls: 18,
                    turnovers: 6,
                    rebounds: {
                        dReb: 12,
                        ofReb: 5,
                    }
                },
                players: [
                    {
                        points: 10,
                        shots: {
                            oneM: 2,
                            oneA: 3,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 4
                        },
                        assist: 1,
                        fouls: 3,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 7,
                        }
                    },
                    {
                        points: 12,
                        shots: {
                            oneM: 4,
                            oneA: 4,
                            twoM: 5,
                            twoA: 7,
                            threeM: 2,
                            threeA: 4
                        },
                        assist: 2,
                        fouls: 3,
                        turnovers: 3,
                        rebounds: {
                            dReb: 5,
                            ofReb: 2,
                        }
                    },
                    {
                        points: 10,
                        shots: {
                            oneM: 3,
                            oneA: 4,
                            twoM: 2,
                            twoA: 7,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 2,
                        turnovers: 1,
                        rebounds: {
                            dReb: 1,
                            ofReb: 1,
                        }
                    },
                    {
                        points: 2,
                        shots: {
                            oneM: 0,
                            oneA: 0,
                            twoM: 1,
                            twoA: 2,
                            threeM: 0,
                            threeA: 0
                        },
                        assist: 0,
                        fouls: 1,
                        turnovers: 0,
                        rebounds: {
                            dReb: 0,
                            ofReb: 0,
                        }
                    },
                    {
                        points: 6,
                        shots: {
                            oneM: 1,
                            oneA: 2,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 1,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 2,
                        }
                    },
                    {
                        points: 10,
                        shots: {
                            oneM: 2,
                            oneA: 3,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 4
                        },
                        assist: 1,
                        fouls: 3,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 7,
                        }
                    },
                    {
                        points: 12,
                        shots: {
                            oneM: 4,
                            oneA: 4,
                            twoM: 5,
                            twoA: 7,
                            threeM: 2,
                            threeA: 4
                        },
                        assist: 2,
                        fouls: 3,
                        turnovers: 3,
                        rebounds: {
                            dReb: 5,
                            ofReb: 2,
                        }
                    },
                    {
                        points: 10,
                        shots: {
                            oneM: 3,
                            oneA: 4,
                            twoM: 2,
                            twoA: 7,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 2,
                        turnovers: 1,
                        rebounds: {
                            dReb: 1,
                            ofReb: 1,
                        }
                    },
                    {
                        points: 2,
                        shots: {
                            oneM: 0,
                            oneA: 0,
                            twoM: 1,
                            twoA: 2,
                            threeM: 0,
                            threeA: 0
                        },
                        assist: 0,
                        fouls: 1,
                        turnovers: 0,
                        rebounds: {
                            dReb: 0,
                            ofReb: 0,
                        }
                    },
                    {
                        points: 6,
                        shots: {
                            oneM: 1,
                            oneA: 2,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 1,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 2,
                        }
                    },
                    {
                        points: 2,
                        shots: {
                            oneM: 0,
                            oneA: 0,
                            twoM: 1,
                            twoA: 2,
                            threeM: 0,
                            threeA: 0
                        },
                        assist: 0,
                        fouls: 1,
                        turnovers: 0,
                        rebounds: {
                            dReb: 0,
                            ofReb: 0,
                        }
                    },
                    {
                        points: 6,
                        shots: {
                            oneM: 1,
                            oneA: 2,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 1,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 2,
                        }
                    },
                    {
                        points: 10,
                        shots: {
                            oneM: 2,
                            oneA: 3,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 4
                        },
                        assist: 1,
                        fouls: 3,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 7,
                        }
                    },
                    {
                        points: 12,
                        shots: {
                            oneM: 4,
                            oneA: 4,
                            twoM: 5,
                            twoA: 7,
                            threeM: 2,
                            threeA: 4
                        },
                        assist: 2,
                        fouls: 3,
                        turnovers: 3,
                        rebounds: {
                            dReb: 5,
                            ofReb: 2,
                        }
                    },

                ]
            },
            {
                id: 2,
                category: 'awayGame',
                date: '12.06.19',
                team: {
                    points: 60,
                    shots: {
                        oneM: 9,
                        oneA: 13,
                        twoM: 32,
                        twoA: 45,
                        threeM: 9,
                        threeA: 22
                    },
                    assist: 14,
                    fouls: 18,
                    turnovers: 6,
                    rebounds: {
                        dReb: 12,
                        ofReb: 5,
                    }
                },
                players: [
                    {
                        id: 1,
                        points: 10,
                        shots: {
                            oneM: 2,
                            oneA: 3,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 4
                        },
                        assist: 1,
                        fouls: 3,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 7,
                        }
                    },
                    {
                        id: 2,
                        points: 12,
                        shots: {
                            oneM: 4,
                            oneA: 4,
                            twoM: 5,
                            twoA: 7,
                            threeM: 2,
                            threeA: 4
                        },
                        assist: 2,
                        fouls: 3,
                        turnovers: 3,
                        rebounds: {
                            dReb: 5,
                            ofReb: 2,
                        }
                    },
                    {
                        id: 3,
                        points: 10,
                        shots: {
                            oneM: 3,
                            oneA: 4,
                            twoM: 2,
                            twoA: 7,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 2,
                        turnovers: 1,
                        rebounds: {
                            dReb: 1,
                            ofReb: 1,
                        }
                    },
                    {
                        id: 4,
                        points: 2,
                        shots: {
                            oneM: 0,
                            oneA: 0,
                            twoM: 1,
                            twoA: 2,
                            threeM: 0,
                            threeA: 0
                        },
                        assist: 0,
                        fouls: 1,
                        turnovers: 0,
                        rebounds: {
                            dReb: 0,
                            ofReb: 0,
                        }
                    },
                    {
                        id: 5,
                        points: 6,
                        shots: {
                            oneM: 1,
                            oneA: 2,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 1,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 2,
                        }
                    },
                    {
                        id: 6,
                        points: 10,
                        shots: {
                            oneM: 2,
                            oneA: 3,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 4
                        },
                        assist: 1,
                        fouls: 3,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 7,
                        }
                    },
                    {
                        id: 7,
                        points: 12,
                        shots: {
                            oneM: 4,
                            oneA: 4,
                            twoM: 5,
                            twoA: 7,
                            threeM: 2,
                            threeA: 4
                        },
                        assist: 2,
                        fouls: 3,
                        turnovers: 3,
                        rebounds: {
                            dReb: 5,
                            ofReb: 2,
                        }
                    },
                    {
                        id: 8,
                        points: 10,
                        shots: {
                            oneM: 3,
                            oneA: 4,
                            twoM: 2,
                            twoA: 7,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 2,
                        turnovers: 1,
                        rebounds: {
                            dReb: 1,
                            ofReb: 1,
                        }
                    },
                    {
                        id: 9,
                        points: 2,
                        shots: {
                            oneM: 0,
                            oneA: 0,
                            twoM: 1,
                            twoA: 2,
                            threeM: 0,
                            threeA: 0
                        },
                        assist: 0,
                        fouls: 1,
                        turnovers: 0,
                        rebounds: {
                            dReb: 0,
                            ofReb: 0,
                        }
                    },
                    {
                        id: 10,
                        points: 6,
                        shots: {
                            oneM: 1,
                            oneA: 2,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 1,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 2,
                        }
                    },
                    {
                        id: 11,
                        points: 2,
                        shots: {
                            oneM: 0,
                            oneA: 0,
                            twoM: 1,
                            twoA: 2,
                            threeM: 0,
                            threeA: 0
                        },
                        assist: 0,
                        fouls: 1,
                        turnovers: 0,
                        rebounds: {
                            dReb: 0,
                            ofReb: 0,
                        }
                    },
                    {
                        id: 12,
                        points: 6,
                        shots: {
                            oneM: 1,
                            oneA: 2,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 1,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 2,
                        }
                    },
                    {
                        id: 13,
                        points: 10,
                        shots: {
                            oneM: 2,
                            oneA: 3,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 4
                        },
                        assist: 1,
                        fouls: 3,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 7,
                        }
                    },
                    {
                        id: 14,
                        points: 12,
                        shots: {
                            oneM: 4,
                            oneA: 4,
                            twoM: 5,
                            twoA: 7,
                            threeM: 2,
                            threeA: 4
                        },
                        assist: 2,
                        fouls: 3,
                        turnovers: 3,
                        rebounds: {
                            dReb: 5,
                            ofReb: 2,
                        }
                    },
                ]

            },
            {
                id: 3,
                category: 'homeGame',
                date: '12.06.19',
                team: {
                    points: 60,
                    shots: {
                        oneM: 9,
                        oneA: 13,
                        twoM: 32,
                        twoA: 40,
                        threeM: 9,
                        threeA: 25
                    },
                    assist: 14,
                    fouls: 18,
                    turnovers: 6,
                    rebounds: {
                        dReb: 12,
                        ofReb: 5,
                    }
                },
                players: [
                    {
                        id: 1,
                        points: 10,
                        shots: {
                            oneM: 2,
                            oneA: 3,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 4
                        },
                        assist: 1,
                        fouls: 3,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 7,
                        }
                    },
                    {
                        id: 2,
                        points: 12,
                        shots: {
                            oneM: 4,
                            oneA: 4,
                            twoM: 5,
                            twoA: 7,
                            threeM: 2,
                            threeA: 4
                        },
                        assist: 2,
                        fouls: 3,
                        turnovers: 3,
                        rebounds: {
                            dReb: 5,
                            ofReb: 2,
                        }
                    },
                    {
                        id: 3,
                        points: 10,
                        shots: {
                            oneM: 3,
                            oneA: 4,
                            twoM: 2,
                            twoA: 7,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 2,
                        turnovers: 1,
                        rebounds: {
                            dReb: 1,
                            ofReb: 1,
                        }
                    },
                    {
                        id: 4,
                        points: 2,
                        shots: {
                            oneM: 0,
                            oneA: 0,
                            twoM: 1,
                            twoA: 2,
                            threeM: 0,
                            threeA: 0
                        },
                        assist: 0,
                        fouls: 1,
                        turnovers: 0,
                        rebounds: {
                            dReb: 0,
                            ofReb: 0,
                        }
                    },
                    {
                        id: 5,
                        points: 6,
                        shots: {
                            oneM: 1,
                            oneA: 2,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 1,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 2,
                        }
                    },
                    {
                        id: 6,
                        points: 10,
                        shots: {
                            oneM: 2,
                            oneA: 3,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 4
                        },
                        assist: 1,
                        fouls: 3,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 7,
                        }
                    },
                    {
                        id: 7,
                        points: 12,
                        shots: {
                            oneM: 4,
                            oneA: 4,
                            twoM: 5,
                            twoA: 7,
                            threeM: 2,
                            threeA: 4
                        },
                        assist: 2,
                        fouls: 3,
                        turnovers: 3,
                        rebounds: {
                            dReb: 5,
                            ofReb: 2,
                        }
                    },
                    {
                        id: 8,
                        points: 10,
                        shots: {
                            oneM: 3,
                            oneA: 4,
                            twoM: 2,
                            twoA: 7,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 2,
                        turnovers: 1,
                        rebounds: {
                            dReb: 1,
                            ofReb: 1,
                        }
                    },
                    {
                        id: 9,
                        points: 2,
                        shots: {
                            oneM: 0,
                            oneA: 0,
                            twoM: 1,
                            twoA: 2,
                            threeM: 0,
                            threeA: 0
                        },
                        assist: 0,
                        fouls: 1,
                        turnovers: 0,
                        rebounds: {
                            dReb: 0,
                            ofReb: 0,
                        }
                    },
                    {
                        id: 10,
                        points: 6,
                        shots: {
                            oneM: 1,
                            oneA: 2,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 1,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 2,
                        }
                    },
                    {
                        id: 11,
                        points: 2,
                        shots: {
                            oneM: 0,
                            oneA: 0,
                            twoM: 1,
                            twoA: 2,
                            threeM: 0,
                            threeA: 0
                        },
                        assist: 0,
                        fouls: 1,
                        turnovers: 0,
                        rebounds: {
                            dReb: 0,
                            ofReb: 0,
                        }
                    },
                    {
                        id: 12,
                        points: 6,
                        shots: {
                            oneM: 1,
                            oneA: 2,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 3
                        },
                        assist: 1,
                        fouls: 1,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 2,
                        }
                    },
                    {
                        id: 13,
                        points: 10,
                        shots: {
                            oneM: 2,
                            oneA: 3,
                            twoM: 2,
                            twoA: 5,
                            threeM: 1,
                            threeA: 4
                        },
                        assist: 1,
                        fouls: 3,
                        turnovers: 2,
                        rebounds: {
                            dReb: 2,
                            ofReb: 7,
                        }
                    },
                    {
                        id: 14,
                        points: 12,
                        shots: {
                            oneM: 4,
                            oneA: 4,
                            twoM: 5,
                            twoA: 7,
                            threeM: 2,
                            threeA: 4
                        },
                        assist: 2,
                        fouls: 3,
                        turnovers: 3,
                        rebounds: {
                            dReb: 5,
                            ofReb: 2,
                        }
                    },
                ]
            }
        ],
        oppGames: [
            {
                id: 1,
                name: 'Niepołomice',
                team: {
                    points: 44,
                    shots: {
                        oneM: 9,
                        oneA: 13,
                        twoM: 32,
                        twoA: 40,
                        threeM: 9,
                        threeA: 25
                    },
                    assist: 14,
                    fouls: 18,
                    turnovers: 6,
                    rebounds: {
                        dReb: 7,
                        ofReb: 6,
                    }
                }
            },
            {
                id: 2,
                name: 'Wisła Canpak',
                team: {
                    points: 48,
                    shots: {
                        oneM: 9,
                        oneA: 13,
                        twoM: 32,
                        twoA: 40,
                        threeM: 9,
                        threeA: 25
                    },
                    assist: 14,
                    fouls: 18,
                    turnovers: 6,
                    rebounds: {
                        dReb: 12,
                        ofReb: 5,
                    }
                }
            },
            {
                id: 3,
                name: 'Testowa drużyna',
                team: {
                    points: 53,
                    shots: {
                        oneM: 7,
                        oneA: 13,
                        twoM: 32,
                        twoA: 40,
                        threeM: 8,
                        threeA: 25
                    },
                    assist: 14,
                    fouls: 18,
                    turnovers: 6,
                    rebounds: {
                        dReb: 12,
                        ofReb: 5,
                    }
                }
            }
        ]
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
        playerStats(state){
          return state.mosirGames[0].players.map((playersStats, i) =>{
              return {
                  playersStats : playersStats,
                  players: state.players[i]
              }
          })
        },
        mRebs(state) {
            return state.mosirGames[0].team.rebounds.dReb + state.mosirGames[0].team.rebounds.ofReb
        },
        oRebs(state) {
            return state.oppGames[0].team.rebounds.dReb + state.oppGames[0].team.rebounds.ofReb
        },
        mFGM(state) {
            return state.mosirGames[0].team.shots.twoM + state.mosirGames[0].team.shots.threeM
        },
        oFGM(state) {
            return state.oppGames[0].team.shots.twoM + state.oppGames[0].team.shots.threeM
        },
        mFGA(state) {
            return state.mosirGames[0].team.shots.twoA + state.mosirGames[0].team.shots.threeA
        },
        oFGA(state) {
            return state.oppGames[0].team.shots.twoA + state.oppGames[0].team.shots.threeA
        }


    },
    mutations: {
        SET_MATCH_TYPE(state, payload) {
            state.matchType = payload
        },

    },
    actions: {},
    modules: {}
})
