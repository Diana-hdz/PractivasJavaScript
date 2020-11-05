function EventListener(){
    document.getElementById("resultado").getElementById("click", comparar());
}
function comparar(){

    var num1 = Number(document.getElementById("num1").value);

    var num2 = Number(document.getElementById("num2").value);

    var Imprimircomaparacion = document.getElementById("Imprimircomparacion");

    if ( num1 % num2 == 0){
        Imprimircomaparacion.innerText = "El primer número es multiplo del segundo número "
    }
    else if( num2 % num1 == 0){
        Imprimircomaparacion.innerText = "El segundo número es multiplo del primer número"
    }
}