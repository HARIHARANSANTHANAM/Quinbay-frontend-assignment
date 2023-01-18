import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
Vue.config.productionTip = false
Vue.use(Vuex)

const checkLoginLocalStorage=(user)=>{
  
  if(localStorage.getItem('User')==null || localStorage.getItem('User')=="{}"){
    localStorage.setItem('User',JSON.stringify(user));
  }
  return JSON.parse(localStorage.getItem('User'));
}

const store=new Vuex.Store({
  state:{
    user:checkLoginLocalStorage({}),
    cart:[],
    products:[ { img:"https://m.media-amazon.com/images/I/81B0HJigO-L._AC_UY436_FMwebp_QL65_.jpg",name: "Redmi", ram: 8, memory: 25000, rating: 5, price:25000,stock:4,color:'red',model:'Redmi note 10' }, 
            { img:"https://m.media-amazon.com/images/I/81QqVNKWtML._AC_UY436_FMwebp_QL65_.jpg",name: "Realme", ram: 16, memory: 35000, rating: 3 ,price:35000,stock:3,color:'green',model:'Realme 10'},
            { img:"https://m.media-amazon.com/images/I/61vBPptSghL._AC_UY436_FMwebp_QL65_.jpg",name: "Vivo", ram: 4, memory: 45000, rating: 2 ,price:45000,stock:2,color:'gold',model:'Vivo y16'}, 
            { img:"https://m.media-amazon.com/images/I/61PHOWOZh0L._AC_UY436_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:0,color:'silver',model:'Poco m4'},
            { img:"https://m.media-amazon.com/images/I/81QVLzeVckL._AC_UY436_FMwebp_QL65_.jpg",name: "Samsung", ram: 4, memory: 24000, rating: 2 ,price:65000,stock:1,color:'red',model:"Samsung galaxy s20"}, 
            { img:"https://m.media-amazon.com/images/I/617MPEZB5mL._AC_UY436_FMwebp_QL65_.jpg",name: "Oneplus", ram: 8, memory: 21000, rating: 5,price:75000,stock:6,color:'green' ,model:"Oneplus nord 2T"},
            { img:"https://m.media-amazon.com/images/I/41hI-UvnhFL._AC_UY416_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:22,color:'green',model:'Poco C31'},
            { img:"https://m.media-amazon.com/images/I/91W42b8YW+L._AC_UY436_FMwebp_QL65_.jpg",name: "Samsung", ram: 4, memory: 24000, rating: 2 ,price:65000,stock:23,color:'red',model:"Samsung Galaxy A23"}, 
            { img:"https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UY436_FMwebp_QL65_.jpg",name: "Oneplus", ram: 8, memory: 21000, rating: 5,price:75000,stock:20 ,color:'silver',model:"Oneplus 10R"},
            { img:"https://m.media-amazon.com/images/I/61+OLKs47OL._AC_UY436_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:0,color:'silver',model:"Poco x4 pro"}
           ]
  },
  mutations:{
    setLogin(state,user)
    {

      if(Object.keys(JSON.parse(localStorage.getItem('User'))).length==0){
        state.user=checkLoginLocalStorage(user);
      }
    },
    addToCart(state,product){

      state.cart.push(product);
    },
    setLogout(state)
    {
      let deleteobj={};
      localStorage.setItem('User',JSON.stringify(deleteobj));
      state.user=deleteobj
    }
  },
  actions:{
    checkLogin({commit},user){
      commit("setLogin",user);
    },
    setLogout({commit}){
        commit("setLogout");
    },
    updateCart({commit},product){
        commit("addToCart",product);
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
  store
}).$mount('#app')
