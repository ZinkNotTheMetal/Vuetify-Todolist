<template>

    <v-app-bar
      app
      absolute
      color="primary"
      dark
      prominent
      src="sky.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon 
        @click="$store.commit('flipDrawer')"
      ></v-app-bar-nav-icon>

      <v-app-bar-title>My Lists</v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

</template>

<script>
export default {
    name: 'TitleBar'
}
</script>