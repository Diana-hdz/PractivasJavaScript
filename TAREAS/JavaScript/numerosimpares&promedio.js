//Elabore un programa que pida al usuario 30 números enteros para que al final presente la suma de los números impares
// y el promedio de los números pares. (input)

function EventListener(){
    document.getElementById("calcular").addEventListener("click", Click());
}
function Click(){
    var Sumapromedio = document.getElementById("Sumapromedio");

    var Sumanumerosimpar = document.getElementById("Sumanumerosimpar");

    var contador1 = 0, contador2 = 0,  acumulador= 0, promedio1= 0, suma= 0;
    for (var i=1; i<=30; i++){

        var num = Number(prompt("ingresa un nùmero"));

        if(num > 0 && num % 2 == 0){
            contador1++;
            acumulador+=num;
            promedio1=acumulador / contador1;

        }else{
            contador2++;
            suma+=num;
        }
        Sumapromedio.innerText = "El promedio es:" + " " + promedio1;
        Sumanumerosimpar.innerText = "Suma de los nùmeros impares son:" + " " + suma;
    }

}