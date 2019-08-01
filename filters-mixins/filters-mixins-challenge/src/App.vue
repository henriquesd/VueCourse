<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		
		<p> {{ phrase | comma-space }}</p>
		<p> {{ phrase | commaSpace }}</p>
		
		<p> {{ phrase | count-words }}</p>
		<p> {{ phrase | countWords }}</p>

		<p> {{ phraseWithCommas }}</p>
		<p> {{ phraseWithLength }}</p>


	</div>
</template>

<script>
import phrasesMixin from './phrasesMixin'

export default {
	mixins: [phrasesMixin],
	data() {
		return {
			phrase: 'This is the phrase that will be used in the challenges!'
		}
	},
	filters: {
		commaSpace(value) {
			//return value.replace(/ /g, ',')
			return value.replace(/\s/g, ',')
		}
	},
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
</style>
