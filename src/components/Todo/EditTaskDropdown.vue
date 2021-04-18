<template>

    <v-list>

        <v-list-item
            @click.stop=""
        >
            <v-list-item-icon>
                <v-icon>mdi-reorder-horizontal</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Reorder</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item
            @click.stop=""
        >
            <v-list-item-icon>
                <v-icon>mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item
            @click="deleteTask(taskId)"
        >
            <v-list-item-icon>
                <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Delete</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item
            @click="cancel()"
        >
            <v-list-item-icon>
                <v-icon>mdi-close</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Cancel</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

    </v-list>

</template>

<script>
export default {
    name: 'EditTaskDropdown',
    props: {
        taskId: {
            type: Number
        },
    },
    methods: {
        cancel() {},
        deleteTask(taskId) {
            this.$store.dispatch('deleteTask', taskId)
        }
    },
}
</script>