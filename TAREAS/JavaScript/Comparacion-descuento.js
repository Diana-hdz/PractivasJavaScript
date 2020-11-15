function  EventListener(){
    document.getElementById("Total").addEventListener("click", Calcularcosto());
}
function Calcularcosto(){

    var Tipopoliza = String (document.getElementById("Tipopoliza").value);
    var costopoliza =String(document.getElementById("costopoliza").value);
    var cargos = String(document.getElementById("cargos").value);
    var TotalPoliza = document.getElementById("TotalPoliza");
    var CargosAdicionales = document.getElementById("CargosAdicionales");
    var cargo = 0;
    var preciofinal = 0;

    if (Tipopoliza == "1" && costopoliza == "1" && cargos == "1"){
        cargo= (1200 * 0.10);
        preciofinal= (1200 + cargo);
     
        } else if(Tipopoliza == "1" && costopoliza =="1" && cargos == "2"){
        cargo = (1200 * 0.5);
        preciofinal= (1200 + cargo);
    }else if(Tipopoliza == "1" && costopoliza =="1" && cargos == "3"){
        cargo = (1200 * 0.5);
        preciofinal= (1200 + cargo);
    }else if(Tipopoliza == "1" && costopoliza =="1" && cargos == "4"){
        cargo = (1200 * 0.20);
        preciofinal= (1200 + cargo);
    }else if(Tipopoliza == "1" && costopoliza =="1" && cargos == "5"){
        cargo = (1200 * 0.10);
        preciofinal= (1200 + cargo);
    }else if(Tipopoliza == "2" && costopoliza =="2" && cargos == "1"){
        cargo = (950 * 0.10);
        preciofinal= (950 + cargo);
    }else if(Tipopoliza == "2" && costopoliza =="2" && cargos == "2"){
        cargo = (950 * 0.5);
        preciofinal= (950 + cargo);
    }else if(Tipopoliza == "2" && costopoliza =="2" && cargos == "3"){
        cargo = (950 * 0.5);
        preciofinal= (950 + cargo);
    }else if(Tipopoliza == "2" && costopoliza =="2" && cargos == "4"){
        cargo = (950 * 0.20);
        preciofinal= (950 + cargo);
        
    }else if(Tipopoliza == "2" && costopoliza =="2" && cargos == "5"){
        cargo = (950 * 0.10);
        preciofinal= (950 + cargo);
    }
    
    TotalPoliza.innerText = "Total de la Poliza:" + " " + preciofinal ;
}