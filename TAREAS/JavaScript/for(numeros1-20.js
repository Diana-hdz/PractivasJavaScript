//Crea una página web que muestre los números del 1 al 20 (ambos incluidos), usando "for"
function EventListener(){
    document.getElementById("resultado").addEventListener("click",Click());
}
function Click(){
    var listas = document.getElementById("listas");

    listas.innerText = "";

    for (var i=0; i<=20; i++){
        var lista = document.createElement("li");
        
        lista.setAttribute("class","list-group-item");
        lista.innerText = i;
        listas.appendChild(lista);
    }
}