<template>
	<div id="app" class="container-fluid">
		<h1>Animations</h1>
		<hr>
		<b-button variant="primary" class="mb-4"
			@click="show = !show">Show Message</b-button>

		<!-- <transition name="fade" appear>
			<b-alert variant="info" show v-if="show">{{ msg }}</b-alert>
		</transition>

		<transition name="slide" type="transition" appear>
			<b-alert variant="info" show v-show="show">{{ msg }}</b-alert>
		</transition>

		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake">
			<b-alert variant="info" show v-show="show">{{ msg }}</b-alert>
		</transition> -->

		<!-- <hr>
		<b-select v-model="animationType" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="animationType" mode="out-in">
			<b-alert variant="info" show v-if="show" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>
		
		<hr>
		<button @click="show2 = !show2">Toggle</button>
		<transition
			:css="false"

			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div v-if="show2" class="box"></div>
		</transition>

		<hr>
		<div class="mb-4">
			<b-button variant="primary" class="mr-2"
				@click="selectedComponent = 'AlertInfo'">Info</b-button>
			<b-button variant="secondary"
				@click="selectedComponent = 'AlertWarning'">Warning</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="selectedComponent"></component>
		</transition> -->

		<hr>
		<b-button @click="addStudent" class="mb-4">Add Student</b-button>

		<transition-group name="slide" tag="div">
			<b-list-group v-for="(student, i) in students" :key="student">
				<b-list-group-item @click="removeStudent(i)">{{ student }}</b-list-group-item>
			</b-list-group>
		</transition-group>
	

	</div>
</template>

<script>
import AlertWarning from './AlertWarning.vue'
import AlertInfo from './AlertInfo.vue'

export default {
	components: { AlertWarning, AlertInfo },
	data() {
		return {
			students: ['Ana', 'Robert', 'John', 'Mark'],
			msg: 'An information message to the user!',
			show: false,
			show2: true,
			animationType: 'fade',
			baseWidth: 0,
			selectedComponent: 'AlertInfo'
		}
	},
	methods: {
		addStudent() {
			const s = Math.random().toString(36).substring(2)
			this.students.push(s)
		},
		removeStudent(index) {
			this.students.splice(index, 1)
		},
		animate(el, done, negative) {
			let round = 1
			const timer = setInterval(() => {
				const newWidth = this.baseWidth	+ 
					(negative ? -round * 10 : round * 10)
				el.style.width = `${newWidth}px`
				round++
				if(round > 30) {
					clearInterval(timer)
					done()
				}
			}, 20)
		},
		beforeEnter(el) {
			this.baseWidth = 0
			el.style.width = `${this.baseWidth}px`
		},
		// enter(el, done) {
		// 	console.log('enter')
		// 	done()
		// },
		enter(el, done) {
			this.animate(el, done, false)
		},
		afterEnter(el) {
			console.log('afterEnter')
		},
		enterCancelled() {
			console.log('enterCancelled')
		},
		beforeLeave(el) {
			this.baseWidth = 300
			el.style.width = `${this.baseWidth}px`
		},
		leave(el, done) {
			this.animate(el, done, true)
		},
		afterLeave(el) {
			console.log('afterLeave')
		},
		leaveCancelled() {
			console.log('leaveCancelled')
		},
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
	font-size: 1.5rem;
}

.box {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

/* The default is 1 */
/* .fade-enter-to {
	opacity: 1;
}

.fade-leave {
	opacity: 1;
} */

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}

</style>
