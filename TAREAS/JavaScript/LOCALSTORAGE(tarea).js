var persona = {
    Nombre: "Diana",
    Apellido: "Hernandez",
    Edad: 24,
    Genero: "Femenino",
    Nacionalidad: "Mexicana"
};

var comida ={
    Mexicana: "Gorditas",
    Española: "paella",
    Francesa: "Sopa de cebolla",
    Italiana: "pizza",
    EstadoUnidese: "Hot-dog"

};

var peliculas = {
    Terror: "La noche del demonio",
    Comedia: "Dr Dolittle",
    Ficcion: "Wall-e",
    Romanticas: "Amarte duele"
};

var musica ={
    Rock: "Creedence Clearwater Revival",
    Pop: "Jesse & Joy",
    HipHop: "Cypress Hill",
    Reggaeton: "Don Omar"
};

function CalcuGuardarPersona(){
    localStorage.setItem("InfoPersona", JSON.stringify(persona));
}
function CalcuObtener(){
    var nombre = document.getElementById("nombre");
    var edad = document.getElementById("edad");
    var genero = document.getElementById("genero");
    var Nacionalidad = document.getElementById("nacionalidad");

    nombre.innerText = "Mi nombre es:" + persona.Nombre + " " + persona.Apellido;
    edad.innerText = "Mi edad es:" + persona.Edad + " " + "años";
    genero.innerText = "Mi genero es:" +  persona.Genero
    Nacionalidad.innerText = "Mi Nacionalidad es:" + " " +  persona.Nacionalidad;
}
function GuardarComida(){
    localStorage.setItem("InfoComida", JSON.stringify(comida));
   
}
function CalcuObtener2(){
    var mexicana = document.getElementById("mexicana");
    var española = document.getElementById("española");
    var francesa = document.getElementById("francesa");
    var italiana = document.getElementById("italiana");
    var usa = document.getElementById("usa");

    mexicana.innerText = "La comida típica de México es:" + " " + comida.Mexicana;
    española.innerText = "La comida típica de España es:" + " " + comida.Española;
    francesa.innerText = "La comida típica de Francia es:" + " " +  comida.Francesa;
    italiana.innerText = "La comida típica de Italia es:" + " " + comida.Italiana;
    usa.innerText = "La comida típica de USA es:" + " " + comida.EstadoUnidese;
}
function GuardarPeliculas(){
    localStorage.setItem("InfoPelicula", JSON.stringify(peliculas));

}
function CalcuObtener3(){
    var terror = document.getElementById("terror");
    var comedia = document.getElementById("comedia");
    var ficcion =document.getElementById("ficcion");
    var romantica = document.getElementById("romantica");

    terror.innerText = "Pelicula de Terror:" + " " + peliculas.Terror;
    comedia.innerText = "Pelicula de Comedia:" + " " + peliculas.Comedia;
    ficcion.innerText = "Pelicula de Ficción:" + " " + peliculas.Ficcion;
    romantica.innerText = "Pelicula Romantica:" + " " + peliculas.Romanticas;

}

function GuardarMusica(){
    localStorage.setItem("InfoMusica"), JSON.stringify(musica);
}
function CalcuObtener4(){
    var rock = document.getElementById("rock");
    var pop = document.getElementById("pop");
    var hiphop = document.getElementById("hiphop");
    var reggaeton = document.getElementById("reggeaton");

    rock.innerText = "Banda de ROCK:" +  " " + musica.Rock;
    pop.innerText = "Artista de música POP:" +  " " +  musica.Pop;
    hiphop.innerText = "Grupo de HIP Hop:" + " " + musica.HipHop;
    reggaeton.innerText = "Artista de REGGEATON:" + " " + musica.Reggaeton;
}