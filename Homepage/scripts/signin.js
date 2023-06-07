function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials [if you are new Please sign up]");
    }
    else{

        alert("Enjoy FAV Fashion");
        window.location.href="/index.html";
    }
    e.preventDefault();
}
const form = document.getElementById('searchF');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
const searchValue = document.getElementById('SearchP').value;
localStorage.setItem('searchProduct', searchValue);
window.location.href="./searchPage.html";
}
