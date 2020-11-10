function EventListener(){
    document.getElementById("click").addEventListener("click", Daleclik());
}
function Daleclik(){

    var salidaboton = document.getElementById("salida");

    //document.create element se utiliza para crear un elemnto en javascript
    var buton = document.createElement("button");
    //set attribute se utiliza para darle forma al boton, y esto es como una clase y el nombre de la clase
    buton.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2");
    //Agregar un texto, le agregamos un texto al boton;
    buton.innerText = "Boton Impreso";
    //Se utiliza para imprimir el boton en html
    salidaboton.appendChild(buton);
}