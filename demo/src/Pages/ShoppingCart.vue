<template>
    <div>
        <button @click="backToHome()">Back</button>
           My Cart
           <hr>
           <div class="cart_products" id="cart_products">

                <div class="cart_product" v-for="(product,index) in cart" :key="index">
        <div class="cart_product_img">
            <img :src='product.img' :alt="product.name" width="50" height="70"/>
        </div>
        <div class="cart_product_info">
                <div class="product_title">
                    <h6 style="font-style:oblique">{{product.name}}</h6>
                    <div class="quantity">
                        <button class="btn" >+</button>
                        <span class="quantity">1</span>
                        <button class="btn" >-</button>
                    </div>
                    <h4 style="text-align:end">{{product.price}}</h4>
                </div>
        </div>
    </div>
           </div>
           <!-- <hr/> -->
    </div>
    
</template>

<script src="./js/cart.js"/>
<style scoped>
  .cart_product{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:0rem 1rem;
    background-color: rgb(220, 217, 217);
    margin:.5rem;
    border-radius:10px;
  }

  .cart_products{
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 90vh;
    overflow: auto;
  }

  .quantity{
    display: flex;
  }
  
  .cart_product_info .product_title{
    padding: .5rem;
  }
@media (max-width:630px){
   
}

@media (min-width : 631px) and (max-width:900px) {
    
}
</style>