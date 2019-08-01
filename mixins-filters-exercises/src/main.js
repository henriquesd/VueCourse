import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('reverse', function(value) {
	return value.split('').reverse().join('')
})

Vue.mixin({
	data() {
		return {
			global: 'Im in global Mixin!'
		}
	},
	created() {
		console.log('Created - Mixin Global!')
	}
})

new Vue({
	render: h => h(App),
	created() {
		console.log('Created - Vue Instance!')
	}
}).$mount('#app')
