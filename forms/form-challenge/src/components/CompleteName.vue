<template>
    <div>
        <Label name="Name">
            <input type="text" @input="changeName"
                :value="value.name">
        </Label>
        <Label name="LastName">
            <input type="text" @input="changeLastName"
                :value="value.lastName">
        </Label>
    </div>
</template>

<script>
import Label from './Label.vue'

export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    components: { Label },
    methods: {
        changeName(event) {
            this.$emit('input', {
                name: event.target.value,
                lastName: this.value.lastName
            })
        },
        changeLastName(event) {
            this.$emit('input', {
                name: this.value.name,
                lastName: event.target.value
            })
        }
    }
}
</script>

<style>

</style>
