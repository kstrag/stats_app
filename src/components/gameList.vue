<template>
    <v-layout wrap>
            <v-flex xs12 lg8 offset-lg2>
                <v-card
                        v-for="(game, index) in filteredGames"
                        :key="index"
                        :to="'/game/'+ game.mosir.id"
                        class="mb-custom"
                >
                    <v-card-text>
                        <v-container>
                            <template v-if="game.mosir.category == 'homeGame'">
                                <v-layout>
                                    <v-flex md4>
                                        <div class="team-box team-box--left">
                                            <img src="../assets/mosir-logo.png" alt="Logotype">
                                            <h3>Contimax Mosir Bochnia</h3>
                                        </div>
                                    </v-flex>
                                    <v-flex md4 class="score">
                                        <div class="score__box">
                                            <span class="score__points">{{game.mosir.points}}</span>
                                            <span>-</span>
                                            <span class="score__points">{{game.opponent.points}}</span>
                                        </div>
                                    </v-flex>
                                    <v-flex md4>
                                        <div class="team-box team-box--right">
                                            <h3>{{game.opponent.name}}</h3>
                                            <img src="../assets/opponent-logo.png" alt="Logotype">
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </template>

                            <template v-else>
                                <v-layout>
                                    <v-flex md4>
                                        <div class="team-box team-box--left">
                                            <img src="../assets/opponent-logo.png" alt="Logotype">
                                            <h3>{{game.opponent.name}}</h3>
                                        </div>
                                    </v-flex>
                                    <v-flex md4 class="score">
                                        <div class="score__box">
                                            <span class="score__points">{{game.opponent.points}}</span>
                                            <span>-</span>
                                            <span class="score__points">{{game.mosir.points}}</span>
                                        </div>
                                    </v-flex>

                                    <v-flex md4>
                                        <div class="team-box team-box--right">
                                            <h3>Contimax Mosir Bochnia</h3>
                                            <img src="../assets/mosir-logo.png" alt="Logotype">
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
</template>

<script>
    export default {
        components: {},
        data: () => ({}),
        computed:{
            games () {
                return this.$store.getters.games
            },
            filteredGames: function () {
                var vm = this;
                var category = vm.$store.state.matchType;

                if(category === "all"){
                    return vm.games
                }else{
                    return vm.games.filter(function(game) {
                        return game.mosir.category === category
                    })
                }
            }
        }
    };
</script>
<style lang="scss">
    .team-box {
        display: flex;
        align-items: center;
        @media screen and (max-width: 959px) {
            flex-wrap: wrap;
        }
        img {
            width: 100px;
        }
        &--left {
            justify-content: flex-start;
            h3 {
                @media screen and (max-width: 959px) {
                    order: 2;
                    width: 100%;
                }
            }
            img {
                @media screen and (max-width: 959px) {
                    order: 1;
                }

            }
        }
        &--right {
            justify-content: flex-end;
            @media screen and (max-width: 959px) {
                justify-content: flex-start;
            }
            h3 {
                @media screen and (max-width: 959px) {
                    order: 2;
                    width: 100%;
                }
            }
            img {
                @media screen and (max-width: 959px) {
                    order: 1;
                }

            }
        }
        h3 {
            margin: 0 10px;
        }
    }

    .score {
        align-self: center;
        &__box {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        span {
            font-size: 36px;
            margin: 0 10px;
        }
        &__points {
            font-size: 40px;
        }

    }

    .mb-custom {
        margin: 0 0 20px;
    }

</style>
