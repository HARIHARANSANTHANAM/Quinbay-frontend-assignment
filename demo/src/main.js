import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from './index';

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

// const checkLoginLocalStorage=(user)=>{
  
//   if(localStorage.getItem('User')==null){
//     localStorage.setItem('User',JSON.stringify(user));
//   }
//   else{
//     localStorage.setItem('User',JSON.stringify(user));
//   }
//   return JSON.parse(localStorage.getItem('User'));
// }

const store=new Vuex.Store({
  state:{
    user:{},
      products:[],
           users:[
            {
              userName:'hari21032001@gmail.com',
              password:"Hari21032001",
            },
    
            {
              userName:'Hariprasad',
              password:"Hari21032001",
            },
    
            {
              userName:'Jagapradeep',
              password:"Hari21032001",
            }
          ],
          selectedProduct:{},
          cart:[]
  },
  mutations:{
    setLogin(state,user)
    {
        localStorage.setItem('user',JSON.stringify(user));
        state.user=user;
      
    },
    setLogout(state)
    {
      localStorage.removeItem('user');
      state.user={}
    },
    updateProducts(state,products)
    {
      state.products=products
    },
    setSelectedProduct(state,selectedProduct){
      state.selectedProduct=selectedProduct;
    },
    // addToCart(state,payload)
    // {
    //     console.log(state.cart);
    // }
  },
  actions:{
    AUTH_LOGIN({commit},user){
      commit("setLogin",user);
    },
   AUTH_LOGOUT({commit}){
        commit("setLogout");
    },
    POST_PRODUCTS({commit},product)
    {
      commit("updateProducts",product)
    },
    POST_SELECTED_PRODUCT(context,selectedProduct)
    {
      context.commit("setSelectedProduct",selectedProduct)
    },
    PRODUCT_ADD_TO_CART({commit},product)
    {
      commit('addToCart',product)
    }
  },
  getters:{
    user(state){
      return state.user;
    },
    cart(state){
        return state.cart;
    },
    products(state)
    {
      return state.products;
    },
    users(state){
      return state.users;
    },
    getSelectedProduct(state){
      return state.selectedProduct
    }
  }
})

Vue.filter('CurrencySepeartor',(x)=>{
  x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
  return x;
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

