<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      extended
      dark
      src="sky.jpg"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>TODO List</v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <NavigationMenu :drawer="drawer" />

    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu'

export default {
    name: 'TitleBar',
    components: {
        NavigationMenu,
    },
    data: () => ({
        drawer: false
    })
}
</script>