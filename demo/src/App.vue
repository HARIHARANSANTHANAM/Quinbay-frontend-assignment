<template>
  <div id="app">
    <!-- <div v-if="!cartPage">
    <LoginComponent v-if="user.userName==undefined && user.guest==false"/>
    <HomePage v-else @cartApp="cartApp"/>
    </div>
    <div v-else>
      <ShoppingCart @cartApp="cartApp" />
    </div>  -->
    <!-- <Shopping/> -->
    <!-- <router-link class="nav-link" to="/home" v-if="user.userName!=undefined && user.guest!=false">Home</router-link>
     <router-link class="nav-link" to="/cart" v-if="user.userName!=undefined && user.guest!=false">Cart</router-link>
    <router-view/>
    -->  
    <router-view/>
  </div>
</template>


<script>


// import HomePage from './Pages/HomePage.vue';
// import LoginComponent from './components/LoginComponent.vue';
// import ShoppingCart from './Pages/ShoppingCart.vue';
import {mapGetters} from 'vuex';


export default {
  name: 'App',
  components: {
  // LoginComponent,
  // HomePage,
  // ShoppingCart,
  },
  created(){
    console.log(this.cartPage)
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
       cartPage:false
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
