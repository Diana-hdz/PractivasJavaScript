//Muestra los números del 15 al 5, descendiendo (ambos incluidos), usando "for"

function EventListener(){  
    document.getElementById("numeros").addEventListener("click",Calculo());
    
}
function Calculo(){
var lista2 = document.getElementById("lista2");
lista2.innerText = "";

var i =15;
while (i >=5) {
  var listas = document.createElement("li")
  listas.setAttribute("class", "list-group-item"),
  listas.innerText = i;
  lista2.appendChild(listas);
    i--;
}

}