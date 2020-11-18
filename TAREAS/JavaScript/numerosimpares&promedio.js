//Elabore un programa que pida al usuario 30 números enteros para que al final presente la suma de los números impares
// y el promedio de los números pares. (input)

function EventListener(){
    document.getElementById("calcular").addEventListener("click", Click());
}
function Click(){
    var Sumapromedio = document.getElementById("Sumapromedio");

    var Sumanumerosimpar = document.getElementById("Sumanumerosimpar");

    var contador1 = 0, contador2 = 0,  sumapares= 0, promedio1= 0, sumaimpares= 0;
    for (var i=1; i<=10; i++){

        var num = Number(prompt("ingresa un nùmero"));
//enumero que introduce si es mayor a 0 y el numero que introduce se divide entre 2 y residuo se compara ==0si, siel numeroes par
        if(num > 0 && num % 2 == 0){
            contador1++; //contador = contador + 1esta contando cuantos numeros pares son
            sumapares =num + sumapares;
            promedio1=sumapares / contador1;

        }else{
            contador2++; //cuantos numeros impares se estan contando
            sumaimpares= num + sumaimpares;
        }
        Sumapromedio.innerText = "El promedio es:" + " " + promedio1;
        Sumanumerosimpar.innerText = "Suma de los nùmeros impares son:" + " " + sumaimpares;
    }

}

//1 2 3 4 5 6 7 8 9 10