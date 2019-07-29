<template>
    <div class="quotes">
        <span>
            <button @click="number--">&lt;</button>
            <button @click="number++">&gt;</button>
        </span>
        {{ quotes[index].text }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: 0,
            quotes: [{
                source: 'Entrepreneurs Journal',
                text: 'Always remember that you are absolutely unique. Just like everyone else.',
                author: 'Margaret Mead'
            }, { 
                source: 'Mother phrases',
                text: 'This is not a room, its a sty.',
                author: 'Roberta'
            }, {
                source: 'Father phrases',
                text: 'Ill count to 3! 1, 2, 2...',
                author: 'Gustavo'
            }]
        }
    },
    computed: {
        index() {
            return Math.abs(this.number % 3)
        }
    }
}
</script>

<style scoped>
    .quotes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
