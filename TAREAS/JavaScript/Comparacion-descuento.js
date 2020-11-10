function  EventListener(){
    document.getElementById("Total").addEventListener("click", Calcularcosto());
}
function Calcularcosto(){

    var edad = Number(document.getElementById("edad").value);

    var selectTipodepoliza = document.getElementById("Tipodepoliza").value;

    var selectalcohol = document.getElementById("alcohol").value;

    var selectlentes = document.getElementById("lentes").value;

    var selectenfermedad = document.getElementById("enfermedad").value;

    var costo = document.getElementById("costo");

    var cargo = document.getElementById("cargo");

    var TotalPoliza = document.getElementById("TotalPoliza");

    var cargoaños, bebida, lente, enfermedades = 0; 

    if(selectTipodepoliza == 1 ){
       selectTipodepoliza = 1200;
       costo.innerText = "Costo de Poliza" + costo;
       TotalPoliza.innerText = costo + cargo;
    } else {
        selectTipodepoliza = 950;
        costo.innerText =  "Costo de Poliza" + costo;
        TotalPoliza.innerText = costo + cargo;
    }if(selectalcohol == 1){
        bebida = ( costo  * 0.10);
        cargo.innerText = costo + alcohol;
        TotalPoliza.innerText = costo + cargo;
    }if(selectlentes == 1){
lente = ( costo * 0.5);
cargo.innerText = costo + lente;
TotalPoliza.innerText = costo + cargo;
    }if(selectenfermedad == 1){
        enfermedad == ( costo * 0.5);
        cargo.innerText = costo + enfermedad;
        TotalPoliza.innerText = costo + cargo;
    }if(edad > 40){
cargoaños = (costo * 0.20);
cargo.innerText = costo + cargoaños;
TotalPoliza.innerText = costo + cargo;
    }else{
        cargoaños = (costo * 0.10)
        cargo.innerText = costo + cargoaños;
        TotalPoliza.innerText = costo + cargo;
    }

}
