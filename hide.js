const btn=document.getElementById("btn");
const img=document.getElementById("img");

btn.addEventListener("click",event=>{
    //DISPLAY
    // if(img.style.display==="none"){
    //     img.style.display="block";
    //     btn.textContent="HIDE";
    // }
    // else{
    //     img.style.display="none";
    //     btn.textContent="SHOW";
    // }

    //visibility
    if(img.style.visibility==="hidden"){
        img.style.visibility="visible";
        btn.textContent="HIDE";
    }
    else{
        img.style.visibility="hidden";
        btn.textContent="SHOW";
    }

});