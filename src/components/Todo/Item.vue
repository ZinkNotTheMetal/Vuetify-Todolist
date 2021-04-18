<template>

    <v-list-item
        :class="{ 'blue lighten-4' : task.isDone }"
        @click="flipTaskCompleted(task.id)"
    >
        <template>
            <v-list-item-action>
                <v-checkbox
                    :input-value="task.isDone"
                    color="primary"
                >
                </v-checkbox>
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

</template>


<script>
import EditTaskDropdown from '@/components/Todo/EditTaskDropdown'

export default {
    name: 'Item',
    components: {
        EditTaskDropdown,
    },
    props: {
        task: {
            type: Object,
        },
    },
    methods: {
        flipTaskCompleted(taskId) {
            this.$store.dispatch('flipTaskCompleted', taskId)
        }
    },
}
</script>