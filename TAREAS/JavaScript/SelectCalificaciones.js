function EventListener(){

    document.getElementById("numero").addEventListener("click", calificaciones());
}
function calificaciones(){

    var selectcalificacion = String(document.getElementById("calificacion").value);

    var Imprimirresultado = document.getElementById("Imprimirresultado");

    if (selectcalificacion == 10){

        Imprimirresultado.innerText = "El resultado de tu calificación es : A ";

    } if(selectcalificacion == 9){

        Imprimirresultado.innerText = "El resultado de tu calificación es :  B ";

    } if (selectcalificacion == 8){

        Imprimirresultado.innerText = "El resultado de tu calificación es : C";

    } if(selectcalificacion == 7){

        Imprimirresultado.innerText = "El resultado de tu calificaión es : D ";

    }if(selectcalificacion == 6){

        Imprimirresultado.innerText = "El resultado de tu calificaión es : D ";

    }if(selectcalificacion == 5 || selectcalificacion == 4 || selectcalificacion == 3 || selectcalificacion == 2 || selectcalificacion ==1 || selectcalificacion == 0){

        Imprimirresultado.innerText = "El resultado de tu calificación es : F"

    }
}