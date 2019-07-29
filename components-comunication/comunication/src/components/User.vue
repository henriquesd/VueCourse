<template>
    <div class="container">
        <h1>User Component</h1>
        <p>This is a very nice component!</p>
        <p>Name is <strong>{{ name }}</strong></p>
        <p>Age is <strong>{{ age }}</strong></p>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="components">
            <app-user-info
                :name="name"
                :age="age"
                @nameChanged="name = $event"
                :resetFn="resetName"/>
             <app-user-edit 
                :age="age" />
            <!-- <app-user-edit 
                :age="age"
                @ageChanged="age = $event"/> -->
        </div>
    </div>
</template>

<script>
import AppUserInfo from './UserInfo'
import AppUserEdit from './UserEdit'

export default {
    components: { AppUserInfo, AppUserEdit },
    data() {
        return {
            name: 'Henrique',
            age: 27
        }
    },
    methods: {
        changeName() {
            this.name = 'Ana'
        },
        resetName() {
            this.name = 'Henrique'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .components {
        display: flex;
    }

    .components > * {
        margin: 10px;
    }
</style>
