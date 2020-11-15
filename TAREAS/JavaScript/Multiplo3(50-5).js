function EventListener(){
    document.getElementById("multiplo").addEventListener("click", descender());
}
function descender(){
    var listado = document.getElementById("listado");
    listado.innerText = "";
    
    for(var i=50; i>=5; i-=3){

        var des = document.createElement("li");

        des.setAttribute("class","list-group-item");

        des.innerText = i;

        listado.appendChild(des);
    
    }
}