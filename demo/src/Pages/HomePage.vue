<template>
<div id="body">
    <div class="header">
            <div class="logo">
                <img style="max-width:100%;" src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg"/>
            </div>
            
            <div class="search_nav_container">
            <div class="searchcontainer"> 
                <form id="searchform" style="display:flex" @submit.prevent="searchProduct">
            <input type="text" placeholder="Search.." class="search" v-model="searchQuery">
            <button class="searchBtn" style="cursor:pointer" >Search</button>
        </form>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="products.html" >Products</a>
                <a href="#" >Contactus</a>
            </nav>
            <nav class="show-sm">

                <a href="#">Home</a>
                <a href="products.html" >Products</a>
                <a href="#" >Contactus</a>
            </nav>
        </div>
    </div>
    <div class="body">
    <aside>
        <section>
            <!-- <h1><center>Add new Mobiles</center></h1>
            <hr>
            <div class="container">
            <form id="addMobileForm">
                <div class="row">
                    <div class="col-25">
                        <label>Mobile Name: </label>
                    </div>
                    <div class="col-75">
                        <input type="text" placeholder="Mobile Name" id="mobilename">
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>RAM Size: </label> 
                    </div>
                    <div class="col-75">
                        <select id="RAM">
                            <option>4GB</option>
                            <option>6GB</option>
                            <option>8GB</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-25">
                        <label>ROM Size: </label>
                    </div>
                    <div class="col-75">
                        <input type="radio" name="32" value="32GB"/>

                        <input type="radio" name="64" value="32GB"/>

                        <input type="radio" name="128" value="32GB"/>
                        <select id="ROM">
                            <option>32GB</option>
                            <option>64GB</option>
                            <option>128GB</option>
                            <option>256GB</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Price:</label>
                    </div>
                    <div class="col-75">
                        <input type="number" id="price" min="1">
                    </div>
                </div>
                   
                      <br>
                      
                <center>
                <button class="btn">Add Mobile</button>
                <button id="example"  type="button"> Example </button>
            </center>
            </form>
        </div> -->
        <h1><center>Filters</center></h1>
        <hr>
        <div class="container">
            <form id="filter-form" >
                <div class="row">
                    <div class="col-25">
                        <label>Brand</label>
                    </div>
                    <div class="col-75">
                        <div v-for="(brand,index) in renderFilter.brand" :key="index">
                        <input type="checkbox"  v-model="selectedBrand" name="brand" :value="brand" >{{brand}}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Color</label>
                    </div>
                    <div class="col-75">
                         <div v-for="(color,index) in renderFilter.color" :key="index">
                        <input type="checkbox" v-model="selectedColor" name="color" :value="color" >{{color}}
                         </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Price:</label> 
                    </div>
                    <div class="col-75">
                        <input type="range" name="price" v-model="price.value" :min="price.min" :max="price.max">{{numberWithCommas(price.value)}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Ratings:</label>
                    </div>
                    <div class="col-75">
                          <input type="range" name="ratings" v-model="ratings.value" :min="ratings.min" :max="ratings.max">{{ratings.value}}
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
        <h1>List of mobiles</h1>
        <div class="cards" id="cards">
        <div class="card" v-for="(product,index) in filterProducts" :key="index">
            <div class="image">
                <img :src="product.img" :alt="product.model">    
            </div>
            <div class="info">
            <div style="padding:.5rem">
            <h3>{{product.model}}</h3>
                brand: {{product.name}}
             
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>|
                    {{product.rating}} Ratings<br>
                    <h4>Color:{{product.color}}</h4>
                    <h2>Rs {{numberWithCommas(product.price)}}</h2>
                     <h4 v-if="product.stock">Stock: {{product.stock}}</h4>
                    <h4 :class="{'warning-text':true}" v-else>Unavailable</h4>
            </div>
            </div>
            <button class="btn success" @click="addtoCart(product)" :disabled="product.stock<1">Add to Cart</button>
        </div>  
    </div>
    </section>
    <div id="cart" class="cart container">

        <div>
            Shopping Cart
        </div> <br>
        <div class="cart_products" id="cart_products">
    </div>
        

    </div>
</div>
<footer>

    <h5 class="content">
    All rights are reserved Copyrights@2023
</h5>

<button class="btn" onclick="checkout()">Check out</button>
</footer>

</div>
</template>

<link rel="stylesheet" src="../styles/index.css"/>

<script src="./js/HomePage.js"></script>