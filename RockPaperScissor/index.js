const choice=['Rock','Paper','Scissor'];
const player=document.getElementById("player");
const computer=document.getElementById("computer");
const result=document.getElementById("result");
let win=0;
let loss=0;

function playGame(playerChoice){
    const compMove=choice[Math.floor(Math.random()*3)];
    let show="";
    if(compMove===playerChoice){
        show="IT'S A TIE!"; 
    }
    else{
        switch(playerChoice){
            case 'Rock':
                show=(compMove==='Scissor')?"YOU WIN!":"YOU LOSE!";
            break;
            case 'Paper':
                show=(compMove==='Rock')?"YOU WIN!":"YOU LOSE!";
            break;
            case 'Scissor':
                show=(compMove==='Paper')?"YOU WIN!":"YOU LOSE!";
            break;
        }
    }
    

    switch(show){
        case "YOU WIN!":
            win++;
            player.textContent=`PLAYER WINS:${win}`;
            break;
        case "YOU LOSE!":
            loss++;
            computer.textContent=`COMPUTER WINS:${loss}`;
            break;
    }
    result.textContent=show;
}