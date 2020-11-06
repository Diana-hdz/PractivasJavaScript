function EventListener(){
    document.getElementById("resultado").getElementById("click", comparar());
}
function comparar(){

    var num1 = Number(document.getElementById("num1").value);

    var num2 = Number(document.getElementById("num2").value);

    var Imprimircomaparacion = document.getElementById("Imprimircomparacion");

    if ( num1 % num2 == 0){
        Imprimircomaparacion.innerText = "El primer número es multiplo del segundo número "
    } else {

        Imprimircomaparacion.innerText = "El primer número no es multiplo del segundo número"
     }
}