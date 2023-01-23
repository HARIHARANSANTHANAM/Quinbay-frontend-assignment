import {mapActions, mapGetters} from 'vuex'


export default {
  computed:{
    ...mapGetters('cartStore',['getCart']),
  },
    methods:{
        ...mapActions('cartStore',['PRODUCT_ADD_TO_CART','PRODUCT_DECREASE_QUANTITY','PRODUCT_INCREASE_QUANTITY']),
       
        addToCart(newproduct){
            this.PRODUCT_ADD_TO_CART(newproduct);
        },
        decreaseQuantity(product){
            this.PRODUCT_DECREASE_QUANTITY(product)
        },
        increaseQuantity(product){
          console.log(product);
          this.PRODUCT_INCREASE_QUANTITY(product)
      },
      removeFromCart(){
        this.PRODUCT_REMOVE_FROM_CART(this.product);
    }
    }
}