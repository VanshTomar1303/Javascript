
const adjective={
    1:"crazy",
    2:"amazing",
    3:"fire"
};
const shopName={
    1:"engine",
    2:"foods",
    3:"garments"
};
const anotherName={
    1:"bros",
    2:"limited",
    3:"hub"
};
let nameBus=document.getElementById("name");

function businessName(){
    let random1=Math.floor(Math.random()*3+1);
    let random2=Math.floor(Math.random()*3+1);
    let random3=Math.floor(Math.random()*3+1);

    nameBus.textContent=adjective[random1]+" "+shopName[random2]+" "+anotherName[random3];
}
