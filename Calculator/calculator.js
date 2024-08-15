const display1=document.getElementById("textbox");


    function display(input){
        display1.value+=input;
    }
    function clearDisplay(){
        display1.value-=input;
    }
    function calculate(){
        try{
        display1.value=eval(display1.value);
        }catch(error){
            display1.value="ERROR";
        }
    }

