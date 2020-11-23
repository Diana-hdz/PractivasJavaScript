//Hacer un programa que permita saber si un año es bisiesto. Para que un año sea bisiesto debe ser divisible por 4 y no debe ser divisible por 100, excepto que también sea divisible por 400.
function EventListener(){
    document.getElementById("num").addEventListener("click",cal());
}
function cal(){
    var numero = Number(document.getElementById("numero").value);
    var impmens = document.getElementById("impmens");

   if(((numero % 4 == 0) && (numero % 100 != 0)) || (numero % 400 == 0))  { 
        impmens.innerText=  numero + " " + "es un año bisiesto"; }
   else {
       impmens.innerText=  numero + " " + "no es año bisiesto";
  }



 
}
    //(((numero % 4 == 0) && (numero % 100 != 0)) || (numero % 400 == 0)) 