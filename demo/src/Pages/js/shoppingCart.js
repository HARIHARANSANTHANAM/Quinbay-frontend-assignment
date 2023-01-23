import {mapGetters} from 'vuex'
import CartComponent from '../../components/CartComponent.vue'
import HeaderComponent from '../../components/HeaderComponent.vue'
import PaymentComponent from '../../components/PaymentComponent.vue'

export default {
    name:"ShoppingCartPage",
    components:{
        CartComponent,
        HeaderComponent,
        PaymentComponent
    },
    computed:{
        ...mapGetters('cartStore',['getCart']),
        fetchCartDetails(){
            return this.getCart;
        }
    }
}