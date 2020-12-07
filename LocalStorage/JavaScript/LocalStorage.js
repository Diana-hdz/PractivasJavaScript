function LocalStorage(){
    // Guardar informacion en el localStorage
    // Set item se encarga de guardar la informacion en el localStorage
    localStorage.setItem("Nombre","Diana Hernandez");
    localStorage.setItem("Numero", 30);
    localStorage.setItem("Booleano", true);
    localStorage.setItem("Arreglo", [1,2,3,4,5]);
    localStorage.setItem("Objeto", {calzado: "calzado", pantuflas:"calzado2", chanclas: "calzado3"})
var Ropa ={
    calzado: "tenis",
    calzado2: "pantunfla",
    calzado3: "chanclas",
    jens: "Pantalon Mezclilla",
};
localStorage.setItem("objeto", JSON.stringify(Ropa))


//Imprimo en consola la clave que yo tengo en el localstorage
   console.log(localStorage.getItem("Nombre"));
    
   //removeItem
//    Ingreso localstorage y selecciono remove item, con la clave a remover y me elimina la clave y el valor
localStorage.removeItem("booleano");

// clear
// Limpiar la informacion que esta en el localstorage
localStorage.clear();

usuario =  {
    nombre: "Diana",
    edad:26
}
// Json.stringify es un formato que tiene javascript para guardar un objeto en el localstorage
localStorage.setItem("usuario", JSON.stringify(usuario));
// Json.parse es otro formato de javascript para obtener el objeto en el navegador o consola
console.log(JSON.parse(localStorage.getItem("usuario")));

}