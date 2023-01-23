import {mapGetters} from 'vuex'

export default {
    name:"PaymentComponent",
    computed:{
        ...mapGetters('cartStore',['getCart']),

        calculateBill(){

            let total=this.getCart.reduce((total,cart)=>{
                return total+((cart?.price?.minPrice)*(cart?.quantity));
            },0);
            return (total)    
        }
    }
}