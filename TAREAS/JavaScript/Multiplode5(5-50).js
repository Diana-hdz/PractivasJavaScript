//Escribe los múltiplos del 5 que hay entre el 5 y el 50 (ambos incluidos), usando "for"

function EventListener(){
    document.getElementById("multiplo").addEventListener("click",calculo());
    
    document.getElementById("comparar").addEventListener("click", comparar1());
}
function calculo(){
    var lista = document.getElementById("lista");
    lista.innerText = "";
    
    for(var x=5; x<=50; x+=5){

        var multiplo = document.createElement("li");

        multiplo.setAttribute("class","list-group-item");

        multiplo.innerText = x;

        lista.appendChild(multiplo);
    
    }

}

function comparar1(){
    var lista2 = document.getElementById("lista2");
    lista2.innerText = "";

    for(var x=5; x<=50; x++){
        if(x % 5 == 0){
            var comparar = document.createElement("li");

            comparar.setAttribute("class","list-group-item");
    
            comparar.innerText = x;
    
            lista2.appendChild(comparar);
        }
    }

}