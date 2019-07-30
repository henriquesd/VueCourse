<template>
	<div id="app">
		<h1>Register Complaint</h1>
		<div class="content">
			<form class="panel">
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
					<span class="mr-4"><input type="checkbox" value="reproducible"> Reproducible</span>
					<span><input type="checkbox" value="intermittent"> intermittent</span>
				</Label>
				<Label name="Which product?">
					<span class="mr-4"><input type="radio"> Web</span>
					<span class="mr-4"><input type="radio"> Mobile</span>
					<span><input type="radio"> Other</span>
				</Label>
				<Label name="Priority">
					<select name="" id="">
						<option></option>
					</select>
				</Label>
				<Label name="First Complaint?">
					<Choice />
				</Label>
				<hr>
				<button>Send</button>
			</form>
			<div class="panel">
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
				<Label name="Check Options">
					<span>???</span>
				</Label>
				<Label name="Which product?">
					<span>???</span>
				</Label>
				<Label name="Priority">
					<span>???</span>
				</Label>
				<Label name="First Complaint?">
					<span>???</span>
				</Label>
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
		}
	},
	data() {
		return {
			message: '',
			user: {
				email: '',
				password: '',
				age: 25
			}
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

#app form button {
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
