<template>

    <div class="">

        <v-list
            class="pt-0"
        >
        <div
            v-for="task in todo_items"
            :key="task.id"
        >
            <v-list-item
                :class="{ 'blue lighten-4' : task.isDone }"
                @click="task.isDone = !task.isDone"
            >
                <template>
                    <v-list-item-action>
                    <v-checkbox
                        :input-value="task.isDone"
                        color="primary"
                    ></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title
                        :class="{ 'text-decoration-line-through' : task.isDone }"
                    >
                        {{ task.title }}
                    </v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item-action>
                    <v-btn
                        @click.stop="editTask(task.id)" 
                        icon
                    >
                        <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                    </v-btn>
                </v-list-item-action>
                
            </v-list-item>

            <v-divider></v-divider>

        </div>
        </v-list>
        
    </div>
    
</template>

<script>
export default {
    name: 'Todo',
    data() {
        return {
            todo_items: [
                { id: 1, title: 'wake up', isDone: false },
                { id: 2, title: 'peel bananas', isDone: false },
                { id: 3, title: 'eat bananas', isDone: false },
                { id: 4, title: 'poo bananas', isDone: false },
            ]
        }
    },
    methods: {
        editTask(taskId) {
            let task = this.todo_items.filter(f => f.id === taskId)[0]
            console.log(task)
        }
    },
}
</script>