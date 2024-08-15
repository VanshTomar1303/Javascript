let task=document.getElementById("task");
let text=document.getElementById("text");
let tasks=[];

function add(){
    let taskValue = task.value; 
    tasks.push(taskValue);
    taskInput.value = "";
}
function display(){
    text.textContent = tasks.join("");
}


