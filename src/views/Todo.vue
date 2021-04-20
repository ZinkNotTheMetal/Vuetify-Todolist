<template>

    <div class="">

        <v-text-field
            class="pa-3"
            v-model="newTaskTitle"
            clearable
            hide-details
            outlined
            label="Add a Task"
            append-icon="mdi-plus"
            @click:append="addTask"
            @keyup.enter="addTask"
        >
        </v-text-field>

        <v-list
            class="pt-0"
        >
            <div
                v-for="task in $store.state.todoItems"
                :key="task.id"
            >
                <TodoItem :task="task" />

                <v-divider></v-divider>

            </div>

            <div v-if="$store.state.todoItems.length === 0">
                <div class="text-center">
                        <v-icon right size="175" color="green lighten-3">mdi-check</v-icon>
                    <div>
                        <span class="font-weight-thin">All tasks are completed!</span>
                    </div>
                </div>
            </div>
        </v-list>
        
    </div>
    
</template>

<script>
import TodoItem from '@/components/Todo/Item'
import DeleteConfirmation from '@/components/Modal/DeleteConfirmation'

export default {
    name: 'Todo',
    components: {
        TodoItem,
        DeleteConfirmation
    },
    data() {
        return {
            showEditMenu: false,
            newTaskTitle: ''
        }
    },
    methods: {
        async addTask() {
            await this.$store.dispatch('addTask', this.newTaskTitle)
            this.newTaskTitle = ''
        },
        async setTasksFromDb() {
            await this.$store.dispatch('setAllTasks')
        }
    },
    mounted () {
        this.setTasksFromDb();
    },
}
</script>