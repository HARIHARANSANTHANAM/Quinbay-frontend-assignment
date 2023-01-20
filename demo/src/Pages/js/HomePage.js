import axios from 'axios';
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
        // ...mapGetters(['information']),    
        ...mapGetters(['user','products']),
        ...mapActions(['POST_PRODUCTS']),
    
    },
    created(){
        console.log(this.$route.query)
       this.fetchProducts("all")
    },
    methods:{
        async changeUser(){
            try{
                const res=await axios.put(`https://63c8ecef904f040a9652af79.mockapi.io/users/users/1`,{name:'Hariharan'});
               console.log(res);
            }
            catch(e){
                console.log(e); 
            }
        },
        async deleteUser(){
            try{
                const res=await axios.delete(`https://63c8ecef904f040a9652af79.mockapi.io/users/users/1`);
               console.log(res);
            }
            catch(e){
                console.log(e); 
            }
        },
       async fetchProducts(searchValue){
        try{
            const res=await axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${searchValue}&start=0&itemPerPage=24`);
             this.$store.dispatch('POST_PRODUCTS',res.data.data.products);
             this.filterProducts=[...res.data.data.products];
            console.log(res.data.data.products);
            }
            catch(e)
            {
                console.log(e)
            }
       },
        stockAvailable(product){
            alert(product.stock+" is available")
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
                //    this.filterProducts=[...this.products];
                //   if(searchValue){
                //  let filteredItems=this.filterProducts.filter(item=> item.name.toLowerCase().includes(searchValue.toLowerCase()));
                //   this.filterProducts=[...filteredItems]
                //   }
                if(searchValue){
                this.fetchProducts(searchValue);
                }
                else{
                    this.fetchProducts("all")
                }
          },

          cartpage(value){
            this.$emit("cartApp",value);
            
          }
        
          
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
            // filterProducts:[ { img:"https://m.media-amazon.com/images/I/81B0HJigO-L._AC_UY436_FMwebp_QL65_.jpg",name: "Redmi", ram: 8, memory: 25000, rating: 5, price:25000,stock:4,color:'red',model:'Redmi note 10' }, 
            // { img:"https://m.media-amazon.com/images/I/81QqVNKWtML._AC_UY436_FMwebp_QL65_.jpg",name: "Realme", ram: 16, memory: 35000, rating: 3 ,price:35000,stock:3,color:'green',model:'Realme 10'},
            // { img:"https://m.media-amazon.com/images/I/61vBPptSghL._AC_UY436_FMwebp_QL65_.jpg",name: "Vivo", ram: 4, memory: 45000, rating: 2 ,price:45000,stock:2,color:'gold',model:'Vivo y16'}, 
            // { img:"https://m.media-amazon.com/images/I/61PHOWOZh0L._AC_UY436_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:0,color:'silver',model:'Poco m4'},
            // { img:"https://m.media-amazon.com/images/I/81QVLzeVckL._AC_UY436_FMwebp_QL65_.jpg",name: "Samsung", ram: 4, memory: 24000, rating: 2 ,price:65000,stock:1,color:'red',model:"Samsung galaxy s20"}, 
            // { img:"https://m.media-amazon.com/images/I/617MPEZB5mL._AC_UY436_FMwebp_QL65_.jpg",name: "Oneplus", ram: 8, memory: 21000, rating: 5,price:75000,stock:6,color:'green' ,model:"Oneplus nord 2T"},
            // { img:"https://m.media-amazon.com/images/I/41hI-UvnhFL._AC_UY416_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:22,color:'green',model:'Poco C31'},
            // { img:"https://m.media-amazon.com/images/I/91W42b8YW+L._AC_UY436_FMwebp_QL65_.jpg",name: "Samsung", ram: 4, memory: 24000, rating: 2 ,price:65000,stock:23,color:'red',model:"Samsung Galaxy A23"}, 
            // { img:"https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UY436_FMwebp_QL65_.jpg",name: "Oneplus", ram: 8, memory: 21000, rating: 5,price:75000,stock:20 ,color:'silver',model:"Oneplus 10R"},
            // { img:"https://m.media-amazon.com/images/I/61+OLKs47OL._AC_UY436_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:0,color:'silver',model:"Poco x4 pro"}
            // ]
        }
    }

    
}