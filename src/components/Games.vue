<template>
    <div class="games">
        <v-container>
            <v-layout wrap>
                <v-flex xs12 lg8 offset-lg2>
                    <h2>Lista spotkań</h2>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs12 lg8 offset-lg2>
                    <v-radio-group v-model="selectMatch" row>
                        <v-radio color="light-blue lighten-2" id="all" label="Wszystkie mecze" value="all"></v-radio>
                        <v-radio color="light-blue lighten-2" id="home" label="Mecze domowe" value="homeGame"></v-radio>
                        <v-radio color="light-blue lighten-2" id="away" label="Mecze wyjazdowe" value="awayGame"></v-radio>
                    </v-radio-group>
                </v-flex>
            </v-layout>
            <gameList/>
        </v-container>
    </div>
</template>

<script>
    import gameList from '../components/gameList'

    export default {
        components: {
            gameList
        },

        data: () => ({}),
        computed: {
            selectMatch: {
                get() {
                    return this.$store.state.matchType
                },
                set(value) {
                   this.$store.commit('SET_MATCH_TYPE', value)
                }
            }
        }
    };
</script>
