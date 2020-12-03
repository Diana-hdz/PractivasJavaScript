function EjemploVariable(){
    // Declaracion de variable, es necesario declarar todas las variables para ejecutar mi aplicacion
    // var mayorde25 = false;
    // // var mayor de 25 = Boolean(false); (esta es otra forma de crear una variable tipo boolean)
    // mayorde25 = otravariable;
    // alert("Mostrar un mensaje no se ejcuta");
    // Nos debe mostrar un error debido a que no definidos la varibale "otravaribale"
    
    // var foco = false; //0 true == 1
    // 0==1
    //  if(foco == true){
        // alert("El foco esta encendido");
    // }else{
//alert("El foco esta apagado")
    //}

    // var foco1 = false
    // el signo ! es un operador logico que se utiliza para negar la informacion que tiene la variable
    // practicamente utilizar el operador  ! es como si en matematicas usamos este signo
    // if(!foco1 == true){
// alert("El foco esta encendido");
// else{
    //alert("El foco esta apagado")

    //} 
var a = 1; b = 2; c = 3;
var casado = true;
var mayorde25 = false;
var texto1 = "En un lugar de la marcha"

// Estamos imprimiendo el valor de la variable casado
console.log("La variable casado vale " + casado);

// Estamos imprimiendo el valor de la variable mayorde25
console.log("La variable mayorde25 vale" + mayorde25);

// Si multiplicaoms la viarable de tipo bloeano true por un numero automativ¡camente la variale true se convierte en 1 y se haria 1*X-
console.log("la variable casado si lo forzamos a que sea numerico vale" + casado * 5);

// si multiplicamos la variable de tipo boleano false por un numero automaicamente la variable false se convierte en 0 y se harioa 0*X =
console.log("La varible mayor25, si  lo multiplicamos por 5 vale " + mayorde25 * 5);
console.log("la variable casado ahora vale " + casado);

// sumar las variables, a +b+c, el resutado es 6
console.log("La suma de los numeros es:" + " " + (a + b + c));


console.log("Que obtenemos multiplicando texto con un numero" + " " + (texto1 * a));

// toString - se encarga de convertir el dato en un texto o una frase
// un booleano co un string imprime un treu como un texto
console.log("Mostramos lo equivalente de true  en texto" + " " + casado.toString());
console.log(texto1.toString());


var arreglo = ["Quiero", "Aprender"];
console.log(arreglo.toString());

// Imprimir el numero como asi fuera texto  y si yo suma a.tostring + b.tostring, solo junta los numeros
console.log(a.toString() + b.toString());
console.log(b.toString() + c.toString());
console.log(c.toString() + a.toString());
// suma a+ b
console.log(a +b );
}