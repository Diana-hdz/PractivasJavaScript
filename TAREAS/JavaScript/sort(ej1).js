function EventListener(){
    // Boton de arreglo1
    document.getElementById("objeto1").addEventListener("click", arreglo1());
    // Boton de arreglo2
    document.getElementById("objeto2").addEventListener("click", arreglos());

}
// Primer ejercicio 

function arreglo1(){
    var objeto1 = ["Moto", "soto", "Abaco", "abeja", "Sapo", "nieve", "Zumba", "barco"];
    var arreglo = document.getElementById("arreglo");
    var sort1 = document.getElementById("sort1");

    arreglo.innerText = (objeto1);

    sort1.innerText = "Sort:" + " " + (objeto1.sort());
}

// Segundo ejercicio 

function arreglos(){
    var objeto2 = ["bicicleta", "silla", "cama", "computadora", "celular", "salmon", "pared"];
    var arreglo2 = document.getElementById("arreglo2");
    var sort2 = document.getElementById("sort2");

    arreglo2.innerText = (objeto2);
    sort2.innerText = "Sort:" + " " + (objeto2.sort());
}
