<template>
   <div class="card" @click="showProductPage">
            <div class="image">
                <img :src="product.images[0]" :alt="product.name">    
            </div>
            <div class="info">
            <div style="padding:.5rem">
            <h6 class="product_name">{{product.name}}</h6>
                <h6 style="font-weight:bold">{{product.brand?product.brand:''}}</h6>    
                    <br>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>|
                    {{product.review.rating}} Ratings
                    
                    <br><br>
                    <!-- <h6>Color:{{product.color}}</h6> -->
                    <h6 style="text-align:end">{{product.price.priceDisplay}}</h6>
                     <!-- <h6 v-if="product.stock">Stock: {{product.stock}}</h6> -->
                    <!-- <h6 :class="{'warning-text':true}" v-else>Unavailable</h6> -->
            </div>
            </div>
            <button class="btn success" @click="addtoCart(product)" :disabled="product.stock<1">Add to Cart</button>
        </div>
        
</template>
<script src="./js/Product.js"/>
<style scoped>
.product_name {
  white-space: nowrap; 
  width: 100%; 
  overflow: hidden;
  text-overflow: ellipsis; 
}
</style>