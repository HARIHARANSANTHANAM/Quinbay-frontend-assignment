export default{
    name:"HomePage",
    methods:{
        stockAvailable(product){
            alert(product.stock+" is available")
        },
        addtoCart(product){
            product.stock-=1;
        },
        numberWithCommas(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        },
        filterResults($event) {
           
            $event.preventDefault();
            this.filterProducts=[...this.products];

            let filteredItems = this.filterProducts.filter(item => {
                let matchBrand = this.selectedBrand.length === 0 || this.selectedBrand.includes(item.name);
                let matchColor=this.selectedColor.length === 0 || this.selectedColor.includes(item.color);
                let matchPrice= this.price.value === 0 || (item.price >= this.price.value && item.price <= this.price.max);
                let matchRatings= this.ratings.value === 0 || (item.rating >= this.ratings.value && item.rating <= this.ratings.max);
              
                return matchBrand && matchColor && matchPrice && matchRatings;
              });
              console.log(filteredItems)
              this.filterProducts=[...filteredItems]
          },
          searchProduct()
          { 
              //  $event.preventDefault();
                let Query=this.searchQuery;
                this.filterProducts=[...this.products];
                if(Query){
               let filteredItems=this.filterProducts.filter(item=> Query.toLowerCase()== item.name.toLowerCase());
    //             let filteredItems=this.filterProducts.map((filterPro)=>{return Object.entries(filterPro).
    // map(([key, val]) =>{if(Query.includes(val)){return [key,val]}})});
    // filteredItems.forEach(element => {
    //     console.log(element)
    // })
                this.searchQuery=""
                this.filterProducts=[...filteredItems]
                }
              
          }
    },
    data(){
        return{
            searchQuery:'',
            renderFilter:{
                brand:["Redmi","Poco","Vivo","Samsung","Oneplus"],
                color:["red","green","gold","silver"]
            },
            selectedBrand: [],
            selectedColor: [],
            price:{min:0,max:75000,value:0},
            ratings:{min:1,max:5,value:0},
            filterProducts:[ { img:"https://m.media-amazon.com/images/I/81B0HJigO-L._AC_UY436_FMwebp_QL65_.jpg",name: "Redmi", ram: 8, memory: 25000, rating: 5, price:25000,stock:4,color:'red',model:'Redmi note 10' }, 
            { img:"https://m.media-amazon.com/images/I/81QqVNKWtML._AC_UY436_FMwebp_QL65_.jpg",name: "Realme", ram: 16, memory: 35000, rating: 3 ,price:35000,stock:3,color:'green',model:'Realme 10'},
            { img:"https://m.media-amazon.com/images/I/61vBPptSghL._AC_UY436_FMwebp_QL65_.jpg",name: "Vivo", ram: 4, memory: 45000, rating: 2 ,price:45000,stock:2,color:'gold',model:'Vivo y16'}, 
            { img:"https://m.media-amazon.com/images/I/61PHOWOZh0L._AC_UY436_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:0,color:'silver',model:'Poco m4'},
            { img:"https://m.media-amazon.com/images/I/81QVLzeVckL._AC_UY436_FMwebp_QL65_.jpg",name: "Samsung", ram: 4, memory: 24000, rating: 2 ,price:65000,stock:1,color:'red',model:"Samsung galaxy s20"}, 
            { img:"https://m.media-amazon.com/images/I/617MPEZB5mL._AC_UY436_FMwebp_QL65_.jpg",name: "Oneplus", ram: 8, memory: 21000, rating: 5,price:75000,stock:6,color:'green' ,model:"Oneplus nord 2T"},
            { img:"https://m.media-amazon.com/images/I/41hI-UvnhFL._AC_UY416_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:22,color:'green',model:'Poco C31'},
            { img:"https://m.media-amazon.com/images/I/91W42b8YW+L._AC_UY436_FMwebp_QL65_.jpg",name: "Samsung", ram: 4, memory: 24000, rating: 2 ,price:65000,stock:23,color:'red',model:"Samsung Galaxy A23"}, 
            { img:"https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UY436_FMwebp_QL65_.jpg",name: "Oneplus", ram: 8, memory: 21000, rating: 5,price:75000,stock:20 ,color:'silver',model:"Oneplus 10R"},
            { img:"https://m.media-amazon.com/images/I/61+OLKs47OL._AC_UY436_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:0,color:'silver',model:"Poco x4 pro"}
            ],
            products:[ { img:"https://m.media-amazon.com/images/I/81B0HJigO-L._AC_UY436_FMwebp_QL65_.jpg",name: "Redmi", ram: 8, memory: 25000, rating: 5, price:25000,stock:4,color:'red',model:'Redmi note 10' }, 
            { img:"https://m.media-amazon.com/images/I/81QqVNKWtML._AC_UY436_FMwebp_QL65_.jpg",name: "Realme", ram: 16, memory: 35000, rating: 3 ,price:35000,stock:3,color:'green',model:'Realme 10'},
            { img:"https://m.media-amazon.com/images/I/61vBPptSghL._AC_UY436_FMwebp_QL65_.jpg",name: "Vivo", ram: 4, memory: 45000, rating: 2 ,price:45000,stock:2,color:'gold',model:'Vivo y16'}, 
            { img:"https://m.media-amazon.com/images/I/61PHOWOZh0L._AC_UY436_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:0,color:'silver',model:'Poco m4'},
            { img:"https://m.media-amazon.com/images/I/81QVLzeVckL._AC_UY436_FMwebp_QL65_.jpg",name: "Samsung", ram: 4, memory: 24000, rating: 2 ,price:65000,stock:1,color:'red',model:"Samsung galaxy s20"}, 
            { img:"https://m.media-amazon.com/images/I/617MPEZB5mL._AC_UY436_FMwebp_QL65_.jpg",name: "Oneplus", ram: 8, memory: 21000, rating: 5,price:75000,stock:6,color:'green' ,model:"Oneplus nord 2T"},
            { img:"https://m.media-amazon.com/images/I/41hI-UvnhFL._AC_UY416_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:22,color:'green',model:'Poco C31'},
            { img:"https://m.media-amazon.com/images/I/91W42b8YW+L._AC_UY436_FMwebp_QL65_.jpg",name: "Samsung", ram: 4, memory: 24000, rating: 2 ,price:65000,stock:23,color:'red',model:"Samsung Galaxy A23"}, 
            { img:"https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UY436_FMwebp_QL65_.jpg",name: "Oneplus", ram: 8, memory: 21000, rating: 5,price:75000,stock:20 ,color:'silver',model:"Oneplus 10R"},
            { img:"https://m.media-amazon.com/images/I/61+OLKs47OL._AC_UY436_FMwebp_QL65_.jpg",name: "Poco", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:0,color:'silver',model:"Poco x4 pro"}
           ]
        }
    }

    
}