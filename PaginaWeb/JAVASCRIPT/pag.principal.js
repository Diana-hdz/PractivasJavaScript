function GuardarCorreo(){
    var email = String (document.getElementById("email").value);
localStorage.setItem("email", email);
}
function GuardarInfo(){
    var nombre = String (document.getElementById("nombre").value);
    var apellido = String (document.getElementById("apellido").value);
    var email5 = String(document.getElementById("email5").value);
    var comentario = String(document.getElementById("comentario").value);

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("email", email5);
    localStorage.setItem("comentario", comentario);
}
function GuardarInformacion(){
    var email = String (document.getElementById("email").value);
    var contraseña = String (document.getElementById("contraseña").value);

    localStorage.setItem("email", email);

    localStorage.setItem("contraseña", contraseña);
}
function GuardarRecuerdame(){
 
    var email = String (document.getElementById("email").value);
    var contraseña = String (document.getElementById("contraseña").value);
localStorage.setItem("email", email);
    localStorage.setItem("contraseña", contraseña);

}
function GuardarInformacion2(){
    var email = String (document.getElementById("email").value);
    var contraseña = String (document.getElementById("contraseña").value);
    localStorage.setItem("email", email);

    localStorage.setItem("contraseña", contraseña);
}