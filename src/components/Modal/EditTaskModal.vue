<template>

    <v-dialog
        transition="dialog-top-transition"
        max-width="500"
        v-model="openModal"
        @click:outside="$emit('close-modal')"
    >
        <v-card>
            <v-form 
                ref="form"
                v-model="isFormValid"
            >
                <v-container>
                    <v-row>
                        <v-col
                            cols="12"
                            md="4"
                        >
                            <v-text-field
                                v-model="newTaskTitle"
                                :rules="titleRules"
                                label="Title"
                                required
                                @keyup="$refs.form.validate()"
                            ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            md="4"
                        >                               
                            <v-text-field
                                v-model="task.dueDate"
                                label="Due Date"
                            ></v-text-field>
                        </v-col>

                    </v-row>

                    <v-row justify="end" class="px-1">

                        <v-btn
                            class="ma-2"
                            @click="$emit('close-modal')"
                        >
                            CANCEL
                        </v-btn>
                
                        <v-btn
                            class="ma-2"
                            :disabled="!isDirty || !isFormValid"
                            color="success"
                            @click="updateTask()"
                        >
                            Update
                        </v-btn>

                    </v-row>

                </v-container>

            </v-form>
        </v-card>
    </v-dialog>
  
</template>

<script>
export default {
    name: 'EditTaskModal',
    data() {
        return {
            oldTaskTitle: null,
            oldDueDate: null,
            newTaskTitle: this.task.title,
            newDueDate: this.task.dueDate,
            isFormValid: false,
            titleRules: [
                v => !!v || 'Title is required'
            ],
        }
    },
    props: {
        openModal: {
            type: Boolean,
            default: false
        },
        task: {
            type: Object,
            required: true
        }
    },
    computed: {
        isDirty() {
            return (this.oldTaskTitle !== this.newTaskTitle || this.oldDueDate !== this.newDueDate)
        }
    },
    methods: {
        updateTask() {
            this.$emit('close-modal')
        }
    },
}
</script>

<style>

</style>