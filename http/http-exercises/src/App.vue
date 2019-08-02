<template>
	<div id="app" class="container">
		<h1>HTTP with Axios</h1>
		<b-alert show dismissible v-for="message in messages"
			:key="message.text"
			:variant="message.type">{{ message.text }}</b-alert>
		<b-card>
			<b-form-group label="Name:">
				<b-form-input type="text" size="lg"
					v-model="user.name"
					placeholder="Inform the name"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="text" size="lg"
					v-model="user.email"
					placeholder="Inform the email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="save"
				size="lg" variant="primary">Save</b-button>
				<b-button @click="getUsers"
					size="lg" variant="success"
					class="ml-2">Get Users</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(user, id) in users" :key="id">
				<strong>Name: </strong> {{ user.name }} <br>
				<strong>Email: </strong> {{ user.email }} <br>
				<strong>ID: </strong> {{ id }} <br>
				<b-button variant="warning" size="lg"
					@click="load(id)">Load</b-button>
					<b-button variant="danger" size="lg" class="ml-2"
						@click="remove(id)">Delete</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			messages: [],
			users: [],
			id: null,
			user: {
				name: '',
				email: ''
			}
		}
	},
	methods: {
		clear() {
			this.user.name = ''	
			this.user.email = ''	
			this.id = null
			this.messages = []
		},
		load(id) {
			this.id = id
			this.user = { ...this.users[id] }
		},
		remove(id) {
			this.$http.delete(`/users/${id}.json`)
				.then(() => this.clear())
				.catch(err => {
					this.messages.push({
						text: 'Error on delete',
						type: 'danger'
					})
				})
		},
		save() {
			debugger;
			const method = this.id ? 'patch' : 'post'
			const urlEnd = this.id ? `/${this.id}.json` : '.json'
			this.$http[method](`/users${urlEnd}`, this.user)
				.then(_ => {
					this.clear()
					this.messages.push({
						text: 'Operation successfully performed',
						type: 'success'
					})
				})
			
			// this.$http.post('users.json', this.user)
			// 	.then(() => this.clear())
				// .then(_ => this.clear())
		},
		getUsers() {
			// this.$http.get('users.json')
			this.$http('users.json').then(res => {
				this.users = res.data
				console.log(res.data)
			})

			// this.$http.defaults.headers.common['Authorization'] = 'abc123'
		}
	}
	// created() {
	// 	this.$http.post('users.json', {
	// 		name: 'Henrique',
	// 		email: 'test@test.com'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
