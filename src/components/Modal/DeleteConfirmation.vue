<template>

    <ModalTemplate>

        <template v-slot:modal-header>
            <v-toolbar
                color="red"
                dark
            >
                Remove Task?
            </v-toolbar>
        </template>

        <template v-slot:modal-text>

            <v-card-text>
                <div class="px-1 py-4">
                    <span>Are you sure you want to remove this task?</span>
                </div>
                
            </v-card-text>
        </template>

        <template v-slot:modal-actions="{closeHandler}">

            <v-card-actions class="justify-end">
                <v-btn
                    text
                    color="black"
                    @click="closeHandler"
                >
                    CANCEL
                </v-btn>
                
                <v-btn
                    text
                    color="red"
                    @click="deleteSelectedTask()"
                >
                    DELETE
                </v-btn>
            </v-card-actions>

        </template>

    </ModalTemplate>

</template>

<script>
import ModalTemplate from '@/components/Modal/Template'

export default {
    name: 'DeleteConfirmationModal',
    components: {
        ModalTemplate,
    },
    props: {
        taskId: {
            type: Number
        },
        openModal: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    methods: {
        async deleteSelectedTask() {
            await this.$store.dispatch('deleteTask', this.taskId)
            this.$emit('closeHandler')
        }
    },
}
</script>

<style>
</style>