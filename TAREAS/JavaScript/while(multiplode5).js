//Escribe los múltiplos del 5 que hay entre el 5 y el 50 (ambos incluidos), usando "for"

function EventListener(){  
    document.getElementById("Multiplo").addEventListener("click",CalMul());
    
}
function CalMul(){
var lista4 = document.getElementById("lista4");
lista4.innerText = "";

var i =5;
while (i <= 50) {
  var listas = document.createElement("li")
  listas.setAttribute("class", "list-group-item"),
  listas.innerText = i;
  lista4.appendChild(listas);
    i+=5;
}

}