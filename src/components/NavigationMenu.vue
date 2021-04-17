<template>
    <v-navigation-drawer 
        app
        v-model="drawer"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Vuetify Todo
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Todo List', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Research', icon: 'mdi-feature-search', to: '/research' },
          { title: 'Shopping List', icon: 'mdi-cart', to: '/shopping-list' },
          { title: 'Next to Purchase', icon: 'mdi-credit-card', to: '/next-to-purchase' },
          { title: 'About', icon: 'mdi-help-box', to: '/about' },
        ],
        right: null,
      }
    },
    props: {
        drawer: {
            type: Boolean,
            default: false
        },
    },
  }
</script>