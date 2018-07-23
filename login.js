window.onload = function() {
var button = document.getElementById("btn");
var name = document.getElementById("Name");
var password = document.getElementById("pass");


var auth = localStorage.getItem('auth');
if(auth) {
location.href = 'index.html';
}

var isValid = function() {
console.log('clicked', name.value, password.value);
var errNameRef = document.getElementById("Js-Name-ref");
var errPasswordRef = document.getElementById("Js-Pass-ref");
var match = name.value.match(/[A-Z0-9_]+@[a-z0-9]+\.[a-z]{2,3}/i);
if(!match) {
errNameRef.innerHTML = "Enter Valid email id";
return false;
} else if(!password.value) {
errNameRef.innerHTML = "";
errPasswordRef.innerHTML = "Enter Valid Password";
return false;
} else {
errNameRef.innerHTML = errPasswordRef.innerHTML = "";
return true;
}
}

name.onkeypress = function(e) {
isValid();
}
password.onkeypress = function(e) {
isValid();
}

button.onclick = function() {
if(isValid()) {
alert("login success");
localStorage.setItem('auth', name.value);
location.href="index.html"
}
}
}
