import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './index';
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)



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

