function EventListener(){
    document.getElementById("suma").addEventListener("click", calcuSuma());
    document.getElementById("suma").addEventListener("click", calcuSuma1());
    document.getElementById("suma").addEventListener("click", calcuSuma2());
   
   
}
function calcuSuma(a,b){
    var para1 = document.getElementById("para1");

    a= 10; b= 5;

para1.innerText = a + b;
 
}
function calcuSuma1(){
    var para2 = document.getElementById("para2");
    para2.innerText = "La suma de los numeros es:" + funcionnreturn(5,3);
}
function funcionnreturn (a,b) {
    

    return a + b;
  
 
}
console.log(funcionnreturn(5,3));


function calcuSuma2(){

var para3 = document.getElementById("para3");


   var num1 = 5;
    var num2 = 2;
    
    var suma = num1 + num2;
    
    para3.innerText = "La suma de los numeros es:" + suma;
}
