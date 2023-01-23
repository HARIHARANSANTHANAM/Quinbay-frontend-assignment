import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import userStore from './userStore';
import productStore  from './productStore';
import cartStore from './cartStore';


const store=new Vuex.Store({
    modules:{
        userStore,
        productStore,
        cartStore
    }
});

export default store;