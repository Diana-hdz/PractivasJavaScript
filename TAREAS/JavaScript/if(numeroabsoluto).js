//Escribir un programa que, dado un número entero, muestre su valor absoluto. Nota: para los números positivos su valor absoluto es igual al número (el valor absoluto de 52 es 52), mientras que, para los negativos, su valor absoluto es el número multiplicado por -1 (el valor absoluto de -52 es 52).

function EventListener(){
    document.getElementById("num").addEventListener("click",calcular());
}
function calcular(){
    var numero = Number(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if(numero>0){
       numero= numero*1;
       
    }else {
        numero= numero*-1;
    }
        
    resultado.innerText = "El valor absoluto es:" + " " + numero;        
 

    } 

     