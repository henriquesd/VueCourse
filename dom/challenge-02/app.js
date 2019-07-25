new Vue({
    el: '#challenge',
    data: {
        value: ''
    },
    methods: {
        showAlert() {
            alert('Im alerting you now!')
        },
        changeValue(event) {
            this.value = event.target.value
        }
    }
})