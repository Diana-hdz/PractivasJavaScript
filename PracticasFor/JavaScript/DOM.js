function EventListener(){
    //Mandar llamar al boton1
    document.getElementById("click").addEventListener("click", Daleclik());
    //Mandar llamar al boton2
    document.getElementById("click2").addEventListener("click",Darleclick2());
    //Mandar llamar al tercer boton
    document.getElementById("click3").addEventListener("click", Darleclick3())
}
//funcion del primer boton
function Daleclik(){

    var salida = document.getElementById("salida1");
 //document.create element se utiliza para crear un elemnto en javascript
 var button = document.createElement("button");

//La instruccion set attribute llamammos a la clase para darle fora al boton

   
    //set attribute se utiliza para darle forma al boton, y esto es como una clase y el nombre de la clase
    button.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2");
    button.setAttribute("id","boton");
   button.setAttribute("type","button");//type = "button"
   button.setAttribute("onclick", "click2()");//=onclick2("")
   
    //Agregar un texto, le agregamos un texto al boton;
  
    button.innerText = "Boton Impreso";

    //Se utiliza para imprimir el boton en html
    salida.appendChild(button);
}

//La funcion del segundo boton
function Darleclick2(){
    var salida2 = document.getElementById("salida2");
for (var i=0; i< 5; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary btn-lg btn-block");
    button.innerText = "Boton impreso varias veces";
    salida2.appendChild(button);
}
   
}

//La función del terecer boton
function Darleclick3(){
 var listado = document.getElementById("listado");

 for (var i=0; i<5; i++){
     var lista = document.createElement("li"); //<li></li>
     lista.setAttribute("class","list-group-item");
     lista.innerText = i;
     listado.appendChild(lista);
 }
}

