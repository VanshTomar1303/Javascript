const min=1;
const max=100;
const random=Math.floor(Math.random()*(max-min+1))+min;
let answer;
let attempt=0;
let start=true;


while(start){
    answer=window.prompt(`Guess Number B/W ${min} to ${max}`);
    answer=Number(answer);
    if(answer<random){
        attempt++;
        window.alert("Too low! Try again");
    }
    else if(answer>random){
        attempt++;
        window.alert("Too High! Try again");
    }
    else{
        window.alert(`Correct! answer is ${answer},you guess in ${attempt} attempt`);
        start=false;
    }
    
}