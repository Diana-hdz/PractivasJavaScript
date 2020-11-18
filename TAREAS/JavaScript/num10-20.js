function EventListener(){
    document.getElementById("click").addEventListener("click",Darclick());
}
function Darclick(){
    var lista = document.getElementById("lista");

    lista.innerText = "";

    for (var i=10; i<=20; i+=2){
        var listas = document.createElement("li");
        
        listas.setAttribute("class","list-group-item");
        listas.innerText = i;
        lista.appendChild(listas);
    }
}