<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat to="/">Home</v-btn>
            <v-btn flat to="/portfolio">Portfolio</v-btn>
            <v-btn flat to="/stocks">Actions</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat>End Day</v-btn>
            <v-menu offset-y>
                <v-btn flat slot="activator">Save & Load</v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>Save Data</v-list-tile-title>
                    </v-list-tile>
                     <v-list-tile>
                        <v-list-tile-title>Load Data</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
        
    </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>
