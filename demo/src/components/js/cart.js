import {mapActions,mapGetters} from 'vuex'
import ProductMixins from '../../mixins/Product';

export default {
    name:"CartComponent",
    props:{
        product:{
            type:Object,
            default:{}
        }
    },
    computed:{

    ...mapGetters('cartStore',['getCart']),
    },
    mixins:[ProductMixins],
    methods:{
        ...mapActions('cartStore',['PRODUCT_REMOVE_FROM_CART']),
        getImage(){
            let images=this.product?.images;
            return images[0];
        }
    }
}