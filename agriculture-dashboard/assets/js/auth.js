function login(){
localStorage.setItem('loggedIn', true);
window.location='index.html';
}


function logout(){
localStorage.removeItem('loggedIn');
window.location='login.html';
}


function checkAuth(){
if(!localStorage.getItem('loggedIn')){
window.location='login.html';
}
}