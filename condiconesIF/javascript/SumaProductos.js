function EventListener(){
    document.getElementById("total").addEventListener("click", Calcularprecio());
}

function Calcularprecio(){

    var presupuesto = Number(document.getElementById("dinero").value);
    
    var costo = Number(document.getElementById("costo").value);

    var costo2 = Number(document.getElementById("costo2").value);

    var costo3 = Number(document.getElementById("costo3").value);
    
    var costo4 = Number(document.getElementById("costo4").value);

    var Imprimirtotal = document.getElementById("Imprimirtotal");

    var Imprimirmensaje = document.getElementById("Imprimirmensaje");

    var Total = costo + costo2 + costo3 + costo4;

    if( Total < presupuesto) {

        Imprimirtotal.innerText = Total;

        Imprimirmensaje.innerText = "Si puedo comprar los articulos";

    } else {
        Imprimirtotal.innerText = Total;

        Imprimirmensaje.innerText = "No puedo realizar la compra";
     }
    
}