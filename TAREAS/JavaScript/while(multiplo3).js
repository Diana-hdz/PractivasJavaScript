//Escribe los múltiplos de 3 que hay entre el 50 y el 5 (ambos incluidos), descendiendo, usando "for"

function EventListener(){  
    document.getElementById("mul").addEventListener("click",calmul());
    
}
function calmul(){
var lista3 = document.getElementById("lista3");
 lista3.innerText = "";

var i =50;
while (i >=5) {
  var listas = document.createElement("li")
  listas.setAttribute("class", "list-group-item"),
  listas.innerText = i;
  lista3.appendChild(listas);

    i-=3;
}

}