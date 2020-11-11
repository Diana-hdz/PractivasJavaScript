function EventListener(){
    document.getElementById("resultado").addEventListener("click", Click());
}
function Click(){
    var listado = document.getElementById("listado");

    for (var i=0; i<=100; i+=2){
        var lista = document.createElement("li");
        lista.setAttribute("class","list-group-item");
        lista.innerText = i;
        listado.appendChild(lista);
    }
}
