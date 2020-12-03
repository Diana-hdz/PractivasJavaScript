function EventListener(){
    document.getElementById("resta").addEventListener("click",calcuResta());
    document.getElementById("resta").addEventListener("click",calcuResta2());
    document.getElementById("resta").addEventListener("click",calcuResta3());


}
function calcuResta(){
    var para1 = document.getElementById("para1");

    a= 10; b= 5;

para1.innerText =  a - b;
 
}
function calcuResta2(){
    var para2 = document.getElementById("para2");
    para2.innerText = "La resta de los numeros es:" + funcionnreturn(10,5);
}
function funcionnreturn (a,b) {
    

    return a - b;
  
 
}
console.log(funcionnreturn(10,5));


function calcuResta3(){

var para3 = document.getElementById("para3");


   var num1 = 5;
    var num2 = 2;
    
    var resta = num1 - num2;
    
    para3.innerText = "La resta de los numeros es:" + resta;
}

