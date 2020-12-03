function EventListener(){
    document.getElementById("multiplicacion").addEventListener("click", calcuMult());
    document.getElementById("multiplicacion").addEventListener("click", calcuMult2());
    document.getElementById("multiplicacion").addEventListener("click", calcuMult3());

}

    function calcuMult(a,b){
        var para7 = document.getElementById("para7");
    
        a= 10; b= 5;
    
    para7.innerText = a * b;
     
    }

    function calcuMult2(){
        var para8 = document.getElementById("para8");
        para8.innerText = "La multiplicacion de los numeros es:" + funcionnreturn(5,3);
    }
    function funcionnreturn (a,b) {
        
    
        return a * b;
      
     
    }
    console.log(funcionnreturn(5,3));
    
    
    function calcuMult3(){
    
    var para9 = document.getElementById("para9");
    
    
       var num1 = 5;
        var num2 = 2;
        
        var multiplicacion = num1 * num2;
        
        para9.innerText = "La multiplicacion de los numeros es:" + multiplicacion;
    }

