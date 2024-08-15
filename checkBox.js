const checkBox=document.getElementById("checkBox");
const visa=document.getElementById("visa");
const masterCard=document.getElementById("masterCard");
const payPal=document.getElementById("payPal");
const submit=document.getElementById("submit");
const resultSub=document.getElementById("resultSub");
const paySub=document.getElementById("paySub");

submit.onclick=function(){
if(checkBox.checked){
    resultSub.textContent=`You Subscribed`;
}
else{
    resultSub.textContent=`You are not Subscribed`;
}
if(visa.checked){
    paySub.textContent=`You Pay with VISA`;
}
else if(masterCard.checked){
    paySub.textContent=`You Pay with MASTER CARD`;
}
else if(payPal.checked){
    paySub.textContent=`You pay with PAYPAL`;
}
else{
    paySub.textContent=`choose first`;
}
}