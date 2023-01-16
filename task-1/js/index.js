
function Search()
{
  alert("hi")
}

function checkLength(input,length){
    return input?input.length>=length?true:false:false;
}

NodeList.prototype.renderNodes=function(callback)
{
    for(var inputNode of this) 
    {
        callback(inputNode);
    } 
}

// document.getElementById("filter-form").addEventListener("submit",(e)=>{
//     console.log(e)
//     filterproduct.filterItems(e)
// })

const FetchURL=(url)=>{
    
    return new Promise((res,rej)=>{
    setTimeout(function processing(){
        success=false;
        if(success)
        {
            res(url+" is fetched");
        }
        else{
           rej("error");
        }
    },5000)
})
}

const demopromise=async function ()
{
    // FetchURL("www.google.com").then((res)=>{
    //     console.log(res);
    //     alert(res)
    // }).catch(err=>{
    //     console.log(error);
    // })

    const data=await FetchURL("www.google.com");
    // .then((res)=>alert(res)).catch((e)=>alert("error is catched "+e));

    console.log(data);
    alert(data);
}

function addMobile(event)
{
    event.preventDefault();
    var forms=document.getElementById("addMobileForm");
    var input=forms.querySelectorAll("input,select");
    console.log(input)
    let mobile={};
    console.log(input.length);
    let counter=0;

    input.renderNodes((node)=>{
        document.getElementById(node.id).style.border="none";
    })
    
    
    input.renderNodes((inputNode)=>{
        var value=inputNode?inputNode.value:null;
        if(!value)
        {
            alert(inputNode.id+" Should not be empty");
            counter++;
            if(counter==1){
            document.getElementById(inputNode.id).focus();
            }
            document.getElementById(inputNode.id).style.border="1px solid red";
        }
        else{
        mobile[inputNode.id]=value;
        }
    })
        
    if(counter=== 0)
    {
        alert("Data is added Successfully..");
        console.log("Data is added Successfully... :"+JSON.stringify(mobile));  
        const card=` <div class="card">
    <div class="image">
        <img src="./assets/Image/pixel7.jpg" alt=${mobile.mobilename}>    
    </div>
    <div class="info">
        <h3>${mobile.mobilename}</h3>
            <br>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            4.4 Ratings<br>
            <h2>Rs ${mobile.price}</h3>
        
    </div>
    <button class="btn success">Add to Cart</button>
</div>`
    document.getElementById("cards").innerHTML+=(card);
     input.renderNodes((node)=>{
        document.getElementById(node.id).value="";
     })
    }
   else{
    alert(counter+" fields are empty")
    console.log(counter+" fields are empty")
    }
}


function add()
{
    console.log(this);
}



// async function f(){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("")
//         }, 5000);
//     })
// }