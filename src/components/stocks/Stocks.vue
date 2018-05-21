<template>
 <div>
   <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <Stock v-for="stock in stocks" :stock="stock"></Stock>
   </main>
 </div>
</template>
<script>
import Stock from './Stock.vue'
 export default {
   components:{
     Stock
   },
   computed: {
     stocks() {
       return this.$store.getters.stocks;
     }
   }
 }
</script>
<style>
</style>
