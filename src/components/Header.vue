<template>
    <header>
        <v-navigation-drawer absolute temporary v-model="openSideNav">
            <v-list>
                <v-list-item
                        v-for="menuItem in menuItems"
                        v-bind:key="menuItem.title"
                        router
                        v-bind:to="menuItem.link"
                >
                    <v-list-item-icon>
                        <v-icon left>
                            {{menuItem.icon}}
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        {{menuItem.title}}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark class="light-blue lighten-2">
            <v-app-bar-nav-icon class="hidden-md-and-up" v-on:click="openSideNav = !openSideNav"></v-app-bar-nav-icon>
            <img src="../assets/mosir-logo.png" alt="">
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">MOSIR Stats</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">

                <v-btn
                        text
                        v-for="menuItem in menuItems"
                        v-bind:key="menuItem.title"
                        router
                        v-bind:to="menuItem.link"
                >
                    <v-icon left dark>
                        {{menuItem.icon}}
                    </v-icon>
                    {{menuItem.title}}
                </v-btn>

            </v-toolbar-items>
        </v-toolbar>
    </header>
</template>

<script>
    export default {
        components: {
        },

        data: () => ({
            openSideNav: false,
            menuItems:[
                {icon: 'mdi-basketball', title:'Spotkania', link:'/games'},
                {icon: 'mdi-account-card-details-outline', title:'Dodaj mecz (MOSIR)', link:'/add-mosir'},
                {icon: 'mdi-account-card-details-outline', title:'Dodaj mecz (Opp Team)', link:'/add-opp'},
            ]
        }),
    };
</script>
<style lang="scss">
    header{
        img{
            max-width: 50px;
            display: block;
            margin-right: 15px;
        }
    }
</style>
