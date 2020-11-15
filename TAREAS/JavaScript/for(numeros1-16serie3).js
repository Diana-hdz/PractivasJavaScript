//Crea una página web que muestre los números del 1 al 16, (ambos incluidos), saltando de 3 en 3, usando "for"
function EventListener(){
    document.getElementById("click").addEventListener("click",Darclick());
}
function Darclick(){
    var lista = document.getElementById("lista");
    lista.innerText = "";

    for (var i=1; i<=16; i+=3){
        var listado = document.createElement("li");
        
        listado.setAttribute("class","list-group-item");
        listado.innerText = i;
        lista.appendChild(listado);
    }
}