//Elabore una aplicación que lea n números enteros y realice lo siguiente:
//Cuantos números leídos fueron mayores que 0. Promedio de los números positivos. Promedio de todos los números.

function EventListener(){
    document.getElementById("calcular").addEventListener("click", Click());
}
function Click(){
    var Nnumero = prompt("¿Cuántos números vas a ingresar");
    var numpositivo = document.getElementById("numpositivo");

    var promediopositivo = document.getElementById("promediopositivo");

    var promedioTodos = document.getElementById("promedioTodos");

    var contador=0, contador2=0, contador3=0, contador4=0, promedioTotal=0, promedio=0;

    for (var i=0; i<Nnumero; i++){
         var num = Number(prompt("ingresa un nùmero"));

         if(num>=0){
             contador++;
         contador= contador +contador2;
         promedio= contador / Nnumero;
         }else{

             contador3= contador +contador3;
             promedioTotal=  contador3 / Nnumero;
         }
    }
    numpositivo.innerText = "Numeros mayores a 0:" + " " + contador;
    promediopositivo.innerText = "Promedio de los numeros positivos:" + promedio;
    promedioTodos.innerText = "Promedio de todos los numeros:" + promedioTotal;
}