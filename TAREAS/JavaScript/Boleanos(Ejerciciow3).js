function EventListener(){
    document.getElementById("btn").addEventListener("click", calcularw3());
}
function calcularw3(){

    var numero = Boolean (100);
    var decimal = Boolean (3.14);
    var negativo = Boolean (-15);
    var Hola = Boolean("Hello") ;
    var falso = Boolean("false");
    var suma = Boolean(7+ 1 + 3.14); 
    var cero = Boolean (x=0);
    var ceroneg = Boolean (x= -0);
    var cadenavacia = Boolean (" ");
    var indefinida = Boolean (x);
    var nulo = Boolean (null);
    var falso = Boolean (false);
    var Nan= Boolean (10 / "H");

    var primer = document.getElementById("primer");
    var segundo = document.getElementById("segundo");
    var tercero = document.getElementById("tercero");
    var cuarto = document.getElementById("cuarto");
    var quinto = document.getElementById("quinto");
    var sexto = document.getElementById("sexto");
    var mensj = document.getElementById("mensj");
    var mensj2 = document.getElementById("mensj2");
    var mensj3 = document.getElementById("mensj3");
    var mensj4 = document.getElementById("mensj4");
var mensj5 = document.getElementById("mensj5");
var mensj6 = document.getElementById("mensj6");
var mensj7 = document.getElementById("mensj7");

primer.innerText = "El numero 100 en booleano es:" + " " + numero;
segundo.innerText = "El numero 3.14 en booleano es:" + " " + decimal;
tercero.innerText = "El numero -3.15 en booleano es:" + " " + negativo;
cuarto.innerText = "La palabra HOLA en booleano es:" + " " + Hola;
quinto.innerText = "La palabra FALSO en booleano es:" + " " + falso;
sexto.innerText = " La suma de los numeros (7 + 1 + 3.14 ) en booleano es:" + " "+ suma;
mensj.innerText = "El numero 0 en booleano es:" + " " + cero;
mensj2.innerText = "El numero -0 en booleano es:" + " " + ceroneg;
mensj3.innerText = "Las comillas vacias ' ' en booleano es:" + " " + cadenavacia;
mensj4.innerText = "un numero indefinido en booleano es:"+ " " + indefinida;
mensj5.innerText = "un numero null en booleano es:" + " " + nulo;
mensj6.innerText = "un numero falso en boleano es :" + " " + falso;
mensj7.innerText = "un numero (10/h)dividido en una letra en booleano es:" + " " + Nan;

}