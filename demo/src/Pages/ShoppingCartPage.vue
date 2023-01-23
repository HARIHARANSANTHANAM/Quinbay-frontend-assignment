<template>
    <div>
    <HeaderComponent/>
   
            <br>
           <div class="cart_products" id="cart_products">
           <div class="list_products">
           <div class="container bg-light" style="position:relative">
            <h6 class="fw-bold mb-5 mt-2" style="position: absolute; top: 0;cursor:pointer" @click="$router.go(-1)">
                   <i class="fas fa-angle-left me-2"></i>Back 
            </h6>
                  <br>
              <h3>Shopping Cart</h3>
              <hr/>
              <p v-if="!fetchCartDetails.length">Cart Is Empty!</p>
           <div v-for="(product,index) in  fetchCartDetails" :key="index">
        
            <CartComponent :product="product" :index="index"/>                
            </div>
           </div>
           
           </div>
            <div class="checkout container sticky-top" v-if="fetchCartDetails.length">
                    <PaymentComponent/>
            </div>
           </div>
           <!-- <hr/> -->
    </div>
    
</template>

<script src="./js/shoppingCart.js"/>
<style scoped>
.cart_products{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.btn-block{
    display: block;
}
.cart_products .list_products{
    display: block;
    flex: .7;
}
.checkout_section{
    border-radius: .5rem;
}
.checkout{
    flex: .3;
}

@media (max-width:630px){
    .cart_products{
        display: block;
    }
    
}
</style>