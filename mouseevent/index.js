const box=document.getElementById("box");

box.addEventListener("click",event=>{
    event.target.style.backgroundColor="tomato";
    event.target.style.textContent="OUCH!";
});

box.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor="yellow";
    event.target.style.textContent="Don't do that!";
});

box.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor="green";
    event.target.style.textContent="Click Me!";
});