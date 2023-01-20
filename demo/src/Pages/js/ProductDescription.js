import HeaderComponent from '../../components/HeaderComponent.vue';
import {mapGetters,mapActions} from 'vuex'
import axios from 'axios';

export default{
    name:'ProductDescriptionPage',
    components:{
      HeaderComponent  
    },
    data(){
        return{
            // product: {
            //     type:Object,
            //     default:{}
            // }
            product: {}
        }
    },
    computed:{
        ...mapGetters(['getSelectedProduct'])
    },
    mounted(){
        this.getProductDetailFromAPI()
    },
    methods:{
        ...mapActions(['POST_SELECTED_PRODUCT']),
        getImage(){
            const productImage = this.product?.images
            return productImage && productImage[0]?.full
         },
        async getProductDetailFromAPI(){
            console.log(this.$route.query.productId);
            let id=this.$route.query.productId;
            const res=await axios.get(`https://www.blibli.com/backend/product-detail/products/${id}/_summary`);
            const fetchProduct=await res.data.data;
            console.log(fetchProduct)
            this.POST_SELECTED_PRODUCT(fetchProduct)
            this.product=this.getSelectedProduct;
            // console.log(JSON.stringify(this.product));
        }
    }
}