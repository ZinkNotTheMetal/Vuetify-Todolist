<template>

    <v-list-item
        :class="{ 'blue lighten-4' : task.isDone, 'red lighten-4': isPastDue, 'yellow lighten-4': isDueToday }"
        @click="flipTaskCompleted(task.id)"
    >
        <v-list-item-action>
            <template v-if="$store.state.sorting">
                <v-icon>mdi-menu</v-icon>
            </template>
            <template v-else>
                <v-checkbox
                    :input-value="task.isDone"
                    color="primary"
                >
                </v-checkbox>
            </template>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title
                :class="{ 'text-decoration-line-through' : task.isDone }"
            >
                {{ task.title }}
            </v-list-item-title>
        </v-list-item-content>

        <template v-if="!task.isDone && task.dueDate">
            <v-list-item-icon>
                <v-icon size="20">mdi-calendar</v-icon>
            </v-list-item-icon>
            <span class="body-2 font-weight-thin">{{ formattedDueDate }}</span>
        </template>
        <template v-else-if="task.isDone && task.dueDate">
            <v-list-item-icon>
                <v-icon size="20" color="green">mdi-check</v-icon>
            </v-list-item-icon>
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

            <EditTaskDropdown :task="task" />

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
    computed: {
        isPastDue() {
            if (this.task.dueDate === null || this.task.dueDate === undefined) return false;
            return this.$moment().isAfter(this.task.dueDate, 'day')
        },
        isDueToday() {
            if (this.task.dueDate === null || this.task.dueDate === undefined) return false;
            return this.$moment().isSame(this.task.dueDate, 'day')
        },
        formattedDueDate() {
            return this.$moment(this.task.dueDate).format('MMM Do')
        }
    },
    methods: {
        flipTaskCompleted(taskId) {
            this.$store.dispatch('flipTaskCompleted', taskId)
        }
    },
}
</script>