//Realice un algoritmo para generar e imprimir los números pares que se encuentren entre 0 y 100.   

function EventListener(){  
    document.getElementById("Calcular").addEventListener("click",Calculo());
    
}
function Calculo(){
var listacien = document.getElementById("listacien");
listacien.innerText = "";

var i =0;
while (i <= 100) {
  var listas = document.createElement("li")
  listas.setAttribute("class", "list-group-item"),
  listas.innerText = i;
  listacien.appendChild(listas);
    i+=2;
}

}