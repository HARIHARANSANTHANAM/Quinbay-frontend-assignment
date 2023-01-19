import HomePage from './Pages/HomePage.vue';
import ShoppingCart from './Pages/ShoppingCart.vue'
import ProductDescriptionPage from './Pages/ProductDescriptionPage.vue';
import Login from './components/LoginComponent.vue';
import VueRouter from 'vue-router';

const routerconfig=new VueRouter({
    mode:'history',
    routes:[ 
        {
            path:'/',name:'LoginComponent',component:Login
        },
    {
        path:'/home',name:'HomePage',component:HomePage
    },
    {
        path:'/cart',name:'CartPage',component:ShoppingCart
    },
    {
        path:'/product',name:'ProductDescriptionPage',component:ProductDescriptionPage
    }
    // ,{
    //     path:'/',name:'App',component:App
    // }
   ]
})

export default routerconfig;