import { mapActions} from "vuex";
import Productmixin from '../../mixins/Product' 

export default{
    name:'ProductComponent',
    props:{
       product:{
        type:Object,
        default:{}
       }
    },
    mixins:[Productmixin],
    methods:{
        ...mapActions('cartStore',['PRODUCT_ADD_TO_CART']),
        showProductPage(){
            this.$router.push({name:'ProductDescriptionPage',query:{productId:this.product?.formattedId}})
        }
    }
}