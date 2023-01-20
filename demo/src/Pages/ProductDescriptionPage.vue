<template>
    <div>
    <HeaderComponent />
          <main class="container">
 
  <!-- Left Column / Headphones Image -->
  <div class="left-column">
 <!-- {{product.images[0]}} -->
   <img  :src="getImage()" alt="" />
  </div>
 
 
  <!-- Right Column -->
  <div class="right-column">
 
    <!-- Product Description -->
    <div class="product-description">
      <span>{{product?.name}}</span>
      <h1>{{product?.brand?.name}}</h1>
      <p v-html="product?.uniqueSellingPoint?product.uniqueSellingPoint:''"></p>
    </div>
 
    <!-- Product Configuration -->
    <div class="product-configuration">
 
      
      <!-- Cable Configuration -->
      <div class="cable-config">
        <span>tags</span>
 
        <div class="cable-choose" >
          <button v-for="(tags,index) in product?.tags" :key="index">{{tags}}</button>
        </div>
 
        <a href="#" class="anchor">How to configurate your product</a>
      </div>
    </div>
 
    <!-- Product Pricing -->
    <div class="product-price">
      <!-- <span>{{product.price.priceDisplay}}</span> -->
      <a href="#" class="cart-btn">Add to cart</a>
    </div>
  </div>
</main>
    </div>
    
</template>

<script src="./js/ProductDescription.js"/>
<style scoped>
.container {
  max-width: 1200px;
  margin: 5rem auto;
  padding: 15px;
  display: flex;
}
.left-column {
  width: 65%;
  position: relative;
}

.anchor{
    margin:0;
    color:#0d6efd;
    background:none;
}
 
.right-column {
  width: 35%;
  margin-top: 60px;
}
.left-column img {
  width: 95%;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  display: block;
  transition: all 0.3s ease;
  object-fit: contain;
}
 

/* Product Description */
.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}
.product-price {
  display: flex;
  align-items: center;
}
 
.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}
 
.cart-btn {
  display: inline-block;
  background-color: #0d6efd;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.cart-btn:hover {
  background-color: #0d6dfdc6;
}

.cable-choose {
  margin-bottom: 20px;
}
 
.cable-choose button {
  border: 2px solid #E1E8EE;
  border-radius: 6px;
  padding: 13px 20px;
  font-size: 14px;
  color: #5E6977;
  background-color: #fff;
  cursor: pointer;
  transition: all .5s;
}
 
.cable-choose button:hover,
.cable-choose button:active,
.cable-choose button:focus {
  border: 2px solid #86939E;
  outline: none;
}
 
.cable-config {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
@media (max-width: 940px) {
  .container {
    flex-direction: column;
    margin-top: 60px;
  }
 
  .left-column,
  .right-column {
    width: 100%;
  }
 
  .left-column img {
    width: 300px;
    right: 0;
    margin: auto;
    left: initial;
     position: relative;
  }
}
 
@media (max-width: 535px) {
  .left-column img {
    width: 220px;
    margin:auto;
    position: relative;
  }
}
</style>