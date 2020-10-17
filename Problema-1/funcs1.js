var boton=document.getElementById("boton_radio");

boton.addEventListener("click", facto);

function facto(){
	var n = document.getElementById("radio");
	var divhtml = document.getElementById("div_msg");
	var num = parseInt(n.value);
	var valor=1;
	valor= valor*((3.1416)*(num*num*num)*(4.0/3));
	divhtml.innerHTML = "El volumen de "+num+" es: "+ valor;
} 