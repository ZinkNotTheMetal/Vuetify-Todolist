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
          ></v-text-field>

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
        </v-list>
        
    </div>
    
</template>

<script>
import TodoItem from '@/components/Todo/Item'

export default {
    name: 'Todo',
    components: {
        TodoItem,
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