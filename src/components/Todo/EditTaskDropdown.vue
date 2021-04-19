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
                @click.stop="toggleDeletedModal()"
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
        <!--
        <EditTitleModal
            :openModal="showEditModal"
            :item="task"
            :action="'updateTaskTitle'"
            @close-modal="toggleModal(showEditModal)"
        />
        -->

        <DeleteConfirmationModal
            :openModal="showDeletedModal"
            :itemId="task.id"
            :itemType="'task'"
            :action="'deleteTask'"
            @close-modal="toggleDeletedModal()"
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
            showDeletedModal: false,
            showEditModal: false,
        }
    },
    props: {
        task: {
            type: Object
        },
    },
    methods: {
        cancel() {},
        toggleDeletedModal() {
            this.showDeletedModal = !this.showDeletedModal
        },
    },
}
</script>