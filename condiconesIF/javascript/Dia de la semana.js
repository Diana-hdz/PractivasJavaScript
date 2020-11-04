function EventListener(){
    //Obtiene el id del boton del html, y estar atento cuando le de click para imprimir que dia de la semana 
    // corresponde
    document.getElementById("Calculardias").addEventListener("click", Calculodedias());
}
function Calculodedias(){

    var dias = Number (document.getElementById("dias").value);

    var imprimirdiassemanas = document.getElementById("Imprimirdiassemanas");

 if(dias == 1) {

     imprimirdiassemanas.innerText = " El día que ingresaste es el domingo";

 } if(dias == 2) {

    imprimirdiassemanas.innerText = " El día que ingresaste es el lunes";

} if(dias == 3) {

    imprimirdiassemanas.innerText = " El día que ingresaste es el martes";

}if(dias == 4) {

    imprimirdiassemanas.innerText = " El día que ingresaste es el miercoles";

} if(dias == 5) {

        imprimirdiassemanas.innerText = " El día que ingresaste es el jueves";

 }if(dias == 6) {

    imprimirdiassemanas.innerText = " El día que ingresaste es el viernes";

      }if(dias == 7) {
        imprimirdiassemanas.innerText = " El día que ingresaste es el sábado";
}
  }