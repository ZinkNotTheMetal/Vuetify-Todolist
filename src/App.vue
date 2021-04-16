<template>
  <v-app>
    <TitleBar />

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import TitleBar from '@/components/TitleBar'

export default {
  name: 'App',

  components: {
    HelloWorld,
    TitleBar
  },

  data: () => ({
    //
  }),
};
</script>
