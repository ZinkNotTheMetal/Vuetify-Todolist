<template ref="modal">

    <v-dialog
        transition="dialog-top-transition"
        max-width="500"
        v-model="show"
    >
        <v-card>
            <slot name="modal-header"></slot>
        
            <slot name="modal-text"></slot>

            <slot name="modal-actions"
                  :closeHandler="closeHandler"></slot>
            
        </v-card>

    </v-dialog>

    
</template>

<script>
export default {
    name: 'ModalTemplate',
    data() {
        return {
            show: true
        }
    },
    methods: {
        closeHandler: function() {
            this.show = false
        },
        openModal: function() {
            this.show = true
        }
    },
}
</script>