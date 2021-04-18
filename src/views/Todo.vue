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

                <v-menu
                    bottom
                    left
                    :offset-x="true"
                    :close-on-content-click="true"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            dark
                            icon
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon color="grey lighten-1">mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <EditTaskDropdown :taskId="task.id" />

                </v-menu>
                
            </v-list-item>

            <v-divider></v-divider>

        </div>
        </v-list>
        
    </div>
    
</template>

<script>
import EditTaskDropdown from '@/components/EditTaskDropdown'

export default {
    name: 'Todo',
    components: {
        EditTaskDropdown,
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
        }
    },
}
</script>