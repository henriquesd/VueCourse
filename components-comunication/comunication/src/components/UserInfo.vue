<template>
    <div class="component">
        <h2>User info</h2>
        <p>Details...</p>
        <p>User Name: <strong>{{ invertName() }}</strong></p>
    </div>
</template>

<script>
export default {
    props: {
        // name: [String, Array]
        // name: String
        name: {
            type: String,
            // required: true
            // default: function() {
            //     return Array(10).fill(0).join(',')
            // }
            default: "Anonymous"
        }
    },
    methods: {
        invertName() {
            return this.name.split('').reverse().join('')
        }
    }
}
</script>

<style scoped>
    .component {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
