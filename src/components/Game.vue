<template>
    <div class="signle-game">
        <v-container>
            <v-layout wrap>
                <v-flex xs12 lg8 offset-lg2>
                    <v-btn to="/games" text>
                        <v-icon left>mdi-chevron-left</v-icon>
                        Powrót do listy spotkań
                    </v-btn>
                    <h2>Spotkanie z dnia {{gameId[0].mosir.date}} sezon 19/20</h2>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-flex xs12 lg8 offset-lg2>
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
                                                    {{game.mosir.team.points}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Punkty</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.team.points}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{mRebs}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Zbiórki</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{oRebs}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.team.assist}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Asysty</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.team.assist}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{mFGM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Rzuty trafione</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{oFGM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{mFGA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Rzuty oddane</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{oFGA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{mFGPercent}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% skuteczności</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{oFGPercent}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.team.shots.threeM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Trafione za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.team.shots.threeM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.team.shots.threeA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Oddane za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.team.shots.threeA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{m3Percent}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{o3Percent}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.team.shots.oneM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Trafione za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.team.shots.oneM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.mosir.team.shots.oneA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Oddane za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.opponent.team.shots.oneA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{m1Percent}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{o1Percent}}
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
                                                    {{game.opponent.team.points}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Punkty</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.team.points}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{oRebs}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Zbiórki</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{mRebs}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.team.assist}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Asysty</p>
                                                </v-flex>

                                                <v-flex md4>
                                                    {{game.mosir.team.assist}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{oFGM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Rzuty trafione</p>
                                                </v-flex>

                                                <v-flex md4>
                                                    {{mFGM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{oFGA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Rzuty oddane</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{mFGA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{oFGPercent}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% skuteczności</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{mFGPercent}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.team.shots.threeM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Trafione za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.team.shots.threeM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.team.shots.threeA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Oddane za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.team.shots.threeA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{o3Percent}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% za 3</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{m3Percent}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.team.shots.oneM}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Trafione za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.team.shots.oneM}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{game.opponent.team.shots.oneA}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>Oddane za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{game.mosir.team.shots.oneA}}
                                                </v-flex>
                                            </v-layout>
                                            <v-layout class="text-center team-stat-row">
                                                <v-flex md4>
                                                    {{o1Percent}}
                                                </v-flex>
                                                <v-flex md4>
                                                    <p>% za 1</p>
                                                </v-flex>
                                                <v-flex md4>
                                                    {{m1Percent}}
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
                                            :items="playerStats"
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
                headers: [
                    {
                        text: 'Numer',
                        align: 'left',
                        value: 'players.number',
                    },
                    { text: 'Nazwisko', value: 'players.name', sortable: false },
                    { text: 'Punkty', value: 'playersStats.points' },
                    { text: 'Asysty', value: 'playersStats.assist' },
                    { text: 'Straty', value: 'playersStats.turnovers' },
                    { text: 'Faule', value: 'playersStats.fouls' },
                    { text: 'Trafione za 1', value: 'playersStats.shots.oneM' },
                    { text: 'Próby za 1', value: 'playersStats.shots.oneA' },
                ]
            };
        },
        computed: {
            playerStats(){
              return this.$store.getters.playerStats
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
            players() {
                return this.$store.state.players
            },
            //Zbiórki
            mRebs() {
                return this.$store.getters.mRebs
            },
            oRebs() {
                return this.$store.getters.oRebs
            },
            //Rzuty trafione
            mFGM() {
                return this.$store.getters.mFGM
            },

            oFGM() {
                return this.$store.getters.oFGM
            },
            //Rzuty oddane
            mFGA() {
                return this.$store.getters.mFGA
            },

            oFGA() {
                return this.$store.getters.oFGA
            },
            //Procent rzutów
            mFGPercent() {
                var vm = this;
                var percent = vm.mFGM / vm.mFGA * 100
                return percent.toFixed(1)
            },

            oFGPercent() {
                var vm = this;
                var percent = vm.oFGM / vm.oFGA * 100
                return percent.toFixed(1)
            },
            // Procent za 3
            m3Percent() {
                var vm = this;
                var percent3 = vm.gameId[0].mosir.team.shots.threeM / vm.gameId[0].mosir.team.shots.threeA * 100
                return percent3.toFixed(1)
            },
            o3Percent() {
                var vm = this;
                var percent3 = vm.gameId[0].opponent.team.shots.threeM / vm.gameId[0].opponent.team.shots.threeA * 100
                return percent3.toFixed(1)
            },
            // Procent za 1
            m1Percent() {
                var vm = this;
                var percent1 = vm.gameId[0].mosir.team.shots.oneM / vm.gameId[0].mosir.team.shots.oneA * 100
                return percent1.toFixed(1)
            },
            o1Percent() {
                var vm = this;
                var percent1 = vm.gameId[0].opponent.team.shots.oneM / vm.gameId[0].opponent.team.shots.oneA * 100
                return percent1.toFixed(1)
            }
        }
    };
</script>
