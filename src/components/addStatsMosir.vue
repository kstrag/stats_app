<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <h2> Dodaj spotaknie Mosir</h2>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <v-layout wrap class="align-center">
                    <v-flex xs12 sm4>
                        <v-radio-group v-model="selectMatch" row>
                            <v-radio color="light-blue lighten-2" id="home" label="Mecz domowy"
                                     value="homeGame"></v-radio>
                            <v-radio color="light-blue lighten-2" id="away" label="Mecz wyjazdowy"
                                     value="awayGame"></v-radio>
                        </v-radio-group>
                    </v-flex>
                    <v-flex xs12 sm4>
                        <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="date"
                                        label="Wybierz date"
                                        prepend-icon="mdi-calendar-month"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                        </v-menu>
                    </v-flex>
                    <v-flex xs12 sm4 class="text-sm-right">
                        <v-btn @click="onCreateMatch" large color="error"> Zakończ spotkanie</v-btn>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-simple-table fixed-header>
                            <thead>
                                <tr>
                                    <th class="text-left">Numer</th>
                                    <th class="text-left">Nazwisko</th>
                                    <th class="text-left">Punkty</th>
                                    <th class="text-left">Trafione za 1</th>
                                    <th class="text-left">Oddane za 1</th>
                                    <th class="text-left">Trafione za 2</th>
                                    <th class="text-left">Oddane za 2</th>
                                    <th class="text-left">Trafione za 3</th>
                                    <th class="text-left">Oddane za 3</th>
                                    <th class="text-left">Asysty</th>
                                    <th class="text-left">Faule</th>
                                    <th class="text-left">Straty</th>
                                    <th class="text-left">Zb. of</th>
                                    <th class="text-left">Zb. def</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(player, index) in players" :key="index">
                                    <td>{{player.number}}</td>
                                    <td>{{player.name}}</td>
                                    <td>{{mPlayers[index].points}}</td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats(1,index)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].oneM}}</span>
                                            <span @click="addStat(1,index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('at1',index)"  class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].oneA}}</span>
                                            <span @click="addStat('at1',index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats(2,index)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].twoM}}</span>
                                            <span @click="addStat(2,index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('at2',index)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].twoA}}</span>
                                            <span @click="addStat('at2',index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats(3,index)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].threeM}}</span>
                                            <span @click="addStat(3,index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('at3',index)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].threeA}}</span>
                                            <span @click="addStat('at3',index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('assist', index)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].assist}}</span>
                                            <span @click="addStat('assist', index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('fouls', index)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].fouls}}</span>
                                            <span @click="addStat('fouls', index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('turnovers', index)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].turnovers}}</span>
                                            <span @click="addStat('turnovers', index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('dRebs', index)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].dReb}}</span>
                                            <span @click="addStat('dRebs', index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                    <td class="stats-cell">
                                        <span class="stats">
                                            <span  @click="removeStats('oRebs', index)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span class="stats__current">{{mPlayers[index].ofReb}}</span>
                                            <span  @click="addStat('oRebs', index)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                            <tr>
                                <td colspan="2" class="text-center font-weight-bold">Total:</td>
                                <td class="text-center">{{points}}</td>
                                <td class="text-center">{{oneM}}</td>
                                <td class="text-center">{{oneA}}</td>
                                <td class="text-center">{{twoM}}</td>
                                <td class="text-center">{{twoA}}</td>
                                <td class="text-center">{{threeM}}</td>
                                <td class="text-center">{{threeA}}</td>
                                <td class="text-center">{{assist}}</td>
                                <td class="text-center">{{fouls}}</td>
                                <td class="text-center">{{turnovers}}</td>
                                <td class="text-center">{{dReb}}</td>
                                <td class="text-center">{{ofReb}}</td>
                            </tr>
                            </tbody>
                        </v-simple-table>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        components: {},

        data: () => ({
            menu2: false,
            selectMatch: null,
            date: '',
            points: 0,
            oneM: 0,
            oneA: 0,
            twoM: 0,
            twoA: 0,
            threeM: 0,
            threeA: 0,
            assist: 0,
            fouls: 0,
            turnovers: 0,
            dReb: 0,
            ofReb: 0,
            mPlayers:[
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeP : 0,
                    threeA: 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
                  {   points:0,
                    oneM: 0,
                    oneA: 0,
                    oneP: 0,
                    twoM: 0,
                    twoA: 0,
                    twoP: 0,
                    threeM: 0,
                    threeA: 0,
                    threeP : 0,
                    assist: 0,
                    fouls: 0,
                    turnovers: 0,
                    dReb: 0,
                    ofReb: 0,
                },
            ]

        }),
        computed: {
            players() {
                return this.$store.state.players
            },
        },
        methods:{
            addStat: function (prop, id) {
                if(prop === 1){
                    this.points += prop,
                        this.mPlayers[id].points += prop,
                        this.oneM++,
                        this.oneA++,
                        this.mPlayers[id].oneM++,
                        this.mPlayers[id].oneA++
                    this.percentCount(prop,id)

                }
                else if( prop === 2){
                    this.points += prop,
                        this.mPlayers[id].points += prop,
                        this.twoM++,
                        this.twoA++,
                        this.mPlayers[id].twoM++,
                        this.mPlayers[id].twoA++
                    this.percentCount(prop,id)
                }
                else if( prop === 3){
                    this.points += prop,
                        this.mPlayers[id].points += prop,
                        this.threeM++,
                        this.threeA++,
                        this.mPlayers[id].threeM++,
                        this.mPlayers[id].threeA++
                    this.percentCount(prop,id)
                }
                else if (prop === 'at1'){
                    this.oneA++,
                        this.mPlayers[id].oneA++
                    this.percentCount(prop,id)
                }
                else if (prop === 'at2'){
                    this.twoA++,
                        this.mPlayers[id].twoA++
                    this.percentCount(prop,id)
                }
                else if (prop === 'at3'){
                    this.threeA++,
                        this.mPlayers[id].threeA++
                    this.percentCount(prop,id)
                }
                else if (prop === 'assist'){
                    this.assist++,
                        this.mPlayers[id].assist++
                }
                else if (prop === 'fouls'){
                    this.fouls++,
                        this.mPlayers[id].fouls++
                }
                else if (prop === 'turnovers'){
                    this.turnovers++,
                        this.mPlayers[id].turnovers++
                }
                else if (prop === 'dRebs'){
                    this.dReb++,
                        this.mPlayers[id].dReb++
                }
                else if (prop === 'oRebs'){
                    this.ofReb++,
                        this.mPlayers[id].ofReb++
                }

            },
            removeStats: function (prop, id) {
                if(prop === 1){
                    this.points -= prop,
                        this.mPlayers[id].points -= prop,
                        this.oneM--,
                        this.oneA--,
                        this.mPlayers[id].oneM--,
                        this.mPlayers[id].oneA--
                    this.percentCount(prop,id)
                }
                else if( prop === 2){
                    this.points -= prop,
                        this.mPlayers[id].points -= prop,
                        this.twoM--,
                        this.twoA--,
                        this.mPlayers[id].twoM--,
                        this.mPlayers[id].twoA--
                    this.percentCount(prop,id)
                }
                else if( prop === 3){
                    this.points -= prop,
                        this.mPlayers[id].points -= prop,
                        this.threeM--,
                        this.threeA--,
                        this.mPlayers[id].threeM--,
                        this.mPlayers[id].threeA--
                    this.percentCount(prop,id)
                }
                else if (prop === 'at1'){
                    if(this.oneA > this.oneM){
                        this.oneA--,
                        this.mPlayers[id].oneA--
                    }
                    this.percentCount(prop,id)

                }
                else if (prop === 'at2'){
                    this.twoA--,
                        this.mPlayers[id].twoA--
                    this.percentCount(prop,id)
                }
                else if (prop === 'at3'){
                    this.threeA--,
                        this.mPlayers[id].threeA--
                    this.percentCount(prop,id)
                }
                else if (prop === 'assist'){
                    this.assist--,
                        this.mPlayers[id].assist--
                }
                else if (prop === 'fouls'){
                    this.fouls--,
                        this.mPlayers[id].fouls--
                }
                else if (prop === 'turnovers'){
                    this.turnovers--,
                        this.mPlayers[id].turnovers--
                }
                else if (prop === 'dRebs'){
                    this.dReb--,
                        this.mPlayers[id].dReb--
                }
                else if (prop === 'oRebs'){
                    this.ofReb--,
                        this.mPlayers[id].ofReb--
                }


            },
            onCreateMatch:function () {
                const mosirGameData = {
                    selectMatch:this.selectMatch,
                    date:this.date,
                    points:this.points,
                    oneM:this.oneM,
                    oneA:this.oneA,
                    twoM:this.twoM,
                    twoA:this.twoA,
                    threeM:this.threeM,
                    threeA:this.threeA,
                    assist:this.assist,
                    fouls:this.fouls,
                    turnovers:this.turnovers,
                    dReb:this.dReb,
                    ofReb:this.ofReb,
                    mPlayers:this.mPlayers
                }
                this.$store.dispatch('CREATE_MATCH', mosirGameData)
                this.$router.push("games")
            },

            percentCount: function (prop, id) {
                if(prop === 1 || prop === 'at1') {
                    this.mPlayers[id].oneP = (this.mPlayers[id].oneM / this.mPlayers[id].oneA * 100).toFixed(1)
                }
                if(prop === 2 || prop === 'at2') {
                    this.mPlayers[id].twoP = (this.mPlayers[id].twoM / this.mPlayers[id].twoA *100).toFixed(1)
                }
                if(prop === 3 || prop === 'at3') {
                    this.mPlayers[id].threeP = (this.mPlayers[id].threeM / this.mPlayers[id].threeA *100).toFixed(1)

                }
            }

        },
    };
</script>
<style lang="scss">
    .stats{
        display: flex;
        align-items: center;
        &__current{
            font-size: 18px;
            margin: 0 8px;
        }
    }
    .v-data-table{
        td{
            &.stats-cell{
                min-width: 135px
            }
        }
    }
    @media screen and(max-width: 767px){
        .v-data-table--fixed-header{
            .v-data-table__wrapper{
                height: 400px;
            }
        }

    }
</style>
