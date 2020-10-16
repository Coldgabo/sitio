var boton=document.getElementById("boton_fact");
var n = document.getElementById("factorial");
var divhtml = document.getElementById("div_msg");

boton.addEventListener("click", facto);
var num = parseInt(n.value);
function facto(){
	var facto=1;
	for(var i=num; i>=1; i--){
		facto *= i;
	}
	div_msg.innerHTML = "El factorial de "+num+" es: "+ facto;
}