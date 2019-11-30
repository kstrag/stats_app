<template>
  <v-app>
    <v-content>
      <app-header/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
      'app-header':Header
  },

  data: () => ({
    //
  }),
};
</script>
