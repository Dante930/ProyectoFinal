function LimpiarFormulario(){
	document.getElementById('lolo').reset();
}

var suma=function (n1,n2){
	var num1= parseInt(document.getElementById("num1").value);
	var num2= parseInt(document.getElementById("num2").value);
	var r= num1 * num2;
	return	"Tu resultado es:" +r;
}
