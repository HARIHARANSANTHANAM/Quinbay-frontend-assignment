<template>
<div id="body">
    <HeaderComponent @search="search"/>
    <div class="body">
    <aside>
        <section>
        <!-- <button @click="changeUser()">change User</button>
        <button @click="deleteUser()">Delete User</button> -->
        <h3><center>Filters</center></h3>
        <hr>
        <div class="container">
            <form id="filter-form" >
                <div class="row">
                    <div class="col-25">
                        <label style="font-weight:900">Brand</label>
                    </div>
                    <div class="col-75">
                        <div id="rr-element" v-for="(brand,index) in renderFilter.brand" :key="index">
                        <input type="checkbox"  v-model="selectedBrand" name="brand" :value="brand" >
                        <label>{{brand}}</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label style="font-weight:900">Color</label>
                    </div>
                    <div class="col-75">
                         <div id="rr-element" v-for="(color,index) in renderFilter.color" :key="index">
                        <input type="checkbox" v-model="selectedColor" name="color" :value="color" >
                        <label>{{color}}</label>
                         </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-25">
                        <label style="font-weight:900">Price</label>
                    </div>
                    <div class="col-75">
                         <div id="rr-element" v-for="(pricerange,index) in Object.entries(pricerange)" :key="index">
                        <input type="checkbox" v-model="selectedPrice" name="color" :value="pricerange[1]" >
                          <label>{{pricerange[0]}}</label>
                         </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label style="font-weight:900">Ratings</label>
                    </div>
                    <div class="col-75">
                     <div id="rr-element" >
                          <input type="range" name="ratings" v-model="ratings.value" :min="ratings.min" :max="ratings.max">
                          <label>{{ratings.value}}</label>
                     </div>
                    </div>
                </div>
                   
                      <br>
                      <center>
                      <button class="btn" @click="filterResults">Apply Filters</button>
                    </center>
            </form>
        </div>

        </section>
    </aside>
    <section class="mobiles">
        <h3>List of mobiles</h3>
        <div class="cards" id="cards">
        <ProductCardComponent v-for="(product,index) in filterProducts" :key="index" :product="product"/>
        <!-- <div class="card" v-for="(product,index) in filterProducts" :key="index">
            <div class="image">
                <img :src="product.img" :alt="product.model">    
            </div>
            <div class="info">
            <div style="padding:.5rem">
            <h6>{{product.model}}</h6>
                brand: {{product.name}}
             
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star che cked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>|
                    {{product.rating}} Ratings<br>
                    <h6>Color:{{product.color}}</h6>
                    <h2 style="text-align:end">$ {{product.price | CurrencySepeartor}}</h2>
                     <h6 v-if="product.stock">Stock: {{product.stock}}</h6>
                    <h6 :class="{'warning-text':true}" v-else>Unavailable</h6>
            </div>
            </div>
            <button class="btn success" @click="addtoCart(product)" :disabled="product.stock<1">Add to Cart</button>
        </div>   -->
    </div>
    </section>
    <!-- <div id="cart" class="cart container">

        <div>
            Shopping Cart
        </div> <br>
        <div class="cart_products" id="cart_products">
    </div>
        

    </div> -->
</div>
<!-- <footer>

    <h5 class="content">
    All rights are reserved Copyrights@2023
</h5>

<button class="btn" onclick="checkout()">Check out</button>
</footer> -->

</div>
</template>

<link rel="stylesheet" src="../styles/index.css" />

<script src="./js/HomePage.js"></script>
