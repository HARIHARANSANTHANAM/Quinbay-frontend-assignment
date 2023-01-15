import product_list from './productlist.js';
import numberWithCommas from './seperator.js';

let renderRating = Rating => {
    let output = '';
    for (let i = 1; i <=5; i ++) {
        if(i<Rating){
            output+='<span class="fa fa-star checked"></span>'
        }
        else{
            output+='<span class="fa fa-star"></span>'
        }

    }
    return output;
  };


const fetchProducts=(product_list)=>{
    let cards=document.getElementById("cards");
    cards.innerHTML='';
    const productCard=product_list.map((mobile)=>{
        return (`<div class="card">
        <div class="image">
            <img src="./assets/Image/pixel7.jpg" alt=${mobile.name}>    
        </div>
        <div class="info">
            <h3>${mobile.name}</h3>
                <br>
                ${renderRating(mobile.ratings)}
                ${mobile.ratings} Ratings<br>
                <span style="background-color:${mobile.color?mobile.color:"No colors"};width:20px;display:inline-block;height:20px;border-radius:20px"></span><br><span>color: ${mobile.color} </span>
                <h2>Rs ${numberWithCommas(mobile.price)}</h3>
            
        </div>
        <button class="btn success" onclick='addtoCart(${JSON.stringify(mobile)})'>Add to Cart</button></div>`)
    });
    
   
 
    productCard.forEach((product)=>{
        cards.innerHTML+=(product);
    });
    
    }
    
    
    fetchProducts(product_list);

    export {fetchProducts}