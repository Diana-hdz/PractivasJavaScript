function EventListener(){
    document.getElementById("Calcular").addEventListener("click", Calcularprecio());
  }
  function Calcularprecio(){

      var precio = Number (document.getElementById("precio").value);



     var Descuento = (document.getElementById("Descuento"));
     
     var Cantdescuento, descuento = 0;
      var CantidadDescuento = (document.getElementById("CantidadDescuento"));

    

      if( precio >  3600 ){
         descuento = (precio * 0.84) ; 
      
         Descuento.innerText = "Total a pagar" + " " + descuento ;
         CantDescuento = (precio - descuento);
         CantidadDescuento.innerText = "Descuento aplicado" + " " + CantDescuento ;
        
      }
      else {
          descuento =  (precio *0.93) ;
          Descuento.innerText = "Total a pagar" + " " + descuento ;
          CantDescuento = (precio - descuento);
          CantidadDescuento.innerText = "Descuento aplicado" + "" + CantDescuento ;
      }
    


  }