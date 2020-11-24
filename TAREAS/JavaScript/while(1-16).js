//Crea una página web que muestre los números del 1 al 16, (ambos incluidos), saltando de 3 en 3, usando "for"

function EventListener(){  
    document.getElementById("resultado").addEventListener("click",Calculo());
    
}
function Calculo(){
var lista = document.getElementById("lista");
lista.innerText = "";
var i =1;
while (i <= 16) {
  var listas = document.createElement("li")
  lista.setAttribute("class", "list-group-item"),
  listas.innerText = i;
  lista.appendChild(listas);
  
    i+=3;
}

}