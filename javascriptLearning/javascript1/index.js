/* 
creating a faulty calculator
+ --> -
* --> +
- --> /
/ --> *
*/

let a=prompt("Enter First number:");
let b=prompt("Enter Second number");
let c=prompt("Enter operator(+ - / *):");
let random=Math.random();
let result=document.getElementById("faultycalculator");

if(random>0.1){
    switch(c){
        case '+':
            result.textContent=Number(a)+Number(b);
            break;
        case '-':
            result.textContent=Number(a)-Number(b);
            break;
        case '*':
            result.textContent=Number(a)*Number(b);
            break; 
        case '/':
            result.textContent=Number(a)/Number(b);
            break;
       } 
}
else{
    switch(c){
        case '+':
            result.textContent=Number(a)-Number(b);
            break;
        case '-':
            result.textContent=Number(a)/Number(b);
            break;
        case '*':
            result.textContent=Number(a)+Number(b);
            break; 
        case '/':
            result.textContent=Number(a)*Number(b);
            break;
       }
    
}