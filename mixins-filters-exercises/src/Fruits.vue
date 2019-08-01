<template>
    <div>
        <h1>{{ global }}</h1>
        <ul>
            <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
        </ul>
        <input type="text" v-model="fruit" @keydown.enter="add">
    </div>
</template>

<script>
import fruitsMixin from './fruitsMixin'
import userMixin from './userMixin'

export default {
    // data() {
    //     return {
    //         fruit: '',
    //         fruits: ['banana', 'apple', 'orange']
    //     }
    // },
    // methods: {
    //     add() {
    //         this.fruits.push(this.fruit)
    //         this.fruit = ''
    //     }
    // }
    mixins: [fruitsMixin, userMixin],
    created() {
        console.log('Created - Fruits.vue!')
    }
}
</script>

<style>

</style>
