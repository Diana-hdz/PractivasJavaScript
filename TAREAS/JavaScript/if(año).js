//Hacer un programa que permita saber si un año es bisiesto. Para que un año sea bisiesto debe ser divisible por 4 y no debe ser divisible por 100, excepto que también sea divisible por 400.
function EventListener(){
    document.getElementById("num").addEventListener("click",cal());
}
function cal(){
    var año = Number(document.getElementById("año").value);
    var impAño = document.getElementById("impAño");

    if (año/4 || año/100 ) { 
        impAño.innerText=  año + " " + "es un año bisiesto"; }
    else {
        impAño.innerText=  año + " " + "no es año bisiesto";
    }
}
    