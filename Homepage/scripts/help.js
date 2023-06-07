let btn=document.getElementById("contact");

btn.addEventListener("click",()=>{
    alert("CALL US : 4562845")
})
const form = document.getElementById('searchF');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
const searchValue = document.getElementById('SearchP').value;
localStorage.setItem('searchProduct', searchValue);
window.location.href="./searchPage.html";
}
