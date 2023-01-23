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
                      <button class="btn btn-primary" @click="filterResults">Apply Filters</button>
                    </center>
            </form>
        </div>

        </section>
    </aside>
    <section class="mobiles">
        <h3>List of Products</h3>
        <div class="cards" id="cards">
        <ProductCardComponent v-for="(product,index) in filterProducts" :key="index" :product="product"/>
 
    </div>
    </section>
    
</div>


</div>
</template>

<link rel="stylesheet" src="../styles/index.css" />

<script src="./js/HomePage.js"></script>
