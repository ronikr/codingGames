
var gLogedIn = false;

$( document ).ready( showOrHideStats());



function login() {
    var elLogDiv = document.querySelector('.passField');
    var elLogButton = document.querySelector('.logButton');

    if (!gLogedIn) {
        elLogDiv.style.display = 'flex';
        elLogButton.innerText = 'logout';
        gLogedIn = true;

    }
    else {
        elLogDiv.style.display = 'none';
        elLogButton.innerText = 'login';
        sessionStorage.isAdmin = false;
        localStorage.isAdmin = false;
        gLogedIn = false;
        var userName = document.querySelector('#userName');
        var userPassword = document.querySelector('#password');
        userName.value = '';
        userPassword.value = '';
        showOrHideStats();

    }
}

// TODO: Handle logout
function logout() {

}

function checkIfAdmin (event){
    event.preventDefault();
    var userName = document.querySelector('#userName');
    var userPassword = document.querySelector('#password');
    var adminUserName = 'yaron';
    var adminPassWord = 'biton';
    if (userName.value === adminUserName && userPassword.value === adminPassWord){
        sessionStorage.isAdmin = true;
        handleStorage('isAdmin',true);
        window.open("welcome.html");
        showOrHideStats ();
    }
}
function handleStorage(name,value){
    sessionStorage[name] = value;
    var elRememberMe =  document.querySelector('#rememberMe');
    if (elRememberMe.checked){
        localStorage[name]= value;
    }
}
function showOrHideStats (){
    var elAdminStats = document.querySelector('.admin-stats');
    if (sessionStorage.isAdmin === 'true') {
        elAdminStats.style.display = 'flex';
    }
    else{
        elAdminStats.style.display = 'none';
    }
}
