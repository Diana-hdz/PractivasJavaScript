function EventListener(){
    document.getElementById("cal").addEventListener("click", calnum());
}
function calnum(){
    var Nnumeros = prompt("¿Cuántos números vas a ingresar");
    var numeros = document.getElementById("numeros");
    var contador = 0, contadorneg=0;
    var contador2 =1; contadorneg2=1;

    var i =0;
    while (i <= Nnumeros) {
        var numero = prompt("Ingresa un número");
        if(numero >= 0){
            contador = contador + contador2;
        }else{contadorneg = contadorneg + contadorneg2;
        }
        i++
    }
   
numeros.innerText = "Los numeros mayores o iguales a cero son:" + " " + contador + " " + "Los menores a cero son:" + contadorneg;

}
    