<template>
  <div id="app">
    <div v-if="!cartPage">
    <LoginComponent v-if="Object.keys(user).length==0" :users="users"/>
    <HomePage v-else @cartApp="cartApp"/>
    </div>
    <div v-else>
      <ShoppingCart @cartApp="cartApp"/>
    </div>
  </div>
</template>


<script>


import HomePage from './Pages/HomePage.vue';
import LoginComponent from './components/LoginComponent.vue';
import ShoppingCart from './Pages/ShoppingCart.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
  LoginComponent,
  HomePage,
  ShoppingCart
  },
  methods:{
    cartApp(value)
    {
      if(value){
                this.cartPage=value;
            }
            else{
                this.cartPage=false;
            }
    }
  },
  data(){
    return{
       cartPage:false,
      users:[
        {
          userName:'hari21032001@gmail.com',
          password:"Hari21032001"
        },

        {
          userName:'Hariprasad',
          password:"Hari21032001"
        },

        {
          userName:'Jagapradeep',
          password:"Hari21032001"
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['user']),
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
