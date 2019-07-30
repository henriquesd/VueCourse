<template>
	<div id="app">
		<h1>Challenge Form</h1>
		<div class="content">
			<form class="panel" v-if="!sended">
				<div class="header">Form</div>
				<CompleteName v-model="completeName"/>
				<Label name="Email">
					<input type="text" v-model="email">
				</Label>
				<Label name="Password">
					<input type="text" v-model="password">
				</Label>
				<Label name="Store Data?">
					<input type="checkbox" v-model="storeData">
				</Label>

				<hr>
				<button @click.prevent="send">Send</button>
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="panel" v-else>
				<div class="header">Result</div>
				<Label name="Name">
					<span>{{ completeName.name }}</span>
				</Label>
				<Label name="LastName">
					<span>{{ completeName.lastName }}</span>
				</Label>
				<Label name="Email">
					<span>{{ email }}</span>
				</Label>
				<Label name="Password">
					<span>{{ password }}</span>
				</Label>
				<Label name="Store Data?">
					<span>{{ storeData }}</span>
				</Label>
			</div>
		</div>
	</div>
</template>

<script>
import Label from './components/Label.vue'
import CompleteName from './components/CompleteName.vue'

export default {
	name: 'app',
	components: { CompleteName, Label },
	data() {
		return {
			sended: false,
			completeName: {
				name: '',
				lastName: '',
			},
			email: '',
			password: '',
			storeData: true,
		}
	},
	methods: {
		send() {
			this.sended = true
		}
	}
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
