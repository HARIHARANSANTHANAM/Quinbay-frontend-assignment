import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import userStore from './userStore';
import productStore  from './productStore';


const store=new Vuex.Store({
    modules:{
        userStore,
        productStore
    }
});

export default store;