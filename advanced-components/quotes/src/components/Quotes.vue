<template>
    <div class="quotes">
        <span>
            <button @click="number--">&lt;</button>
            <button @click="number++">&gt;</button>
        </span>
        <!-- <Quote :text="quotes[index].text"></Quote> -->

        <!-- <Quote>
            <h1>{{ quotes[index].author }}</h1>
            <p>{{ quotes[index].text }}</p>
            <h6>{{ quotes[index].source }}</h6>
        </Quote> -->

        <Quote>
            <h1 slot="author">{{ quotes[index].author }}</h1>
            <p>{{ quotes[index].text }}</p>
            <h6 slot="source">{{ quotes[index].source }}</h6>

        </Quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    components: { Quote },
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
        },
         created() {
            console.log('created')
        },
        destroyed() {
            console.log('destroyed')
        },
        activated() {
            console.log('activated')
        },
        deactivated() {
            console.log('deactivated')
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

    /* h1 {
        color: green!important;
    } */
</style>
