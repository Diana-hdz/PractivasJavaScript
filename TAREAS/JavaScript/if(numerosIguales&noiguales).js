//Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
function EventListener(){
    document.getElementById("cal").addEventListener("click",calcular());
        document.getElementById("cal2").addEventListener("click",calcular2());
    }
function calcular(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var menor =document.getElementById("menor");

    if(num1 < num2){
        menor.innerText = "El primer número es menor";
    }
    else{
        menor.innerText = "El segundo número es menor"
     }
 }
/// ejercicio3 Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. Considerar el caso en que ambos números son iguales.

 function calcular2(){
     var num3 = Number(document.getElementById("num3").value);
     var num4 = Number(document.getElementById("num4").value);
     var Igual = document.getElementById("Igual");

     if(num3 < num4){
         Igual.innerText =  "El primer número es menor.";
     }
     else if(num4 < num3){  
     Igual.innerText ="El segundo número es menor.";
       } else
         Igual.innerText = "Los números son iguales.";
     }
       
