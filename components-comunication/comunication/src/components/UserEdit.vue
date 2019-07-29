<template>
    <div class="component">
        <h2>Change User Info</h2>
        <p>Edit informations</p>
        <p>User age: <strong>{{ age }}</strong></p>
        <button @click="changeAge">Change Age</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
      props: ['age'],
      methods: {
          changeAge() {
              this.age += 1
              // this.$emit('ageChanged', this.age)
              // barramento.$emit('ageChanged', this.age)
              barramento.changeAge(this.age)

          }
      }
}
</script>

<style scoped>
    .component {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
