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