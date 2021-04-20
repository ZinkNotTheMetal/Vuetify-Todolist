<template>

    <v-dialog
        transition="dialog-top-transition"
        max-width="500"
        v-model="openModal"
        @click:outside="$emit('close-modal')"
    >
        <v-card>
            <v-toolbar
                color="red"
                dark
            >
                Remove {{ itemType }}?
            </v-toolbar>

            <v-card-text>
                <div class="px-1 py-4">
                    <span>Are you sure you want to remove this {{ itemType }}?</span>
                </div>
                
            </v-card-text>


            <v-card-actions class="justify-end">
                <v-btn
                    text
                    color="black"
                    @click="$emit('close-modal')"
                >
                    CANCEL
                </v-btn>
                
                <v-btn
                    text
                    color="red"
                    @click="deleteSelectedItem()"
                >
                    DELETE
                </v-btn>
            </v-card-actions>
    
        </v-card>

    </v-dialog>

</template>

<script>
export default {
    name: 'DeleteConfirmationModal',
    props: {
        itemId: {
            type: Number
        },
        itemType: {
            type: String,
            required: true,
            default: 'item'
        },
        openModal: {
            type: Boolean,
            required: true,
            default: false
        },
        action: {
            type: String,
            required: true
        }
    },
    methods: {
        async deleteSelectedItem() {
            await this.$store.dispatch(this.action, this.itemId)
            this.$emit('close-modal')
        }
    },
}
</script>

<style>
</style>