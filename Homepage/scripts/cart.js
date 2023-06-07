
let container = document.getElementById("container");
let filter = document.getElementById("filter");
let data=JSON.parse(localStorage.getItem("cart"))||[];
let headingCart=document.getElementById("heading_cart");
let billTotal=document.getElementById("totalBill");
const form = document.getElementById('searchF');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
const searchValue = document.getElementById('SearchP').value;
localStorage.setItem('searchProduct', searchValue);
window.location.href="./searchPage.html";
}

console.log(data)

let total=00;
for(let i=0;i<data.length;i++){
  total+=data[i]["discountPriceInr"];
}
billTotal.innerText=total;

if(data.length==0){ 
    headingCart.innerText="! Cart is Empty please shop something...."
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
      price.innerText = "Rs. " + ele["discountPriceInr"];
      let name = document.createElement("h4");
      name.innerText = "From " + ele.name;

      
      let del=document.createElement("button");

      del.addEventListener("click",()=>{
        let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
        LS.splice(data.indexOf(ele),1);
        localStorage.setItem("cart",JSON.stringify(LS));
        display(LS);
        alert("Product Removed from cartlist");
        window.location.reload();
    })
      del.innerText="Remove"

     
     
      box.append(image, name,des, price, del);
      container.append(box);
    
  });
}





