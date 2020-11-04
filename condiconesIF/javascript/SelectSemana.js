function  EventListener(){
    document.getElementById("Semana").addEventListener("click", CalcularDias());
 }   
    function CalcularDias(){

        var selectdias = document.getElementById("dias").value;

        var Imprimirdias = document.getElementById("Imprimirdias");


        if(selectdias == "1"){

            Imprimirdias.innerText= "El día seleccionado es Lunes";

    } if(selectdias == "2"){

        Imprimirdias.innerText = "El día seleccionado es Martes";

    }if(selectdias == "3"){

        Imprimirdias.innerText = "El día seleccionado es Miercoles";

    }if(Imprimirdias == "4"){

        Imprimirdias.innerText = "El día seleccionado es Jueves";

    }if(selectdias == "5"){

        Imprimirdias.innerText = "El día seleccionado es Viernes";

    }if(Imprimirdias == "6"){

        Imprimirdias.innerText = "El día seleccionado es Sábado";

    }if(Imprimirdias == "7"){

        Imprimirdias.innerText = "El día seleccionado es Domingo"
    }
}
