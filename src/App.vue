<template>
  <div id="app">
    <div class="container">
    <Navbar/>
    <div class="row">
      <div class="col-xs-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
      </div>
    </div>
</div>
</div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
body {
  padding : 30dp
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
