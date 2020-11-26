function EventListener(){
    document.getElementById("btncalcular").addEventListener("click", CalcularNumeros());
}

function CalcularNumeros(){

// Crear una variable para el arreglo
var arreglonumerico = [1,4,2,9,11,44,111,7,4];

// Crear variables para imprimir el resulatdo
var menoramayor = document.getElementById("imprimirmenoramayor");
var mayoramenor = document.getElementById("imprimirmayoramenor");

arreglonumerico.sort();
imprimirmenormayor.innerText = arreglonumerico.sort(MenoraMayor);
imprimirmayoramenor.innerText =  arreglonumerico.sort(MayoraMenor);

}

// Mandar llamar elementos para poder utilizarlos y hacer operaciones con ellos
function MenoraMayor(elem1, elem2){
    // return se encarga de finalizar la operacion y devolver el resultado
    return elem1 - elem2;
    // TERMINA LA FUNCION Y REGRESA EL VALOR
    // 1-4, 1-2, 1-9,
    // 4-2, 2-9, 2-11,
    // 4-9, 4-11.


}

function MayoraMenor(elem1, elem2){
     return elem2 -elem1 ;  //else if(elem>elem1);
}