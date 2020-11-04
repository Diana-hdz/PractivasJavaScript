function EventListener(){
    document.getElementById("Calcularnumeros").addEventListener("click", Calcularnumeros());
}

function Calcularnumeros(){
    var n1 = Number(document.getElementById("Numero1").value);
    var n2 = Number(document.getElementById("Numero2").value);
    var n3 = Number(document.getElementById("Numero3").value);
    var imprimirmensaje = document.getElementById("CalcularNumeros")

    if( n1 > n2 && n1 > n3 ){
       imprimirmensaje.innerText = n1 + " es mayor";
    } if(n2 > n1 && n2 > n3){
        imprimirmensaje.innerText = n2 + " es mayor";
    } if(n3 > n1 && n1 > n2){
        imprimirmensaje.innerText = n3 + " es mayor";
    }
   
}     