import {mapGetters,mapActions} from 'vuex'
import HeaderComponent from '../../components/HeaderComponent.vue';
import ProductCardComponent from '../../components/ProductCardComponent.vue'

export default{
    name:"HomePage",
    components:{
        HeaderComponent,
        ProductCardComponent
    },
    computed:{    
        ...mapGetters('userStore',['user','products']),
        ...mapActions('productStore',['GET_PRODUCTS']),
    
    },
    created(){
      this.fetchProducts("all")
    },
    methods:{
         async fetchProducts(searchValue){
            this.$store.dispatch('productStore/GET_PRODUCTS',{
                fail:function(err){
                    console.error(err)
            },
                success:this.onSuccess,
                data:searchValue
            });
       
       },

       onSuccess(product){
        console.log(product)
        this.filterProducts=[...product]
       },
        
        returnMinMaxPricerange()
        {

            let min=this.selectedPrice[0].min,max=this.selectedPrice[0].max;
            for(let i=1;i<this.selectedPrice.length;i++)
            {
                min=this.selectedPrice[i].min<min?this.selectedPrice[i].min:min;
                max=this.selectedPrice[i].max>max?this.selectedPrice[i].max:max;
            }

             let foundmin_max={min:min,max:max}
            return foundmin_max;
        },
        
        filterResults($event) {
           
            $event.preventDefault();
            this.filterProducts=[...this.products];
            let MinMax=this.selectedPrice.length>0?this.returnMinMaxPricerange():true;
            let filteredItems = this.filterProducts.filter(item => {
                let matchBrand = this.selectedBrand.length === 0 || this.selectedBrand.includes(item.name);
                let matchPriceRange = this.selectedPrice.length === 0 || (this.selectedPrice.length?(MinMax.min)<=item.price && (MinMax.max)>item.price:MinMax);
                let matchColor=this.selectedColor.length === 0 || this.selectedColor.includes(item.color);
                let matchRatings= this.ratings.value === 0 || (item.rating >= this.ratings.value && item.rating <= this.ratings.max);
              
                return matchBrand && matchColor && matchRatings && matchPriceRange;
              });
              console.log(filteredItems)
              this.filterProducts=[...filteredItems]
          },

        
          
          search(searchValue)
          {
            console.log(searchValue)
                if(searchValue){
                this.fetchProducts(searchValue);
                }
                else{
                    this.fetchProducts("all")
                }
          },

        
          
    },
    data(){
        return{
            pricerange:{"upto 30000-50000":{min:30000,max:50000},"upto 60000-70000":{min:60000,max:70000},"upto 70000-90000":{min:70000,max:90000}},
            searchQuery:'',
            renderFilter:{
                brand:["Redmi","Poco","Vivo","Samsung","Oneplus","Realme"],
                color:["red","green","gold","silver"]
            },
            selectedBrand: [],
            selectedColor: [],
            selectedPrice:[],
            ratings:{min:1,max:5,value:0},
            filterProducts:[]
        }
    }

    
}