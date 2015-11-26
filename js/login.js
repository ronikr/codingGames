// TODO: handle remember me
// TODO: encapsulate the storage

function login() {
    var secret = prompt("Know the secret baba?");

    var a = "aaa";
    if (secret === 'kama') {
        sessionStorage.isAdmin = true;
    }
    alert(a);
}

// TODO: Handle logout
function logout() {

}