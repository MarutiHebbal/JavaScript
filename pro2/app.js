window.onload=function () {
	var field=document.getElementById('field');
	var submit=document.getElementById('submit');
	var msg=document.getElementById('msg');
	

	var parseText=function(text){

		var finaltext=text.replace(/http[s]?\:\/\/[a-z0-9]+\.[a-z0-9]{2,3}/ig,function($1){
			return "<a href='"+$1+"' target='_blank'>"+$1+"</a>"
		}

			);
		return finaltext;
	}

	submit.onclick=function(){
		var text=field.value;
		var el=document.createElement("div");
		el.innerHTML=parseText(text);
		el.setAttribute('class','msg');
		msg.appendChild(el);
		field.value="";
			}
	// body...
}