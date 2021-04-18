<template>

    <div class="pa-6">
        
        <v-list
            subheader
            two-line
            flat
        >

            <v-list-item-group
                v-model="settings"
                multiple
            >
                
                <v-list-item
                    v-for="item in todo_items"
                    :key="item.id"
                >
                <template>
                    <v-list-item-action>
                    <v-checkbox
                        :input-value="item.isDone"
                        color="primary"
                    ></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </template>
                </v-list-item>

            </v-list-item-group>
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
}
</script>