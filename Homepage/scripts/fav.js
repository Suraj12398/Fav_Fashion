
let container = document.getElementById("container");
let filter = document.getElementById("filter");
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let wish=JSON.parse(localStorage.getItem("wish"))||[];
let headingFav=document.getElementById("heading_fav")
// console.log(data)
if(wish.length==0){ 
    headingFav.innerText="! Wishlist is Empty please add something...."
}
display(wish);
const form = document.getElementById('searchF');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
const searchValue = document.getElementById('SearchP').value;
localStorage.setItem('searchProduct', searchValue);
window.location.href="./searchPage.html";
}

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
      let button = document.createElement("div");
    button.setAttribute("class","buttonDiv")
      let addCart=document.createElement("button");
      let del=document.createElement("button");
      
  
      button.append(addCart,del);


      addCart.addEventListener("click",()=>{
        addCart.innerHTML="Added";
        addCart.style.padding="10px";
  
        // Check if the product is already in the cart
        let itemInCart = cart.find((item) => item.id === ele.id);
        if (itemInCart) {
          alert("This item is already in your cart!");
          let LS  =  JSON.parse(localStorage.getItem("wish")) || [];
          LS.splice(data.indexOf(ele),1);
          localStorage.setItem("wish",JSON.stringify(LS));
          display(LS);
        } else {
          cart.push(ele);
          localStorage.setItem("cart", JSON.stringify(cart));
          let LS  =  JSON.parse(localStorage.getItem("wish")) || [];
          LS.splice(data.indexOf(ele),1);
          localStorage.setItem("wish",JSON.stringify(LS));
          display(LS);
        }
      });
      del.addEventListener("click",()=>{
        let LS  =  JSON.parse(localStorage.getItem("wish")) || [];
        LS.splice(data.indexOf(ele),1);
        localStorage.setItem("wish",JSON.stringify(LS));
        display(LS);
        alert("Product Removed from cartlist");
    })
      del.innerText="Remove"
        addCart.innerText="Add To Cart"
     
     
      box.append(image, name,des, price, button);
      container.append(box);
    
     
      
  });
}





