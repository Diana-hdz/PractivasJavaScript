//Se va crear un arreglo con ls 7 días de la semana

function FunArrays(){
    var DiasSemana = new Array(7); //Se crea un cuadro con 7 posiciones o 7 dias de la semana

//Declarar la informacion que va estar en cada cuadro
DiasSemana[0] = "Lunes";
DiasSemana[1] = "Martes";
DiasSemana[2] = "Miercoles";
DiasSemana[3] = "Jueves";
DiasSemana[4] = "Viernes";
DiasSemana[5] = "Sabado";
DiasSemana[6] = "Domingo";

//se manda a imprimir los dias de la semana
console.log(DiasSemana[0], DiasSemana[1], DiasSemana[2], DiasSemana[3], DiasSemana[4], DiasSemana[5], DiasSemana[6]);


//Forma abreviada de crear un arreglo
var DiaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

console.log(DiaSemana[0], DiaSemana[1], DiaSemana[2], DiaSemana[3], DiaSemana[4], DiaSemana[5], DiaSemana[6]);

}