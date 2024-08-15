let btn=document.getElementById("btn");
let text=document.getElementById("textbox");
let para=document.getElementById("para");

btn.onclick=function(){
    let age=text.value;
    let x=Number(age);
    if(x>=18){
        para.textContent='Your are good';
    }
    else if(x<18){
        para.textContent='you are not good';
    }
    else{
        para.textContent='freak';
    }
}