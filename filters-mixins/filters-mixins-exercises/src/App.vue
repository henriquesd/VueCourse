<template>
	<div id="app">
		<h1>Filters & Mixins</h1>
		<hr>
		<p>{{ loggedUser }}</p>
		<p>{{ socialNumber | socialNumber | reverse }}</p>
		<p>{{ '00011122233' | socialNumber | reverse }}</p>
		<input type="text" :value="socialNumber | socialNumber | reverse">
		<hr>
		<Fruits />
		<hr>
		    <div>
        <ul>
            <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
        </ul>
        <input type="text" v-model="fruit" @keydown.enter="add">
    </div>
	</div>
</template>

<script>
import fruitsMixin from './fruitsMixin'
import userMixin from './userMixin'
import Fruits from './Fruits.vue'

export default {
	components: { Fruits },
	mixins: [fruitsMixin, userMixin],
	filters: {
		socialNumber(value) {
			const arr = value.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			socialNumber: '00011122233',
			// fruit: '',
			// fruits: ['banana', 'apple', 'orange']
			fruits: ['kiwi']
		}
	},
	//  methods: {
    //     add() {
    //         this.fruits.push(this.fruit)
    //         this.fruit = ''
    //     }
	// }
	created() {
        console.log('Created - App.vue!')
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
