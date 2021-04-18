<template class="text-center">

    <v-snackbar
      v-model="$store.state.openSnackBar"
      color="blue-grey"
      rounded="pill"
      class="text-center"
    >
        {{ $store.state.snackBarText }}
      
        <template v-slot:action="{ attrs }">
            <v-btn
            color="yellow"
            text
            v-bind="attrs"
            @click="$store.commit('closeSnackBar')"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
    
</template>

<script>
export default {
    name: 'SnackBar'
}
</script>