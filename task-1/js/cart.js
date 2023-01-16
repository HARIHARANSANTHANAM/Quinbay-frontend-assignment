
import numberWithCommas from './seperator.js';

export let Globalcart=[]




function refreshGlobalCart(){

      
    const cart_products=document.querySelector("#cart_products");
    const UICart= Globalcart.map((product)=>{
        return (
            `<div class="cart_product">
            <div class="cart_product_img">
                <img src="./assets/Image/Apple_14.jpg" alt=${product.name} width="50" height="70"/>
            </div>
            <div class="cart_product_info">
                    <div class="product_title">
                        <h6 style="font-style:oblique">${product.name}</h6>
                        <div class="quantity">
                            <button class="btn" onclick='incrementQuantity(this,${JSON.stringify(product)})'>+</button>
                            <span class="quantity">${product.quantity}</span>
                            <button class="btn" onclick='decrementQuantity(this,${JSON.stringify(product)})'>-</button>
                        </div>
                        <h4 style="text-align:end">${numberWithCommas(product.price)}</h4>
                    </div>
            </div>
        </div>`
    )
    })
    
    cart_products.innerHTML=''

    UICart.forEach((cart)=>{
        cart_products.innerHTML+=cart;
    })
   

}

function UpdateCartDOM(element,parent,child)
{
    let newElement=document.createElement('div')
    newElement.setAttribute("class","cart_product");

    newElement.innerHTML=child;

    parent.insertBefore(newElement,element);
    parent.removeChild(element)
}


// Increment quantity of cart product
window.incrementQuantity=(element,product)=> {
let quantityElement = element.parentElement.querySelector(".quantity");
let currentQuantity = parseInt(quantityElement.innerHTML);
quantityElement.innerHTML = currentQuantity + 1;



 const findproduct=Globalcart.find((cart)=> {if(JSON.stringify(product)===JSON.stringify(cart)){ console.log("find "+JSON.stringify(cart));return cart;}});
 findproduct.quantity+=1;
 console.log(Globalcart)
 const newcart=`<div class="cart_product_img">
 <img src="./assets/Image/Apple_14.jpg" alt=${product.name} width="50" height="70"/>
</div><div class="cart_product_info">
                    <div class="product_title">
                        <h6 style="font-style:oblique">${findproduct.name}</h6>
                        <div class="quantity">
                            <button class="btn" onclick='incrementQuantity(this,${JSON.stringify(findproduct)})'>+</button>
                            <span class="quantity">${findproduct.quantity}</span>
                            <button class="btn" onclick='decrementQuantity(this,${JSON.stringify(findproduct)})'>-</button>
                        </div>
                        <h4 style="text-align:end">${numberWithCommas(findproduct.price)}</h4>
                    </div>
            </div>`
 console.log(element.closest(".cart_product"));
 let oldcard=element.closest(".cart_product");
 let parent=oldcard.parentNode;
    UpdateCartDOM(oldcard,parent,newcart)
    



}

// Decrement quantity of cart product
window.decrementQuantity=(element,product) =>{
let quantityElement = element.parentElement.querySelector(".quantity");
let currentQuantity = parseInt(quantityElement.innerHTML);
const findproduct=Globalcart.find((cart)=> {if(JSON.stringify(product)===JSON.stringify(cart)){ return cart;}});
if (currentQuantity > 1) {
findproduct.quantity-=1;
const newcart=`<div class="cart_product_img">
<img src="./assets/Image/Apple_14.jpg" alt=${product.name} width="50" height="70"/>
</div><div class="cart_product_info">
                   <div class="product_title">
                       <h6 style="font-style:oblique">${findproduct.name}</h6>
                       <div class="quantity">
                           <button class="btn" onclick='incrementQuantity(this,${JSON.stringify(findproduct)})'>+</button>
                           <span class="quantity">${findproduct.quantity}</span>
                           <button class="btn" onclick='decrementQuantity(this,${JSON.stringify(findproduct)})'>-</button>
                       </div>
                       <h4 style="text-align:end">${numberWithCommas(findproduct.price)}</h4>
                   </div>
           </div>`
  quantityElement.innerHTML = currentQuantity - 1;
  let oldcard=element.closest(".cart_product");
  let parent=oldcard.parentNode;
  UpdateCartDOM(oldcard,parent,newcart)
}
else {
    Globalcart=Globalcart.filter(cart=>JSON.stringify(product)!==JSON.stringify(cart))
    console.log(Globalcart)
    let cartProduct = element.closest(".cart_product");
    cartProduct.remove();
  }

}


window.addtoCart=(product)=>{
        const cart=document.getElementById("cart");
        const cart_products=document.querySelector("#cart_products");
        const {name,price} =product ; //destructuring 
        product['quantity']=1;
        if(Globalcart.every((cart)=>{
            if(JSON.stringify(cart)===JSON.stringify(product)){
                return false;
            }
            return true;
        })){

        Globalcart.push(product)
  
        console.log(product);   
        const cart_product=` <div class="cart_product">
        <div class="cart_product_img">
            <img src="./assets/Image/Apple_14.jpg" alt=${name} width="50" height="70"/>
        </div>
        <div class="cart_product_info">
                <div class="product_title">
                    <h6 style="font-style:oblique">${name}</h6>
                    <div class="quantity">
                        <button class="btn" onclick='incrementQuantity(this,${JSON.stringify(product)})'>+</button>
                        <span class="quantity">1</span>
                        <button class="btn" onclick='decrementQuantity(this,${JSON.stringify(product)})'>-</button>
                    </div>
                    <h4 style="text-align:end">${numberWithCommas(price)}</h4>
                </div>
        </div>
    </div>`;
    
        cart_products.innerHTML+=cart_product;
        }

    }

window.checkout=()=>{
        alert(Globalcart.length+" products in the shopping cart");
    }
