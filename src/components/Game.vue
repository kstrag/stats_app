<template>
    <div class="signle-game">
        <v-container>
            <v-layout wrap>
                <v-flex xs12 lg10 offset-lg1>
                    <v-btn to="/games" text>
                        <v-icon left>mdi-chevron-left</v-icon>
                        Powrót do listy spotkań
                    </v-btn>
                    <h2>Spotkanie z dnia {{gameId[0].mosir.date}} sezon 19/20</h2>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex xs12 lg10 offset-lg1>
                    <v-tabs fixed-tabs color="light-blue lighten-2">
                        <v-tab>
                            <v-icon left>mdi-account-group</v-icon>
                            Statystyki drużyny
                        </v-tab>
                        <v-tab>
                            <v-icon left>mdi-account</v-icon>
                            Statystyki zawodników
                        </v-tab>

                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <div v-for="(game,index) in gameId" :key="index">
                                        <template v-if="game.mosir.category == 'homeGame'">
                                            <v-layout>
                                                <v-flex md4>
                                                    <div class="team-box team-box--left">
                                                        <img src="../assets/mosir-logo.png" alt="Logotype">
                                                        <h3>Contimax Mosir Bochnia</h3>
                                                    </div>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <v-flex md4>
                                                    <div class="team-box team-box--right">
                                                        <h3>{{game.opponent.name}}</h3>
                                                        <img src="../assets/opponent-logo.png" alt="Logotype">
                                                    </div>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row mt-4">
                                                <v-flex md4>
                                                    {{game.mosir.points}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Punkty</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.points}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.dReb + game.mosir.ofReb}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Zbiórki</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.dReb + game.opponent.ofReb}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.assist}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Asysty</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.assist}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.turnovers}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Straty</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.turnovers}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.fouls}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Faule</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.fouls}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.twoM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Trafione za 2</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.twoM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.twoA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Oddane za 2</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.twoA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.twoP}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% skuteczności</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.twoP}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.threeM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Trafione za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.threeM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.threeA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Oddane za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.threeA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.threeP}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.threeP}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.oneM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Trafione za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.oneM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.oneA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Oddane za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.oneA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.oneP}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.oneP}}
                                                </v-flex>
                                            </v-layout>
                                        </template>

                                        <template v-else>
                                            <v-layout>
                                                <v-flex md4>
                                                    <div class="team-box team-box--left">
                                                        <h3>{{game.opponent.name}}</h3>
                                                        <img src="../assets/opponent-logo.png" alt="Logotype">
                                                    </div>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <v-flex md4>
                                                    <div class="team-box team-box--right">
                                                        <img src="../assets/mosir-logo.png" alt="Logotype">
                                                        <h3>Contimax Mosir Bochnia</h3>
                                                    </div>
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row mt-4">
                                                <v-flex md4>
                                                    {{game.opponent.points}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Punkty</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.points}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.dReb + game.opponent.ofReb}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Zbiórki</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.dReb + game.mosir.ofReb}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.assist}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Asysty</p>
                                                </v-flex>

                                                <v-flex md4>
                                                    {{game.mosir.assist}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.turnovers}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Straty</p>
                                                </v-flex>

                                                <v-flex md4>
                                                    {{game.mosir.turnovers}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.fouls}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Faule</p>
                                                </v-flex>

                                                <v-flex md4>
                                                    {{game.mosir.fouls}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.twoM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Trafione za 2</p>
                                                </v-flex>

                                                <v-flex md4>
                                                    {{game.mosir.twoM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.twoA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Odddane za 2</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.twoA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.twoP}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% za 2</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.twoP}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.threeM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Trafione za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.threeM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.threeA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Oddane za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.threeA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.threeP}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.threeP}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.oneM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Trafione za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.oneM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.oneA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Oddane za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.oneA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.oneP}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.oneP}}
                                                </v-flex>
                                            </v-layout>
                                        </template>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-data-table
                                            :headers="headers"
                                            :items="gameIdPlayerStats"
                                            :items-per-page="14"
                                            class="elevation-1"
                                    ></v-data-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>

                    </v-tabs>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        components: {},

        data: function () {
            return {
                id: this.$route.params.id,
            };
        },
        computed: {
            headers(){
                return this.$store.state.tableHedaers
            },
            games() {
                return this.$store.getters.games
            },
            gameId: function () {
                var vm = this;
                var id = vm.id;

                return vm.games.filter(function (game) {
                    return game.mosir.id == id
                })
            },
            gameIdPlayerStats: function(){
                var vm = this;

                return vm.gameId[0].mosir.players.map((playerStats , i) =>{
                    return{
                        stats: playerStats,
                        playerDetails: this.players[i]
                    }
                })
            },
            players() {
                return this.$store.state.players
            },
        }
    };
</script>
