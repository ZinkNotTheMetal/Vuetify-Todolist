<template>

    <div>

        <v-list>

            <v-list-item
                @click="enableSorting()"
            >
                <v-list-item-icon>
                    <v-icon>mdi-reorder-horizontal</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Reorder</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item
                @click.stop="toggleEditModal()"
            >
                <v-list-item-icon>
                    <v-icon>mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Edit</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item
                @click.stop="toggleDueDateModal()"
            >
                <v-list-item-icon>
                    <v-icon>mdi-calendar</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Set Due Date</v-list-item-title>
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

        <DatePickerModal 
            :openModal="showDueDatePicker"
            @close-modal="toggleDueDateModal()"
            @date-changed="setDueDate"
        />

        <EditTaskModal
            :openModal="showEditModal"
            :task="task"
            :action="'updateTaskTitle'"
            @close-modal="toggleEditModal()"
        />

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
import DatePickerModal from '@/components/Modal/DatePicker'
import EditTaskModal from '@/components/Modal/EditTaskModal'
import DeleteConfirmationModal from '@/components/Modal/DeleteConfirmation'

export default {
    name: 'EditTaskDropdown',
    components: {
        DatePickerModal,
        EditTaskModal,
        DeleteConfirmationModal,
    },
    data() {
        return {
            showDeletedModal: false,
            showDueDatePicker: false,
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
        enableSorting() {
            this.$store.dispatch('toggleSort')
        },
        toggleDeletedModal() {
            this.showDeletedModal = !this.showDeletedModal
        },
        toggleDueDateModal() {
            this.showDueDatePicker = !this.showDueDatePicker
        },
        toggleEditModal() {
            this.showEditModal = !this.showEditModal
        },
        setDueDate(newDueDate) {
            this.$store.dispatch('updateTask', { id: this.task.id, title: this.task.title, dueDate: newDueDate })
            this.showDueDatePicker = false
        }
    },
}
</script>