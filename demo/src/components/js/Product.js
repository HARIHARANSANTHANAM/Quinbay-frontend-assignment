export default{
    name:'ProductComponent',
    props:{
       product:{
        type:Object,
        default:{}
       }
    },
    methods:{
        // addtoCart(product){
        //     this.updateCart(product);
        // },
        showProductPage(){
            this.$router.push({name:'ProductDescriptionPage',query:{productId:this.product?.formattedId}})
        }
    }
}