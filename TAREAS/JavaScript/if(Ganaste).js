function EventListener(){
    document.getElementById("numregistro").addEventListener("click",registro());
}
function registro(){
    var numero = Number(document.getElementById("numero").value);
    var ImprimirGanador = document.getElementById("ImprimirGanador");

    
    if(numero ==1000){
    ImprimirGanador.innerText = "Ganaste un Premio" ;
    }else{
    ImprimirGanador.innerText = "Sigue Participando";
}
 }