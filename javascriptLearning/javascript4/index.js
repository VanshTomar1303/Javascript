let color=[
    "black",
    "red",
    "blue",
    "purple",
    "orange",
    "dark-blue",
    "pink",
    "voilet",
    "grey",
    "green"
];
let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");
let box4=document.getElementById("box4");
let box5=document.getElementById("box5");


function colorPicker(...elements){

    let random=Math.floor(Math.random()*10);
    let random1=Math.floor(Math.random()*10);
    let random2=Math.floor(Math.random()*10);
    let random3=Math.floor(Math.random()*10);
    let random4=Math.floor(Math.random()*10);
    
    box1.style.backgroundColor = color[random];
    box2.style.backgroundColor = color[random1];
    box3.style.backgroundColor = color[random2];
    box4.style.backgroundColor = color[random3];
    box5.style.backgroundColor = color[random4];
}