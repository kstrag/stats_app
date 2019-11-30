<template>
    <div class="last-matches">
        <v-container>
            <v-layout wrap>
                <v-flex xs12 lg8 offset-lg2>
                    <h2>Ostatnie spotkania</h2>
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
            gameList,
        },

        data: () => ({}),
    };
</script>
<style lang="scss">
    h2 {
        margin: 10px 0 20px;
    }
</style>
