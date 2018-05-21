<template>
  <div>
    <h1>Portfolio</h1>
    <p>To Trade or view your funds</p>
    <hr/>
    <p>Your Funds are <strong>{{ funds |currency }}</strong></p>
  </div>
</template>
<script>
 export default {
   computed: {
     funds(){
       return this.$store.getters.funds;
     }
   }
 }
</script>
<style>
</style>
