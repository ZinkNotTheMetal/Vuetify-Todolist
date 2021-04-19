<template>
  <div class="pa-4">
    <h2>About Vuetify Todo</h2>
    <div class="py-6">
      <table>
        <tr>
          <td>Verion:</td>
          <td>{{ version }}</td>
        </tr>
        <tr>
          <td>
            GitHub Link:
          </td>
          <td>
            <a href="https://github.com/ZinkNotTheMetal/Vuetify-Todolist" target="_blank">Vuetify-Todolist</a>
          </td>
        </tr>
        <tr>
          <td>
            By:
          </td>
          <td>William Zink</td>
        </tr>
      </table>
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