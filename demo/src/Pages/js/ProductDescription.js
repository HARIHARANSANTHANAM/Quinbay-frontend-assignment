import HeaderComponent from '../../components/HeaderComponent.vue'

export default{
    name:'ProductDescriptionPage',
    components:{
      HeaderComponent  
    },
    data(){
        return{
            product:{
                type:Object,
                product:{}
            }
        }
    },
    mounted(){
        console.log(this.$route.query)
        this.getProductDetails()
    },
    methods:{
        getImage(){
            return this.product.images.filter((p,index)=>index==0)
        },
        getProductDetails(){
            console.log(this.$route.query.product);
            //this.$route.push('/home')
            this.product=this.$route.query.product;
         //   this.$router.push('/home')
            //this.product=this.$router.query.product;
        }
    }
}