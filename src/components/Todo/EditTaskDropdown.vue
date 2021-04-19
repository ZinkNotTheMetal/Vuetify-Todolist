<template>

    <div>

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
                @click="selectedDelete = true"
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

        <DeleteConfirmationModal
            :openModal="true "
            :taskId="taskId">
        </DeleteConfirmationModal>

    </div>

</template>

<script>
import DeleteConfirmationModal from '@/components/Modal/DeleteConfirmation'

export default {
    name: 'EditTaskDropdown',
    components: {
        DeleteConfirmationModal,
    },
    data() {
        return {
            selectedDelete: false
        }
    },
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