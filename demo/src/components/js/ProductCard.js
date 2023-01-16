export default{
    name:"ProductCard",
    methods:{
        checkStockAvailable:function (product){
            if(product.stock>0) {return true;}
            return false;
        },
        stockAvailable(product){
            alert(product.stock+" is available")
        },
        addtoCart(product){
            product.stock-=1;
        }
    },
    data(){
        return{
            products:[
                { img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",name: "REDMI", ram: 8, memory: 25000, rating: 5, price:25000,stock:4 }, 
            { img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",name: "REALME", ram: 16, memory: 35000, rating: 3 ,price:35000,stock:3},
            { img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",name: "VIVO", ram: 4, memory: 45000, rating: 2 ,price:45000,stock:2}, 
            { img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",name: "POCO", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:0},
            { img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",name: "SAMSUNG", ram: 4, memory: 24000, rating: 2 ,price:65000,stock:1}, 
            { img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",name: "ONEPLUS", ram: 8, memory: 21000, rating: 5,price:75000,stock:6 },
            { img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",name: "POCO", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:22},
            { img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",name: "SAMSUNG", ram: 4, memory: 24000, rating: 2 ,price:65000,stock:23}, 
            { img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",name: "ONEPLUS", ram: 8, memory: 21000, rating: 5,price:75000,stock:20 },
            { img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",name: "POCO", ram: 8, memory: 19000, rating: 3 ,price:55000,stock:0}
            ]
        }
    }

    
}