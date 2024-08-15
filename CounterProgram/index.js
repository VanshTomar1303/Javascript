const decrease=document.getElementById("decrease");
const increase=document.getElementById("increase");
const reset=document.getElementById("reset");
const number=document.getElementById("number");
let count=0;

increase.onclick=function(){
    count++;
    number.textContent=count;
}
decrease.onclick=function(){
    count--;
    number.textContent=count;
}
reset.onclick=function () {
    count=0;
    number.textContent=count;
}