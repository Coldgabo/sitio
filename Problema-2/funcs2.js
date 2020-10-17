var boton=document.getElementById("boton_exe");

boton.addEventListener("click", facto);

function facto(){
	var x = document.getElementById("ejeX");
	var y = document.getElementById("ejeY");
	var divhtml = document.getElementById("div_msg");
	var hoes = parseInt(x.value);
	var perras= parseInt(y.value);

	if(hoes>0 && perras>0)
	{
		divhtml.innerHTML = "El Eixe es Q1";
	}
	else if(hoes<0 && perras>0)
	{
		divhtml.innerHTML = "El Eixe es Q2";
	}
	else if(hoes<0 && perras<0)
	{
		divhtml.innerHTML = "El Eixe es Q3";
	}
	else if(hoes>0 && perras<0)
	{
		divhtml.innerHTML = "El Eixe es Q1";
	}
	else if(hoes==0 && perras==0)
	{
		divhtml.innerHTML = "ORIGEN";
	}
	else if(hoes==0 && perras>0)
	{
		divhtml.innerHTML = "El Eixe es Y";
	}
	else if(hoes==0 && perras<0)
	{
		divhtml.innerHTML = "El Eixe es Y";
	}
	else if(hoes<0 && perras==0)
	{
		divhtml.innerHTML = "El Eixe es X";
	}
	else if(hoes>0 && perras==0)
	{
		divhtml.innerHTML = "El Eixe es X";
	}
} 