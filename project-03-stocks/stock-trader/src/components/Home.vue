<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Trade and See Your Stocks</h1>
        <v-sheet :elevation="6" class="pa-2 blue primary">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">
                You can Salve & Load Data</span>
        </v-sheet>
         <v-sheet :elevation="6" class="pa-2 blue success darken-1 mt-3">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">
                Click in 'End Day' to start a new day!</span>
        </v-sheet>
        <v-divider class="my-4" />
        <p class="display-1"><strong>Your Balance:</strong> {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style>

</style>
