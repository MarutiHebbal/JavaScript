window.onload = function() {
var button = document.getElementById("btn");
var uname = document.getElementById("Name");
var upass = document.getElementById("pass"); 

isValid=function(){
	var errN=document.getElementById("Js-Name-ref");
	var errp=document.getElementById("Js-Pass-ref");
	var match=uname.value.match(/[A-za-z0-9_]+@[A-za-z0-9]+\.[a-z]{2,3}/i);
	if(!match){
		errN.innerHTML="Enter valid Email";
		return false;
	}else if(!upass.value){
		errN.innerHTML="";
		errp.innerHTML="Enter valid Password";

	}else{
		errN.innerHTML=errp.innerHTML="";
		return true;
	}
}
uname.onkeypress =function(){
	isValid();

}
upass.onkeypress=function(){
	isValid();
}
button.onclick = function() {
if(isValid())
	{
		alert("Login Success")
	}
}

}
