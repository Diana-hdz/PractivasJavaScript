function GuardarInformacion(){

    var NombreUsuario = String(document.getElementById("usuario").value);
    var Email = String (document.getElementById("email").value);
    var Password1 = String (document.getElementById("contraseña").value);
    var Password2 = String (document.getElementById("contraseña2").value);

    if(NombreUsuario != "" && Email != "" && Password1 != "" && Password2 != ""){ 

          localStorage.setItem("NombreUsuario", NombreUsuario);
          localStorage.setItem("Email", Email);
    
    if(Password1 == Password2){

        localStorage.setItem("Password1", Password1);
        localStorage.setItem("Password", Password1);
        alert("La informacón se guardo correctamente");
    } else{
        alert("Revisa la contraseña");
    }
}else{
    alert("Revisa la informacón, es incorrecta");

}
 
}

function ObtenerInformacion(){
    var ImprimirNombre = document.getElementById("ImprimirNombre");
    var ImprimirEmail = document.getElementById("ImprimirEmail");
    var ImprimirPassword = document.getElementById("ImprimirPassword");

    ImprimirNombre.innerText = "El Nombre del usuario es:" + " " + localStorage.getItem("NombreUsuario");
    ImprimirEmail.innerText = "El correo del usuario es:" + " " + localStorage.getItem("Email");
    ImprimirPassword.innerText = "La contraseña del usuario:"  + " " + localStorage.getItem("Password1");

}