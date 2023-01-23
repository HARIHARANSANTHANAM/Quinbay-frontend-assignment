const cartStore={
    state:{
        cart:[]
    },
    mutations:{
        addToCart(state,product){
            state.cart=[...state.cart,product]
    },
    incrementQuantity(state,product){
        state.cart=state.cart.map((cartproduct)=>{
            if(cartproduct.formattedId===product.formattedId){
                    product.quantity+=1;
                    return product;
            }
            return cartproduct
        })
    },
    decreaseQuantity(state,product){
      let productIndex=state.cart.indexOf(product)
      if(state.cart[productIndex]['quantity']==1)
      {
        state.cart.splice(productIndex,1);
      }
      else{
        state.cart[productIndex].quantity-=1;
      }
    },
    removeFromCart(state,product){
        const filterproduct = state.cart.filter((element) => JSON.stringify(element) !== JSON.stringify(product))
        state.cart=filterproduct;
    }
},
    actions:{
        PRODUCT_ADD_TO_CART({commit,state},product)
        {
            const cartItem=state.cart.find(item=> item.formattedId === product.formattedId)
            if(!cartItem){
                product['quantity']=1;
                 const cartItem={...product,quantity:1};
                commit('addToCart',cartItem)
            }
            else{
                commit('incrementQuantity',cartItem)
            }
        },
        PRODUCT_REMOVE_FROM_CART({commit},product){
            commit("removeFromCart",product)
        },
        PRODUCT_INCREASE_QUANTITY({commit},product)
        {
            commit("incrementQuantity",product);
        },

        PRODUCT_DECREASE_QUANTITY({commit},product)
        {
            commit("decreaseQuantity",product);
        }
    },
    getters:{
        getCart(state){
            return state.cart;
        },
    },
    namespaced:true
}

export default cartStore;