<template>
  <v-app id="inspire">
    
    <NavigationMenu :drawer="drawer" />

    <TitleBar v-model="drawer" />

    <v-main>
      {{ drawer }}

      <!--  -->
      <!-- How to inform Vuetify that there are multiple pages -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu'
import TitleBar from '@/components/TitleBar'

export default {
  data: () => ({ drawer: false }),
  components: {
    NavigationMenu,
    TitleBar
  },
}
</script>