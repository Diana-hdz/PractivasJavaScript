function MetodosdeArreglos(){

    var ArregloNumeros = [20,3,4,6,8,5,0,4];

    var arreglo2 = [2,5,6,7,0];

    var arreglo3 = [1,3,11,4,33,111,2,444,5,6];

    var arreglo4 = ["papel", "hoja", "Sapo", "Pelusa"];

    var arreglo5 = ["Quiero", "aprender"]


// agrega el numero al final del arreglo y ademas cuent cuantos numeros son en total
    console.log(ArregloNumeros[5]);

    console.log(ArregloNumeros);
    
    console.log(ArregloNumeros.push(10));

    //slice() - Te imprime el arreglo completo

    console.log(ArregloNumeros.slice());

    // agrega el numero al inicio del arreglo
    console.log(arreglo2.unshift(15));

    console.log(arreglo2.slice());

    // se utiliza para ordenar alfabeticamente
    console.log(arreglo3.sort());
    console.log(arreglo3.slice());

    console.log(arreglo4);
    console.log(arreglo4.sort());

    // pop
    //Elimia el ultimo arreglo 


console.log(ArregloNumeros.pop());
console.log(ArregloNumeros.slice());


console.log(ArregloNumeros.shift());
console.log(ArregloNumeros.slice());


console.log(ArregloNumeros.reverse());

console.log(arreglo5.join( " "));
}