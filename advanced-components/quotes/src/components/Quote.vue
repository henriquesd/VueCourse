<template>
    <!-- <div class ="quote">
        {{ text }} 
        <slot></slot>
    </div> -->
    <div class="quote">
        <slot name="source"></slot>
        <slot></slot>
        <div class="author">
            <slot name="author"></slot>
        </div>
    </div>
</template>

<script>
export default {
    // props: ['text']
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
</script>

<style scoped>
    .quote {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .author {
        float: right;
    }

    /* h1 {
        color: red!important;
    } */
</style>
