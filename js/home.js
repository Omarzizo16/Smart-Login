var logout = document.querySelector('.nav-link');
var header = document.querySelector('.homeHeader');

header.innerHTML = `<h2>Welcome ${localStorage.getItem('userName')}</h2>`;

logout.addEventListener('click' , function(){
    logOut();
});
function logOut(){
    location.href='./index.html'
    localStorage.removeItem('userName');
}
