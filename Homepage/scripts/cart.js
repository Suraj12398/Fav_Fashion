
let container = document.getElementById("container");
let filter = document.getElementById("filter");
let data=JSON.parse(localStorage.getItem("cart"))||[];

// console.log(data)
if(data.length==0){
    
    let h1=document.createElement("h1")
    h1.setAttribute("class","empty")
    h1.innerText="Cart is Empty please shop something...."
    container.append(h1);
}
display(data);

function display(data) {
  container.innerHTML = "";

  data.forEach((ele) => {
  console.log(ele)
      let box = document.createElement("div");
      box.setAttribute("class","box")
      let image = document.createElement("img");
      image.setAttribute("src", ele.image4);
      let des = document.createElement("p");
      des.innerText = ele.description.split(",")[0].trim().replace("[","");
      let price = document.createElement("h5");
      price.innerText = "Rs. " + ele["price-inr"];
      let name = document.createElement("h4");
      name.innerText = "From " + ele.name;

      
      let del=document.createElement("button");

      del.addEventListener("click",()=>{
        let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
        LS.splice(data.indexOf(ele),1);
        localStorage.setItem("cart",JSON.stringify(LS));
        display(LS);
        alert("Product Removed from cartlist");
    })
      del.innerText="Remove"

     
     
      box.append(image, name,des, price, del);
      container.append(box);
    
     
      
  });
}





