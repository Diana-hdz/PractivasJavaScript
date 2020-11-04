
//Realizar algoritmo que, con base en una calificación proporcionada (0-10),
// indique con letra la calificación que le corresponde: 10 es “A”, 9 es “B”, 8 es “C”, 7 y 6 son “D” y de 5 a 0 es “F”


function EventListener(){
    document.getElementById("resultado").addEventListener("click", resultado1());
}   
    function resultado1(){

        var Calificacion = Number (document.getElementById("Calificacion").value);

        var imprimirresultados = document.getElementById("Imprimirresultados");

        if ( Calificacion == 10){

            imprimirresultados.innerText = "El resultado de tu calificación es : A ";

        } if ( Calificacion == 9){

            imprimirresultados.innerText = "El resultado de tu calificación es :  B ";

       } if ( Calificacion == 8){

            imprimirresultados.innerText = "El resultado de tu calificación es : C ";

        } if ( Calificacion == 7 ||  Calificacion == 6){

           imprimirresultados.innerText = "El resultado de tu calificaión es : D ";

        } if ( Calificacion == 5 || Calificacion == 4 || Calificacion == 3 || Calificacion == 2 || Calificacion == 1 || Calificacion == 0 ){

       imprimirresultados.innerText = "El resultado de tu calificación es : F ";

        }

    }