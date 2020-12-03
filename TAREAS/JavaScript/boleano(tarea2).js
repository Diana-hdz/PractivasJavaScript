function EventListener(){
    document.getElementById("btn").addEventListener("click", calcularBoleano());
}
function calcularBoleano(){
    var a =24; b=26;
    var pizza = true;
    var hamburguesa = false;
var suma1 = document.getElementById("suma1");
var string = document.getElementById("string");
var suma2 = document.getElementById("suma2");
var string2 = document.getElementById("string2");
var suma = document.getElementById("suma");

suma1.innerText= "La variable pizza vale:" + pizza;
string.innerText = "La variable pizza usando string:" + pizza.toString();

suma2.innerText = "La variable hamburguesa vale:" + hamburguesa;
string2.innerText = "La variable hamburguesa usando string:" + hamburguesa.toString();

suma.innerText = "La suma de las variables a y b es :" + (a + b);


  
}