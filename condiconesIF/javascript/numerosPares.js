function EventListener(){
    document.getElementById("resultado").addEventListener("click", comparacion());
 }
 function comparacion() {

    var num1 = Number(document.getElementById("num1").value);

    var Imprimirresultado = document.getElementById("Imprimirresultado");

    if( num1 %2 == 0){
        Imprimirresultado.innerText = "Es un número Par";

    }
    else
    {
        Imprimirresultado.innerText = "No es un numero Par ";
    }
}