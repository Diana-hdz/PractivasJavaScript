//Elabore un programa que pida al usuario 30 números enteros para que al final presente la suma de los números impares
// y el promedio de los números pares. (input)

function EventListener(){
    document.getElementById("calcular").addEventListener("click", Click());
}
function Click(){
    var Sumapromedio = document.getElementById("Sumapromedio");

    var Sumanumerosimpar = document.getElementById("Sumanumerosimpar");

    var contador1 = 0, contador2 = 0,  sumapares= 0, promedio1= 0, sumaimpares= 0;

    var i=1;
    while (i<=30) {
        var num = Number(prompt("ingresa un nùmero")); 
        if(num > 0 && num % 2 == 0){
            contador1++;
            sumapares =num + sumapares;
            promedio1=sumapares / contador1;

        }else{
            contador2++;
            sumaimpares= num + sumaimpares;
           
        }
        i++
        Sumapromedio.innerText = "El promedio es:" + " " + promedio1;
        Sumanumerosimpar.innerText = "Suma de los nùmeros impares son:" + " " + sumaimpares;
    }




        
    }