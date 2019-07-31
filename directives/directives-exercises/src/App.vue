<template>
	<div id="app">
		<h1>Directives</h1>
		<hr>
		<p v-text="'Using v-text directive'"></p>
		<p v-html="'Using <strong>v-html</strong> directive'"></p>
		<hr>
		<p v-highlight:background.delay="'lightblue'">Using custom directive</p>
		<p v-highlight.delay="color">Using custom directive</p>

		<hr>
		<p v-highlight-local:background.delay.toggle="{color1: 'green', color2: 'red', delay: 2000, interval: 200}">Using custom directive</p>
		<p v-highlight-local.delay="{color1: 'red', delay: 5000}">Using custom directive</p>

		<!-- <p v-name:argument.mod1.mod2.mod3="'value'"> -->
	</div>
</template>

<script>
export default {
	components: { },
	directives: {
		'highlight-local': {
			bind(el, binding, vnode) {
				// el.style.backgroundColor = 'lightgreen'

				const applyColor = color => {
					if(binding.arg === 'background') {
						el.style.backgroundColor = color
					} else {
						el.style.color = color
					}
				}
				
				let delay = 0
				if(binding.modifiers['delay']) delay = binding.value.delay

				const color1 = binding.value.color1
				const color2 = binding.value.color2
				let actualColor = color1

				setTimeout(() => {
					setInterval(() => {
						if(binding.modifiers['toggle']) {
							actualColor = actualColor === color1 ? color2 : color1
							applyColor(actualColor)
						}
					}, binding.value.interval)
					applyColor(binding.value.color1)
				}, delay)
			}
		}
	},
	data() {
		return {
			color: 'red'
		}
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
</style>
