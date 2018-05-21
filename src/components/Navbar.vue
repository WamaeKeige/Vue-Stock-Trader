<template>
  <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand">{{name}}</router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link to="/"  class="active" tag="li"><a>Home</a></router-link>
            <router-link to="/portfolio" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" tag="li"><a>Stocks</a></router-link>
          <li><a href="#" @click="endDay">End day</a></li>
        </ul>
        <strong class="navbar-text navbar-right"> {{funds | currency}}</strong>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown"
            :class="{open: isDropdownOpen}"
            @click="isDropdownOpen = !isDropdownOpen">
              <a href="#"
               class="dropdown-toggle"
               data-toggle="dropdown"
               role="button"
               aria-haspopup="true"
                aria-expanded="false">Save & Load <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#" @click="saveDay">Save Data</a></li>
                <li><a href="#" @click="loadData">Load Data</a></li>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'Navbar',
  data () {
    return {
      name: 'Stock Trader',
      isDropdownOpen: false
    }
  },
  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions ({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
     endDay() {
      this.randomizeStocks();
    },
    saveDay() {
      const data ={
        funds: this.$store.getters.funds,
        stocks: this.$store.getters.stocks,
        stockPortfolio: this.$store.getters.stockPortfolio
      };
      this.$http.put('data.json', data);
    },
     loadData() {
       this.fetchData();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
