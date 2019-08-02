<template>
    <div class="user">
        <h2>Users</h2>
        <hr>
        <router-view />
        <button success @click="goHome">Back</button>
    </div>
</template>

<script>
export default {
    // props: ['id'],

    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $rout(to, from) {
    //         this.id = to.params.id
    //     }
    // },
    methods: {
        goHome() {
            //this.$router.push('/')
            // this.$router.push({ path: '/' })
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

<style>

</style>
