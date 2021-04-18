<template>

    <v-app-bar 
        app
    >
      <v-app-bar-nav-icon @click="invertDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify TODO List</v-toolbar-title>
    </v-app-bar>

</template>

<script>
export default {
    name: 'TitleBar',
    props: {
        drawer: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    methods: {
        invertDrawer() {
            this.drawer = !this.drawer
            this.$emit('input', this.drawer)      
        }
    },
}
</script>