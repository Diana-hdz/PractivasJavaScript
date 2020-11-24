//Muestra los números pares del 10 al 20 (ambos incluidos), usando "for"

function EventListener(){  
    document.getElementById("par").addEventListener("click",Calculo());
    
}
function Calculo(){
var lista2 = document.getElementById("lista2");
lista2.innerText = "";


var i =10;
while (i <= 20) {
  var listas = document.createElement("li")
  listas.setAttribute("class", "list-group-item"),
  listas.innerText = i;
  lista2.appendChild(listas);

    i+=2;
}

}