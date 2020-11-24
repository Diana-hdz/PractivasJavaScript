//Crea una página web que muestre los números del 1 al 20 (ambos incluidos), usando "for"

function EventListener(){  
    document.getElementById("Cal").addEventListener("click",Calculo());
    
}
function Calculo(){
var lis5 = document.getElementById("lis5");
lis5.innerText = "";

var i =1;
while (i <= 20) {
  var listas = document.createElement("li")
  listas.setAttribute("class", "list-group-item"),
  listas.innerText = i;
  lis5.appendChild(listas);
    i++;
}

}