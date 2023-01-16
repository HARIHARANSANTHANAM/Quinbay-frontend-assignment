<template>
  <div id="app">
<!-- 
    <MyInfo/>
    <ProductCard/> -->
    <HomePage/>
  </div>
</template>

<script>

// import MyInfo from './components/MyInfo.vue'
// import ProductCard from './components/ProductCard.vue'
import HomePage from './Pages/HomePage.vue';

export default {
  name: 'App',
  components: {
  //  MyInfo,
  //  ProductCard
  HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
