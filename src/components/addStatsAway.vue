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
                        <v-select
                                :items="teams"
                                filled
                                label="Wybierz przeciwnika"
                                v-model="name"
                        ></v-select>
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
                                <th></th>
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
                            <tr>
                                <td colspan="2"></td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats(1)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span @click="addStat(1)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('at1')"  class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span @click="addStat('at1')" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats(2)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span @click="addStat(2)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('at2')" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span @click="addStat('at2')" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats(3)" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span @click="addStat(3)" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('at3')" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span @click="addStat('at3')" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('assist')" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span @click="addStat('assist')" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('fouls')" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span @click="addStat('fouls')" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('turnovers')" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span @click="addStat('turnovers')" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span @click="removeStats('dRebs')" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span @click="addStat('dRebs')" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                                <td class="stats-cell">
                                        <span class="stats">
                                            <span  @click="removeStats('oRebs')" class="stats__remove">
                                                <v-icon color="error" medium>mdi-minus-circle</v-icon>
                                            </span>
                                            <span  @click="addStat('oRebs')" class="stats__add">
                                                <v-icon color="light-blue lighten-2" medium>mdi-plus-circle</v-icon>
                                            </span>
                                        </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center font-weight-bold">Total:</td>
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
                        {{name}}
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        components: {
        },

        data: () => ({
            name : '',
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
        }),
        computed:{
            teams(){
                return this.$store.state.teams
            }
        },
        methods:{
            addStat: function (prop) {
                if(prop === 1){
                    this.points += prop,
                        this.oneM++,
                        this.oneA++

                }
                else if( prop === 2){
                    this.points += prop,
                        this.twoM++,
                        this.twoA++
                }
                else if( prop === 3){
                    this.points += prop,
                        this.threeM++,
                        this.threeA++
                }
                else if (prop === 'at1'){
                    this.oneA++
                }
                else if (prop === 'at2'){
                    this.twoA++
                }
                else if (prop === 'at3'){
                    this.threeA++
                }
                else if (prop === 'assist'){
                    this.assist++
                }
                else if (prop === 'fouls'){
                    this.fouls++
                }
                else if (prop === 'turnovers'){
                    this.turnovers++
                }
                else if (prop === 'dRebs'){
                    this.dReb++
                }
                else if (prop === 'oRebs'){
                    this.ofReb++
                }

            },
            removeStats: function (prop) {
                if(prop === 1){
                    this.points -= prop,
                        this.oneM--,
                        this.oneA--
                }
                else if( prop === 2){
                    this.points -= prop,
                        this.twoM--,
                        this.twoA--
                }
                else if( prop === 3){
                    this.points -= prop,
                        this.threeM--,
                        this.threeA--
                }
                else if (prop === 'at1'){
                    if(this.oneA > this.oneM){
                        this.oneA--
                    }

                }
                else if (prop === 'at2'){
                    this.twoA--
                }
                else if (prop === 'at3'){
                    this.threeA--
                }
                else if (prop === 'assist'){
                    this.assist--
                }
                else if (prop === 'fouls'){
                    this.fouls--
                }
                else if (prop === 'turnovers'){
                    this.turnovers--
                }
                else if (prop === 'dRebs'){
                    this.dReb--
                }
                else if (prop === 'oRebs'){
                    this.ofReb--
                }


            },
            onCreateMatch:function () {
                const oppGamaData = {
                    name:this.name,
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
                }
                this.$store.dispatch('CREATE_MATCH_OPP', oppGamaData)
            },

        }
    };
</script>
