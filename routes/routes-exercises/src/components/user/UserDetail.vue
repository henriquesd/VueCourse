<template>
    <div class="user-detail">
        <h3>User Detail</h3>
        <p><strong>Code: </strong> {{ id }}</p>
        <!-- :to="`/user/${id}/edit`" -->
        <router-link tag="button" primary
            :to="{ name: 'editUser', params: { id },
                query: { complete: false, language: 'en' } }">
            <!-- :to="`/user/${$route.params.id}/edit`"> -->
            Edit
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    
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
}
</script>

<style>

</style>
