function rollDice(){
    const text=document.getElementById("textbox").value;
    const result=document.getElementById("result");
    const image=document.getElementById("image");
    const values=[];
    const images=[];

    for(let i=0;i<text;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="image/${value}.png" alt="Dice:${value}">`);
    }
    result.textContent=`Dice :${values.join(', ')}`;
    image.innerHTML=images.join('');
}