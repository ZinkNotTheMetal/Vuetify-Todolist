<template>
  <v-app id="inspire">
    
    <NavigationMenu />

    <TitleBar />

    <v-main>
      <!-- How to inform Vuetify that there are multiple pages -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu'
import TitleBar from '@/components/TitleBar'

export default {
  components: {
    NavigationMenu,
    TitleBar
  },
}
</script>