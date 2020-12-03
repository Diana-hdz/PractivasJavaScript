function Objetos(){
    // Se crea un objeto, con sis cuatro propiedades

    var coche1 = {
        ruedas:4,
        puertas:4,
        color:"verde",
        anio: 2010,
        luces: 4,
        espejos: 2,
    };  //Indica que termina una instruccion y podemos agregar otra instruccion aparte

    var coche2 = {
        ruedas: 4,
        puertas: 2,
        color: "rojo",
        anio:2015,
        luces:4,
        espejos:2

    };

    var coche3 = {
        ruedas: 4,
        puertas: 4,
        color: "azul",
        anio:2020,
        luces:4,
        espejos:2

    };

    var coche4 = {
        ruedas: 4,
        puertas: 2,
        color: "negro",
        anio:2018,
        luces:4,
        espejos:2

    };

    // Se crea otro objeto llamado fabricante con sus cuatro marcas
    var fabricantes = {

        marca1: "Ford",
        marca2: "Nissan",
        marca3: "Fiat",
        marca4: "Chevrolet"
    };

    // Se crea un objeto llamado Ford, donde vamos  a llamar las propiedades del coche
    var Ford = {

        ruedas: coche1.ruedas,
        puertas: coche1.puertas,
        color: coche1.color,
        anio: coche1.anio,
        luces: coche1.luces,
        espejos: coche1.espejos,
        marca1: fabricantes.marca1
    }
    console.log(Ford);

    // 
     var Nissan = {
         ruedas: coche2.ruedas,
         puertas: coche2.puertas,
         color: coche2.color,
         anio: coche2.anio,
         luces: coche2.luces,
        espejos: coche2.espejos,
        marca2: fabricantes.marca2
     }
     console.log(Nissan);

    //
    var Fiat ={
        ruedas: coche3.ruedas,
        puertas: coche3.puertas,
        color: coche3.color,
        anio: coche3.anio,
        luces: coche3.luces,
        espejos: coche3.espejos,
        marca3: fabricantes.marca3
    }  
    console.log(Fiat);

    //  
    var Chevrolet ={

        ruedas: coche4.ruedas,
        puertas: coche4.puertas,
        color: coche4.color,
        anio: coche4.anio,
        luces: coche4.luces,
        espejos: coche4.espejos,
        marca4: fabricantes.marca4
    }
    console.log(Chevrolet); //Imprime todas las propiedades
    console.log(Chevrolet.color); //Imprimir una sola cosa
    console.log(Chevrolet.puertas);

    console.log(Nissan);;
    console.log(Nissan.anio);
    console.log(Nissan.color);

    console.log(Fiat);
    console.log(Fiat.luces);
    console.log(Fiat.espejo);

    console.log(Ford);
    console.log(Ford.ruedas);
    console.log(Ford.puertas);
}