function Search()
{
  alert("hi")
}

function checkLength(input,length){
    return input?input.length>=length?true:false:false;
}


function addMobile(event)
{
    event.preventDefault();
    var forms=document.getElementById("addMobileForm");
    var input=forms.querySelectorAll("input,select");
    var mobile={};

    for(var inputNode of input)
    {
        var value=inputNode?inputNode.value:null;
        if(!value)
        {
            alert(inputNode.id+" Should not be empty");
            document.getElementById(inputNode.id).focus();
            return; 
        }
        mobile[inputNode.id]=inputNode.value;
    }
    alert("Data is added Successfully..");
    console.log("Data is added Successfully... :"+JSON.stringify(mobile));

}

