<template>
<div>
 <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <!-- Image -->
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img :src="getImage()"
                    class="w-100" alt="Blue Jeans Jacket" />
                  
                </div>
                <!-- Image -->
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <!-- Data -->
                <p><strong>{{product?.name}}</strong></p>
                <p>Brand: {{product?.brand}}</p>
                <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item" @click="removeFromCart()">
                  <i class="fas fa-trash"></i>
                </button>
                <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i class="fas fa-heart"></i>
                </button>
                <!-- Data -->
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <!-- Quantity -->
                <div class="d-flex mb-4" style="max-width: 300px">
                  <button class="btn btn-light px-3 me-2"
                    @click="decreaseQuantity(product)">
                    <i class="fas fa-minus"></i>
                  </button>

                  <div class="form-outline">
                    <input id="form1" min="0" name="quantity" :value="product?.quantity" type="number" class="form-control" placeholder="quantity" />
                  </div>

                  <button class="btn btn-light px-3 ms-2"
                    @click="increaseQuantity(product)">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <!-- Quantity -->

                <!-- Price -->
                <p class="text-start text-md-center">
                  <strong>{{product?.price?.priceDisplay}}</strong>
                </p>
                <!-- Price -->
              </div>
            </div>
            <!-- Single item -->

            <hr  />
</div>
</template>
<script src="./js/cart.js"/>



<style scoped>
.quantity{
    display:revert!important;
}
.item-footer{
    display:flex;
    justify-content: end;
    align-items: center;
}

.removebtn{
    display:revert;
}
  .cart_product{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:0rem 1rem;
    background-color: rgb(220, 217, 217);
    margin:.5rem;
    border-radius:10px;
    min-height:150px;
  }
.cart_product_img{
    position: relative;
    flex:.4;
}
  .cart_product_img img{
    width: auto;
    margin: auto;
    object-fit: cover;
    object-fit: scale-down;
    display: block;
    border-radius: 8px;
    min-height: -webkit-fill-available;
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

  .cart_product_info{
    flex:.6;
  margin:auto;
  }
  
@media (max-width:630px){
   
}

@media (min-width : 631px) and (max-width:900px) {
    
}
</style>