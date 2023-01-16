<template>
    <div class="cards">
    <div v-for="(product,index) in products" :key="index" class="card">
    <div class="image">
    <img :src="product.img" :alt="product.name"  />
        </div>
        <div class="info">
        <p>Name : {{product.name}}</p>
        <p>RAM: {{product.ram}}</p>
        <p> Ratings:{{product.rating}}</p>
        <p> Price:{{product.price}}</p>

        <p :style="[{'color':product.stock<5?'red':'black'}]"> stock:{{product.stock}}</p>
        <button  :disabled="!product.stock" @click="addtoCart(product)" >Stock Available</button>
        </div>
    </div>
    </div>
</template>

<script src="./js/ProductCard.js"></script>

<style scoped>
.card .image img {
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    
    object-fit: contain;
}
.card {
    max-height: 400px;
    min-height: 400px;
    box-shadow: rgb(80, 81, 84) 10px 10px 10px;
    position: relative;
    width: 20%;
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-image: initial;
    margin: 1rem;
    padding: 5px;
    border-radius: 10px;
}
.btn {
    box-sizing: border-box;
    color: white;
    background-color: rgb(40, 116, 240);
    padding: 4px;
    border-width: 3px;
    border-style: solid;
    border-color: white;
    border-image: initial;
    border-radius: 5px;
    width:100%;
}
.success{
    background: green;
}
.danger{
 background: red;    
}
.card .image {
    position: relative;
    width: 100%;
    flex: 0.6;
}
.card .info {
    width: 100%;
    background-color: rgb(242, 242, 242);
    flex: 0.3;
}.cards {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
</style>