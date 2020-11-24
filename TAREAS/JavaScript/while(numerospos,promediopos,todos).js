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

    var contador=0, sumapositivo=0, contadornegativo=0, sumanegativa=0, promedioTotal=0,  promedio=0, promedio2=0;

    var i=0;
    while (i <Nnumero) {
        var num = Number(prompt("ingresa un nùmero"));
    
        (num > 0)
            contador++;
           
        sumapositivo= num + sumapositivo;
        promedio= sumapositivo / contador;
        
           contadornegativo++
          
            sumanegativa=  num + sumanegativa;
            promedio2= sumanegativa / contadornegativo;
        
      promedioTotal = (promedio + promedio2) / Nnumero;
      i++
   }
   numpositivo.innerText = "Numeros mayores a 0:" + " " + contador;
 
   promediopositivo.innerText = "Promedio de los numeros positivos:" + " " + promedio;
   promedioTodos.innerText = "Promedio de todos los numeros:" + " " + promedioTotal;

 
}
       
       
      
      
      
  