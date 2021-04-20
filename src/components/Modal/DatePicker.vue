<template>
    

    <v-dialog
        transition="dialog-top-transition"
        max-width="500"
        @click:outside="$emit('close-modal')"
        v-model="openModal"
    >
        <v-date-picker
            v-model="dateSelected"
            @change="dateChanged()"
        >
        </v-date-picker>

    </v-dialog>

</template>

<script>
export default {
    name: 'DatePickerModal',
    props: {
        openModal: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            dateSelected: new Date().toISOString().substr(0, 10),
        }
    },
    methods: {
        dateChanged() {
            this.$emit('date-changed', this.dateSelected)
        }
    },
}
</script>

<style>
</style>