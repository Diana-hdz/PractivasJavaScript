function EventListener(){
    document.getElementById("CalcularEdades").addEventListener("click", CalcularEdades());
}
function CalcularEdades(){

    var e1 = Number(document.getElementById("edad1").value);
    var e2 = Number(document.getElementById("edad2").value);
    var imprimirmensaje = document.getElementById("Imprimiredad")
    var DiferenciaEdad1 = 0;
    var DiferenciaEdad = document.getElementById("DiferenciaEdad");


    if( e1 > e2){
        DiferenciaEdad1 = e1 - e2;
        imprimirmensaje.innerText = "El primer hermano es el mayor con"  + " " + e1 + "años";
        
    }else if( e1 < e2){
        DiferenciaEdad1 = e2 - e1;
        imprimirmensaje.innerText = "El segundo hermano no es el mayor" + " " + e2 + "años";
       
    }
    DiferenciaEdad.innerText = "La diferencia de edad de hermanos es:" + " " + DiferenciaEdad1 + "años";
}