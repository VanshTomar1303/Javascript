function calculate(){
    const feildPrinciple=document.getElementById("principleAmount");
    const feildRate=document.getElementById("rateNumber");
    const feildYear=document.getElementById("Years");
    const feildResult=document.getElementById("result");

    let principle=Number(feildPrinciple.value);
    let rate=Number(feildRate.value);
    let year=Number(feildYear.value);

    if(principle==0||isNaN(principle)){
        principle=0;
        feildPrinciple.value=0;
    }
    if(rate==0||isNaN(rate)){
        rate=0;
        feildRate.value=0;
    }
    if(year==0||isNaN(year)){
        year=0;
        feildYear.value=0;
    }
    

    const result=principle*Math.pow((1+rate/100),1*year);

    feildResult.textContent="₹ "+result;
}