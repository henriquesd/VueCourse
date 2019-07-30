<template>
	<div id="app">
		<h1>Register Complaint</h1>
		<div class="content">
			<div class="panel" v-if="!sended">
				<div class="header">Form</div>
				<Label name="Email">
					<input type="text" v-model.lazy.trim="user.email">
				</Label>
				<Label name="Password">
					<input type="password" v-model="user.password">
				</Label>
				<Label name="Age">
					<input type="number" v-model.number="user.age">
				</Label>
				<Label name="Message">
					<textarea name="" cols="30" rows="5" v-model="message"></textarea>
				</Label>
				<Label name="Problem Characteristics">
					<span class="mr-4"><input type="checkbox" v-model="characteristics"
						value="reproducible"> Reproducible</span>
					<span><input type="checkbox" v-model="characteristics"
						value="intermittent"> intermittent</span>
				</Label>
				<Label name="Which product?">
					<span class="mr-4"><input type="radio" value="web" v-model="product"> Web</span>
					<span class="mr-4"><input type="radio" value="mobile" v-model="product"> Mobile</span>
					<span><input type="radio" value="other" v-model="product"> Other</span>
				</Label>
				<Label name="Priority">
					<select v-model="priority">
						<option v-for="priority in priorities"
							:value="priority.code"
							:key="priority.code"
							:selected="priority.code === 3">
							{{ priority.code }} - {{ priority.name }} </option>
					</select>
				</Label>
				<Label name="First Complaint?">
					<!-- <input type="text" :value="temp"
						@input="temp = $event.target.value"> -->
					<Choice v-model="choice"/>
				</Label>
				<hr>
				<button @click.prevent="send">Send</button>
			</div>
			<div class="panel" v-else>
				<div class="header">Result</div>
				<Label name="Email">
					<span>{{ user.email }}</span>
				</Label>
				<Label name="Password">
					<span>{{ user.password }}</span>
				</Label>
				<Label name="Age">
					<span>{{ user.age }} {{ ageType }}</span>
				</Label>
				<Label name="Message">
					<span style="white-space: pre;">{{ message }}</span>
				</Label>
				<Label name="Problem Characteristics">
					<span>
						<ul>
							<li v-for="c in characteristics" :key="c">{{ c }}</li>
						</ul>
					</span>
				</Label>
				<Label name="Which product?">
					<span>{{ product }}</span>
				</Label>
				<Label name="Priority">
					<span> {{ priority }} {{ priorityType }}</span>
				</Label>
				<Label name="First Complaint?">
					<span>{{ choice }}</span>
				</Label>
				<!-- <Label name="Temp">
					<span> {{ temp }}</span>
				</Label> -->
			</div>
		</div>
	</div>
</template>

<script>
import Label from './components/Label.vue'
import Choice from './components/Choice.vue'

export default {
	name: 'app',
	components: { Label, Choice },
	computed: {
		ageType() {
			return typeof this.user.age
		},
		priorityType() {
			return typeof this.priority
		}
	},
	methods: {
		send() {
			this.sended = true
		}
	},
	data() {
		return {
			message: '',
			characteristics: [],
			product: 'web',
			priority: 1,
			priorities: [
				{ code: 1, name: 'Low' },
				{ code: 2, name: 'Moderate' },
				{ code: 3, name: 'High' },
			],
			user: {
				email: '',
				password: '',
				age: 25
			},
			// temp: 'test'
			choice: true,
			sended: false
		}
	},
	// created() {
	// 	setTimeout(() => {
	// 		this.email = ''
	// 	}, 5000)
	// }
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.content {
	display: flex;
}

.panel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.panel .header {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

.panel button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
