<template>

    <div class="todo-container">

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
            v-if="$store.state.todoItems.length !== 0"
        >
            <Draggable v-model="$store.state.todoItems" :sort="$store.state.sorting">

            <div
                v-for="task in $store.state.todoItems"
                :key="task.id"
            >
                <TodoItem :task="task" />

                <v-divider></v-divider>

            </div>

            </Draggable>

        </v-list>

        <div v-if="$store.state.todoItems.length === 0">
            <div class="text-center">
                <v-icon right size="175" color="green lighten-3">mdi-check</v-icon>
                <div>
                    <span class="font-weight-thin">All tasks are completed!</span>
                </div>
            </div>
        </div>

        <div v-if="$store.state.sorting" class="text-center">
            <v-btn
                absolute
                left
                bottom
                color="primary"
                @click="toggleSort"
            >
                Done
            </v-btn>
      </div>

    </div>
    
</template>

<script>
import Draggable from 'vuedraggable'
import TodoItem from '@/components/Todo/Item'
import DeleteConfirmation from '@/components/Modal/DeleteConfirmation'

export default {
    name: 'Todo',
    components: {
        Draggable,
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
            if(this.newTaskTitle === '') return false;
            await this.$store.dispatch('addTask', this.newTaskTitle)
            this.newTaskTitle = ''
        },
        async setTasksFromDb() {
            await this.$store.dispatch('getTasksFromDataStore')
        },
        async toggleSort() {
            await this.$store.dispatch('toggleSort')
        }
    },
    mounted () {
        this.setTasksFromDb();
    },
    // From draggable documentation
    computed: {
        myList: {
            get() {
                return this.$store.state.todoItems
            },
            set(value) {
                this.$store.dispatch('setTasks', value)
            }
        }
    },
}
</script>