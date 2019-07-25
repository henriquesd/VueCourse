new Vue({
    el: '#challenge',
    data: {
        name: 'Henrique SD',
        yearsOld: 27,
        image: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        yearsOldMultipliedByThree() {
            return this.yearsOld * 3
        },
        random() {
            return Math.random()
        }
    }
})