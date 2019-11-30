import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage'
import addStatsMosir from '../components/addStatsMosir'
import addStatsAway from '../components/addStatsAway'
import Games from '../components/Games'
import Game from '../components/Game'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/games',
        name: 'Spotakania',
        component: Games
    },
    {
        path:'/game/:id',
        name: 'Pojedyncze spotakanie',
        component: Game
    },
    {
        path: '/add-mosir',
        name: 'Dodaj Mosir',
        component: addStatsMosir
    },
    {
        path: '/add-opp',
        name: 'Dodaj przeciwnik',
        component: addStatsAway
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
