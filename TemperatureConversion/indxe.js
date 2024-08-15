const textbox=document.getElementById("textbox");
const celcius=document.getElementById("celcius");
const fahrenheit=document.getElementById("fahrenheit");
const label=document.getElementById("label");
let temp=0;
let result=0;

function convert(){
    
    if(celcius.checked){
        temp=Number(textbox.value);
        result=temp*9/5+32;
        label.textContent=result.toFixed(1)+" F";
    }
    else if(fahrenheit.checked){
        temp=Number(textbox.value);
        result=(temp-32)*(5/9);
        label.textContent=result.toFixed(1)+" C";
    }
    else{
        label.textContent="Freak select something";
    }
    
}
