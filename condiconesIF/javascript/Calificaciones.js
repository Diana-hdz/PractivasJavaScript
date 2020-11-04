function EventListener(){
    document.getElementById("CalcularCalificación1").addEventListener("click", CalcularCalificación());
}
function CalcularCalificación(){
    var cal1 = Number (document.getElementById("cal1").value);

    var cal2 = Number (document.getElementById("cal2").value);

    var cal3 = Number (document.getElementById("cal3").value);

    var cal4 = Number (document.getElementById("cal4").value);

    var imprimirpromedio = document.getElementById("promedio");

    var imprimirmensaje = document.getElementById("Valorminimo");

    var valorminimo, promedio = 0;



 if( cal1 < cal2 && cal1 < cal3 && cal1 < cal4){
      
        valorminimo = Math.min(cal1, cal2, cal3, cal4);
        imprimirmensaje.innerText = "La calificaciòn minima es " + valorminimo ;
        promedio = (cal2 + cal3 + cal4 ) / 3;
        imprimirpromedio.innerText = "La suma de las calificaciones" + promedio;
        console.log(valorminimo);
       

        }
    if( cal2 < cal1 && cal2 < cal3 && cal2 < cal4){
        
        valorminimo = Math.min(cal1, cal2, cal3, cal4);
        imprimirmensaje.innerText = "La calificaciòn minima es " + valorminimo ;
        promedio = (cal1 + cal3 + cal4) / 3;
        imprimirpromedio.innerText = promedio;
    }
    if( cal3 < cal1 && cal3 < cal2 && cal3 < cal4){
        
        valorminimo = Math.min(cal1, cal2, cal3, cal4);
        imprimirmensaje.innerText = "La calificaciòn minima es " + valorminimo ;
        promedio = (cal1 + cal2 + cal4) / 3;
        imprimirpromedio.innerText = promedio;
     }
    if (cal4 < cal1 && cal4 < cal2 && cal4 < cal3){
       
        valorminimo = Math.min(cal1, cal2, cal3, cal4 );
        imprimirmensaje.innerText = "La calificaciòn minima es " + valorminimo ;
        promedio = (cal1 + cal2 + cal3) / 3;
        imprimirpromedio.innerText = "La calificaciòn maxima es " +promedio;
    }
}