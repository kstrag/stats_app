import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
      firebase.initializeApp({
          apiKey: 'AIzaSyDVSgEI8ioQOB4wQkAG5rtlzG9morSK1lg',
          authDomain: 'statsapp-3d60d.firebaseapp.com',
          databaseURL: 'https://statsapp-3d60d.firebaseio.com',
          projectId: 'statsapp-3d60d',
          storageBucket: 'statsapp-3d60d.appspot.com',
          messagingSenderId: '825491127016',
          appId: '1:825491127016:web:1bd646dda740660389275d',
          measurementId: 'G-8E09VSWZ99'
      })
  }
}).$mount('#app')



