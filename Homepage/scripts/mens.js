let url = "https://dfabrica-data-app.onrender.com/products?sex=M";
let myData;
// console.log("men")

async function getData(url) {
  let data = await fetch(url);

  myData = await data.json();
  // console.log(myData);
  return myData;
}

getData(url)
  .then((data) => {
    // console.log(data);
    display(data);
  })
  .catch((error) => {
    console.error(error);
  });


let container = document.getElementById("container");
let filter = document.getElementById("filter");
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let wish=JSON.parse(localStorage.getItem("wish"))||[];

function display(data) {
  container.innerHTML = "";

  data.forEach((ele) => {
  
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
      let button = document.createElement("div");
      button.setAttribute("class","buttonDiv")
      let addCart=document.createElement("button");
      let addFav=document.createElement("button");
      

      button.append(addCart,addFav);
      addCart.innerText="Add to Cart";
      addFav.innerText="Add to Fav";
      box.append(image, name,des, price, button);
      container.append(box);
    
      addCart.addEventListener("click",()=>{
        addCart.innerHTML="Added";
        addCart.style.padding="10px";
  
        // Check if the product is already in the cart
        let itemInCart = cart.find((item) => item.id === ele.id);
        if (itemInCart) {
          alert("This item is already in your cart!");
        } else {
          cart.push(ele);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
      
      addFav.addEventListener("click",()=>{
        addFav.innerHTML="Wishlisted";
        addFav.style.backgroundColor="red";
        addFav.style.padding="10px";
  
        // Check if the product is already in the wish list
        let itemInWishList = wish.find((item) => item.id === ele.id);
        if (itemInWishList) {
          alert("This item is already in your wish list!");
        } else {
          wish.push(ele);
          localStorage.setItem("wish", JSON.stringify(wish));
        }
      });
  });
}


filter.addEventListener("change",(el)=>{
  getData(url)
  .then((data) => {
    // console.log(data)
    let newData=data.filter((e)=>{
    return el.target.value===e.category;
    })
    display(newData)
  })
  .catch((error) => {
    console.error(error);
  });
})




