<template>
  <v-app id="vuetify-todolist">
    
    <NavigationMenu />

    <TitleBar />

    <v-main>
      <!-- How to inform Vuetify that there are multiple pages -->
      <router-view></router-view>

      <SnackBar />
    </v-main>
  </v-app>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu'
import TitleBar from '@/components/TitleBar'
import SnackBar from '@/components/SnackBar'

export default {
  components: {
    NavigationMenu,
    TitleBar,
    SnackBar
  },
}
</script>