const btn=document.getElementById("btn");
const label=document.getElementById("dice");
let random;
const max=6;
const min=1;

btn.onclick=function () {
    random=Math.floor(Math.random()*max)+min;
    label.textContent=random;
}
