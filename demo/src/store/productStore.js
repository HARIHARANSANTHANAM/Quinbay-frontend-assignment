import productService from '../services/productService.js'

const productStore={
    state:{
        products:[], 
        selectedProduct:{},
        cart:[]
    },
    mutations:{
        updateProducts(state,products)
        {
          state.products=products
        },
        setSelectedProduct(state,selectedProduct){
          state.selectedProduct=selectedProduct;
        }
    },
    actions:{
        async GET_PRODUCTS(context,{success,fail,data})
        {
          productService.getProducts(data,{
            success:(res)=>{
              let Products=res.data.data.products;
              context.commit("updateProducts",Products)
              success(Products)
            },
            fail
          })
          
        },
        GET_SELECTED_PRODUCT(context,{success,fail,data})
        {
          productService.getProduct(data,{
            success:(res)=>{
              let selectedProduct=res.data.data;
              context.commit("setSelectedProduct",selectedProduct);
              success(selectedProduct)
            },
            fail
          })
         
        },
        // PRODUCT_ADD_TO_CART({commit},product)
        // {
        //   commit('addToCart',product)
        // }
    },
    getters:{
        cart(state){
            return state.cart;
        },
        products(state)
        {
          return state.products;
        },
       
        getSelectedProduct(state){
          return state.selectedProduct
        }
    },
    namespaced:true
}

export default productStore;