function EventListener(){
    document.getElementById("btn").addEventListener("click", calculaSamsung());
    document.getElementById("btn").addEventListener("click", calculaSony());
    document.getElementById("btn").addEventListener("click", calculaLg());
    document.getElementById("btn").addEventListener("click", calculaHp());
    document.getElementById("btn").addEventListener("click", calculaLenovo());
}
function calculaSamsung(){
    var celular = document.getElementById("celular");
    var laptop = document.getElementById("laptop");
    var television =  document.getElementById("television");
    var smartWatch =  document.getElementById("smartWatch");

  var  Laptop = {
        TamañoPantalla1: 15,
        Mouse: "negro",
	    Teclado: "gamer",
        Color1: "blanco",
 	    Precio: 17000,
     };
 var Celular ={
    TamañoPantalla2: 5.8 ,
    Color2:	"azul",
    Peso:165 ,
    TamañoPantalla3:5.8 ,
    Precio:4850
    
 };

 var Televisión={
    Precio: 8000,
    TamañoPantalla4: 43,
    Peso:13,
    Altura:57,
Ancho:	97,
 };
var SmartWatch ={
    Ancho:42,
    Altura:36.2,
    TamañoPantalla5:1.3,
    Peso:63
 };
 var AparatosElectrónicos ={
	Marca1: "Samsung",
	Marca2: "Sony",
	Marca3: "LG",
	Marca4: "HP",	
	Marca5: "Lenovo",
 };
 var Samsung ={
     TamañoPantalla1: Laptop.TamañoPantalla1,
     Mouse: Laptop.Mouse,
     Teclado: Laptop.Teclado,
     Color1: Laptop.Color1,
     Precio: Laptop.Precio,
     Marca1: AparatosElectrónicos.Marca1
 }
 laptop.innerText = "Laptop Marca Samsung:" + JSON.stringify(Samsung);

 var Samsung2 ={
     TamañoPantalla2: Celular.TamañoPantalla2,
     Color2: Celular.Color2,
     Peso: Celular.Peso,
     TamañoPantalla3: Celular.TamañoPantalla3,
     Precio: Celular.Precio,
     Marca1: AparatosElectrónicos.Marca1

 }
 celular.innerText =  "Celular Samsung:" + JSON.stringify(Samsung2);

 var Samsung3 ={

    Precio: Televisión.Precio,
    TamañoPantalla: Televisión.TamañoPantalla,
    Peso: Televisión.Precio,
    Altura: Televisión.Altura,
Ancho: Televisión.Ancho,
Marca1: AparatosElectrónicos.Marca1
 }
 television.innerText = "Televisión Samsung:" + JSON.stringify (Samsung3);


 var Samsung4 ={
    Ancho: SmartWatch.Ancho,
    Altura: SmartWatch.Altura,
    TamañoPantalla5: SmartWatch.TamañoPantalla5,
    Peso: SmartWatch.Peso,
    Marca1: AparatosElectrónicos.Marca1
 }
 smartWatch.innerText = "SmartWathc Samsung:" + JSON.stringify (Samsung4);


//
function calculaSony(){
    var celular2 = document.getElementById("celular2");
var television2 = document.getElementById("television2");
var smartWatch2 = document.getElementById("smartWatch2");
   
 var Celular ={
    TamañoPantalla2: 5.8 ,
    Color2:	"azul",
    Peso:165 ,
    TamañoPantalla3:5.8 ,
    Precio:4850
    
 };

 var Televisión={
    Precio: 8000,
    TamañoPantalla4: 43,
    Peso:13,
    Altura:57,
Ancho:	97,
 };
var SmartWatch ={
    Ancho:42,
    Altura:36.2,
    TamañoPantalla5:1.3,
    Peso:63
 };
 var AparatosElectrónicos ={
	Marca1: "Samsung",
	Marca2: "Sony",
	Marca3: "LG",
	Marca4: "HP",	
	Marca5: "Lenovo",
 };
  var Sony ={
      tamañoPantalla2: Celular.tamañoPantalla2,
      Color2: Celular.Color2,
      TamañoPantalla3: Celular.TamañoPantalla3,
      Precio: Celular.Precio,
      Marca2: AparatosElectrónicos.Marca2
  }
  celular2.innerText = "Celular Sony:" + JSON.stringify(Sony);
}
  var Sony2 ={
Precio: Televisión.Precio,
    TamañoPantalla: Televisión.TamañoPantalla,
    Peso: Televisión.Precio,
    Altura: Televisión.Altura,
Ancho: Televisión.Ancho,
Marca2: AparatosElectrónicos.Marca2
 }
 television2.innerText = "Television Sony:"+ JSON.stringify (Sony2);


 var Sony3 ={
    Ancho: SmartWatch.Ancho,
    Altura: SmartWatch.Altura,
    TamañoPantalla5: SmartWatch.TamañoPantalla5,
    Peso: SmartWatch.Peso,
    Marca2: AparatosElectrónicos.Marca2
 }
 smartWatch2.innerText ="SmartWacht Sony)" + JSON.stringify(Sony3);
 
}
//
function calculaLg(){
    var celular3 = document.getElementById("celular3");

    var laptop3 = document.getElementById("laptop3");
    var television3 =  document.getElementById("television3");
    var smartWatch3 =  document.getElementById("smartWatch3");

  var  Laptop = {
        TamañoPantalla1: 15,
        Mouse: "negro",
	    Teclado: "gamer",
        Color1: "blanco",
 	    Precio: 17000,
     };
 var Celular ={
    TamañoPantalla2: 5.8 ,
    Color2:	"azul",
    Peso:165 ,
    TamañoPantalla3:5.8 ,
    Precio:4850
    
 };

 var Televisión={
    Precio: 8000,
    TamañoPantalla4: 43,
    Peso:13,
    Altura:57,
Ancho:	97,
 };
var SmartWatch ={
    Ancho:42,
    Altura:36.2,
    TamañoPantalla5:1.3,
    Peso:63
 };
 var AparatosElectrónicos ={
	Marca1: "Samsung",
	Marca2: "Sony",
	Marca3: "LG",
	Marca4: "HP",	
	Marca5: "Lenovo",
 };
 var LG ={
     TamañoPantalla1: Laptop.TamañoPantalla1,
     Mouse: Laptop.Mouse,
     Teclado: Laptop.Teclado,
     Color1: Laptop.Color1,
     Precio: Laptop.Precio,
     Marca3: AparatosElectrónicos.Marca3
 }
 laptop3.innerText = "Laptop LG" + JSON.stringify(LG);

 var LG2 ={
     TamañoPantalla2: Celular.TamañoPantalla2,
     Color2: Celular.Color2,
     Peso: Celular.Peso,
     TamañoPantalla3: Celular.TamañoPantalla3,
     Precio: Celular.Precio,
     Marca3: AparatosElectrónicos.Marca3

 }
 celular3.innerText = "CELULAR LG:" + JSON.stringify(LG2);

 var LG3 ={

    Precio: Televisión.Precio,
    TamañoPantalla: Televisión.TamañoPantalla,
    Peso: Televisión.Precio,
    Altura: Televisión.Altura,
Ancho: Televisión.Ancho,
Marca3: AparatosElectrónicos.Marca3
 }
 television3.innerText = "Television LG:" + JSON.stringify(LG3);


 var LG4 ={
    Ancho: SmartWatch.Ancho,
    Altura: SmartWatch.Altura,
    TamañoPantalla5: SmartWatch.TamañoPantalla5,
    Peso: SmartWatch.Peso,
    Marca3: AparatosElectrónicos.Marca3
 }
 smartWatch3.innerText = "SmartWatch LG:" + JSON.stringify(LG4);


}
function calculaHp(){
    var laptop4= document.getElementById("laptop4");
    var smartWatch4 =  document.getElementById("smartWatch4");
    var  Laptop = {
        TamañoPantalla1: 15,
        Mouse: "negro",
	    Teclado: "gamer",
        Color1: "blanco",
 	    Precio: 17000,
     };
     var SmartWatch ={
        Ancho:42,
        Altura:36.2,
        TamañoPantalla5:1.3,
        Peso:63
     };
      var AparatosElectrónicos ={
        Marca1: "Samsung",
        Marca2: "Sony",
        Marca3: "LG",
        Marca4: "HP",	
        Marca5: "Lenovo",
      };
     var Hp ={
        TamañoPantalla1: Laptop.TamañoPantalla1,
        Mouse: Laptop.Mouse,
        Teclado: Laptop.Teclado,
        Color1: Laptop.Color1,
        Precio: Laptop.Precio,
        Marca4: AparatosElectrónicos.Marca4
    }
    laptop4.innerText = "apton HP:" + JSON.stringify(Hp);
    var Hp2 ={
        Ancho: SmartWatch.Ancho,
        Altura: SmartWatch.Altura,
        TamañoPantalla5: SmartWatch.TamañoPantalla5,
        Peso: SmartWatch.Peso,
        Marca4: AparatosElectrónicos.Marca4
     }
     smartWatch4.innerText = "SmartWacht " + JSON.stringify(Hp2);
    
}
function calculaLenovo(){
    var celular5 = document.getElementById("celular5");

    var laptop5 = document.getElementById("laptop5");
    var television5 =  document.getElementById("television5");
    var smartWatch5 =  document.getElementById("smartWatch5");

  var  Laptop = {
        TamañoPantalla1: 15,
        Mouse: "negro",
	    Teclado: "gamer",
        Color1: "blanco",
 	    Precio: 17000,
     };
 var Celular ={
    TamañoPantalla2: 5.8 ,
    Color2:	"azul",
    Peso:165 ,
    TamañoPantalla3:5.8 ,
    Precio:4850
    
 };

 var Televisión={
    Precio: 8000,
    TamañoPantalla4: 43,
    Peso:13,
    Altura:57,
Ancho:	97,
 };
var SmartWatch ={
    Ancho:42,
    Altura:36.2,
    TamañoPantalla5:1.3,
    Peso:63
 };
 var AparatosElectrónicos ={
	Marca1: "Samsung",
	Marca2: "Sony",
	Marca3: "LG",
	Marca4: "HP",	
	Marca5: "Lenovo",
 };
 var Lenovo ={
     TamañoPantalla1: Laptop.TamañoPantalla1,
     Mouse: Laptop.Mouse,
     Teclado: Laptop.Teclado,
     Color1: Laptop.Color1,
     Precio: Laptop.Precio,
     Marca5: AparatosElectrónicos.Marca5
 }
 laptop5.innerText = "Laptop Lenovo:" + JSON.stringify(Lenovo);

 var Lenovo2 ={
     TamañoPantalla2: Celular.TamañoPantalla2,
     Color2: Celular.Color2,
     Peso: Celular.Peso,
     TamañoPantalla3: Celular.TamañoPantalla3,
     Precio: Celular.Precio,
     Marca: AparatosElectrónicos.Marca5

 }
 celular5.innerText = "Celular Lenovo:" + JSON.stringify(Lenovo2);

 var Lenovo3 ={ 

    Precio: Televisión.Precio,
    TamañoPantalla: Televisión.TamañoPantalla,
    Peso: Televisión.Precio,
    Altura: Televisión.Altura,
Ancho: Televisión.Ancho,
Marca5: AparatosElectrónicos.Marca5
 }
 television5.innerText = "Televisión Lenovo:" + JSON.stringify(Lenovo3);


 var Lenovo4 ={
    Ancho: SmartWatch.Ancho,
    Altura: SmartWatch.Altura,
    TamañoPantalla5: SmartWatch.TamañoPantalla5,
    Peso: SmartWatch.Peso,
    Marca5: AparatosElectrónicos.Marca5
 }
 smartWatch5.innerText = "SmartWatch Lenovo:" + JSON.stringify(Lenovo4);

}