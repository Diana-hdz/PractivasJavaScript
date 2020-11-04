//Quiere comparar si una perosna es mayor de edad y si tiene la INE  y si ya puede tomar o no.



function EventListener(){
    //Obtiene el id del boton que esta en el html y va a estar atento cuando le de click al boton
    document.getElementById("CalcularEdad").addEventListener("click", CalcularEdad());
}

function CalcularEdad()
{
    //Obtener el id del inpunt, pero con el .value obtenemos lo que ingresamos en el inpunt.
    var edad = Number(document.getElementById("edad").value);
    //Se declara 1 para indicar que tiene ine y 0 si no tiene ine
    var INE = Number(document.getElementById("INE").value);
    //Se declara una variable para imprimir el mensaje
    var imprimirmensaje = document.getElementById("Imprimiredad")

    if (edad >= 18 && INE >=0 ){
        console.log("La persona es mayor de edad y puede tomar")
       //InnerText se utiliza para imprimir la información en el navegador
        imprimirmensaje.innerText = "La persona es mayor de edad y puede tomar";

    }else if (edad < 18 && INE == 0)
    {
        imprimirmensaje.innerText = "La persona no es mayor de edad y no puede tomar"
    }else if (edad <18 && INE ==0){
        imprimirmensaje.innerText = " La persona es menor de edad, pero no puede tener ine"
    }
}