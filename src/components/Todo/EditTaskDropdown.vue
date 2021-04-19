<template>

    <div>

        <v-list>

            {{ showDeletedModal }}

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
                @click.stop="toggleModal"
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
            :openModal="showDeletedModal"
            :itemId="taskId"
            :itemType="'task'"
            :action="'deleteTask'"
            @close-modal="toggleModal"
        />

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
            showDeletedModal: false
        }
    },
    props: {
        taskId: {
            type: Number
        },
    },
    methods: {
        cancel() {},
        toggleModal() {
            this.showDeletedModal = !this.showDeletedModal
        },
    },
}
</script>