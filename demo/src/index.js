import HomePage from './pages/HomePage.vue';
import ProductDescriptionPage from './pages/ProductDescriptionPage.vue';
import Login from './components/LoginComponent.vue';
import VueRouter from 'vue-router';
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ThankYouPage from './pages/ThankYouPage.vue';


const routerconfig=new VueRouter({
    mode:'history',
    routes:[ 
        {
            path:'/home',
            name:'HomePage',
            component:HomePage,
        },
        {
            path:'/',
            name:'LoginComponent',
            component:Login
        },
        {
          path:'/Cart',
          name:'ShoppingCartPage',
          component:ShoppingCartPage
      },
      {
        path:'/Thankyou',
          name:'ThankYouPage',
          component:ThankYouPage
      },
    {
        path:'/product',
        name:'ProductDescriptionPage',
        component:ProductDescriptionPage,
    }
   ]
})


// routerconfig.beforeEach((to,from,next)=>{
//     if(to.name==='HomePage' && from.name!='LoginComponent' && from.name==='ProductDescriptionPage'){
//         alert("Please login!!")
//         return false;
//     }
    
//     if(to.name==='ProductDescriptionPage' && from.name!='HomePage' && from.name!='Login'){
//         alert("Please Login You cannot see Product Info")
//         return false;
//     }
//     next();
// })

routerconfig.beforeEach((to, from, next) => {
    // check if user is logged in
    const isLoggedIn = localStorage.getItem('user');
    if (to.path === '/' && isLoggedIn) {
      next('/home');
    } 
    else if(to.path === '/home' && !isLoggedIn){
        next({ path: '/' });
    }
    else {
      next();
    }
  });

export default routerconfig;