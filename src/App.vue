<template>
  <v-app id="inspire">
    
    <NavigationMenu :drawer="drawer" />

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <!-- How to inform Vuetify that there are multiple pages -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu'

export default {
  data: () => ({ drawer: false }),
  components: {
    NavigationMenu
  },
}
</script>