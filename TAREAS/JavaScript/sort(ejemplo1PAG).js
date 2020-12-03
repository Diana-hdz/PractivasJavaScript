function EventListener(){
    document.getElementById("calcular").addEventListener("click", Calcularnumeros());
}
function Calcularnumeros(){
    var numero =  [33, 2, 36, 55, 4, 1];

    var menoramayormayormenor = document.getElementById("menoramayormayormenor");
    var menoramayor= document.getElementById("menoramayor");
    var mayoramenor = document.getElementById("mayoramenor");
    var todosjuntos = document.getElementById("todosjuntos");
   
    numero.sort();
    menoramayormayormenor.innerText = "El arreglo de menor a mayor es:" + numero.sort(MenoraMayor) + "El arreglo de mayor a menor es:" + numero.sort(MayoraMenor);
    menoramayor.innerText= "El arreglo de menor a mayor es:" + numero.sort(MenoraMayor);
    mayoramenor.innerText= "El arreglo de mayor a menor es:" + numero.sort(MayoraMenor);
    todosjuntos.innerText= "El arreglo original es:" + numero + " " + "El arreglo de menor a mayor es:" + numero.sort(MenoraMayor) + " " + "el arreglo de mayor a menor es:" + numero.sort(MayoraMenor);
   
   
}
 function MenoraMayor(elem1, elem2){
    return elem1 - elem2;
     
 }
 function MayoraMenor(elem1, elem2){
    return elem2 - elem1 ;

}