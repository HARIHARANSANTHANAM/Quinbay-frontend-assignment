import HeaderComponent from '../../components/HeaderComponent.vue';
import {mapGetters,mapActions} from 'vuex'

export default{
    name:'ProductDescriptionPage',
    components:{
      HeaderComponent  
    },
    data(){
        return{
            product: {}
        }
    },
    computed:{
        ...mapGetters('productStore',['getSelectedProduct'])
    },
    mounted(){
        this.getProductDetailFromAPI()
    },
    methods:{
        ...mapActions('productStore',['GET_SELECTED_PRODUCT']),
        getImage(){
            const productImage = this.product?.images
            return productImage && productImage[0]?.full
         },
        getProductDetailFromAPI(){
             let id=this.$route.query.productId;
            this.GET_SELECTED_PRODUCT({
                success:(data)=>{
                    console.log(data)
                        this.product=this.getSelectedProduct;
                },
                fail:(err)=>{
                        console.error(err)
                },
                data:id
            })
        }
    }
}