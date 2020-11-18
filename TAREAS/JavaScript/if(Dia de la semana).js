//Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

function EventListener(){
    document.getElementById("dias").addEventListener("click",caldias());
}
function caldias(){
    var dia = (document.getElementById("dia").value);
    var mensaje = document.getElementById("mensaje");

    if(dia == "lunes"){
        mensaje.innerText = "Feliz Día de Semana";
    }else if (dia == "viernes"){
        mensaje.innerText = "¡Al fin es viernes!";
    }else if(dia == "sabado" || dia== "domingo"){
        mensaje.innerText = "¡Feliz fin de semana!";
    }else 
    mensaje.innerText = "Falta poco para terminar la semana";
}