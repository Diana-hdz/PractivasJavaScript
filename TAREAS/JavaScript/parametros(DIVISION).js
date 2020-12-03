function EventListener(){
    document.getElementById("division").addEventListener("click", calcuDivision());
    document.getElementById("division").addEventListener("click", calcuDivision2());
    document.getElementById("division").addEventListener("click", calcuDivision3());

}
function calcuDivision(a,b){
    var para1 = document.getElementById("para1");

    a= 10; b= 5;

para1.innerText = a / b;
 
}
function calcuDivision2(){
    var para2 = document.getElementById("para2");
    para2.innerText = "La Division de los numeros es:" + funcionnreturn(10,5);
}
function funcionnreturn (a,b) {
    

    return a / b;
  
 
}
console.log(funcionnreturn(10,5));


function calcuDivision3(){

var para3 = document.getElementById("para3");


   var num1 = 5;
    var num2 = 2;
    
    var Division = num1 + num2;
    
    para3.innerText = "La Division de los numeros es:" + Division;
}
