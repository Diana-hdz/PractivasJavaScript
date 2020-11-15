//Muestra los números del 15 al 5, descendiendo (ambos incluidos), usando "for"
function EventListener(){
    document.getElementById("click").addEventListener("click",Darclick());
}
function Darclick(){
    var lista = document.getElementById("lista");
    lista.innerText = "";

    for (var i=15; i>=5; i--){
        var lista1 = document.createElement("li");
        
        lista1.setAttribute("class","list-group-item");

        lista1.innerText = i;

        lista.appendChild(lista1);
    }
}