import {mapActions, mapGetters} from 'vuex'


export default {
    methods:{
        ...mapActions('productStore',['PRODUCT_ADD_TO_CART']),
        ...mapGetters('productStore',['cart']),
        addToCart(product){

            const productFound=cart?.length>0 && cart.find((cart)=>cart.formattedId === payload?.formattedId);
            if(productFound)
            {
              productFound['quantity']+=1;
            this.PRODUCT_ADD_TO_CART(productFound);
            }
            else{
              product['quantity']=1;
            this.PRODUCT_ADD_TO_CART(product);
            }

        }
    }
}