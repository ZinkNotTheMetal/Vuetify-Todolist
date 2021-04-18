<template>
  <div class="pa-4">
    <h2>About Vuetify Todo</h2>
    <div class="py-6">
      <span>Version: {{ version }}</span>
    </div>
  </div>
</template>

<script>
import { version } from '/package.json'

export default {
  name: 'About',
  data() {
    return {
      version: version
    }
  },
}
</script>