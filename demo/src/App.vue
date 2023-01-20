<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import {mapActions} from 'vuex';

export default {
  name: 'App',
  methods:{
    ...mapActions(['AUTH_LOGIN'])
  },
  created(){
    if(localStorage.getItem('user')){
      this.AUTH_LOGIN(JSON.parse(localStorage.getItem('user')));
    }
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
