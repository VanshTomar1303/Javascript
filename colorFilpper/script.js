
function setColor(color){
    document.body.style.backgroundColor=color;
}
function setRandom(){
    let btn=document.getElementById("random");
    const g=Math.floor(Math.random()*255);
    const r=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
    btn.addEventListener('mouseout', event=> {
        event.target.style.backgroundColor = `rgb(255,255,255)`;
    });
    btn.addEventListener('mouseover', event=> {
        event.target.style.backgroundColor = `rgba(${r},${g},${b},)`;
    });
}