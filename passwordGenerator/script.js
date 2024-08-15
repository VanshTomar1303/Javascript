let num=document.getElementById("num");
let result=document.getElementById("password");

function generatePassword(){
    const n=num.value;
    const lowerChar="abcdefghijklmnopqrstuvwxyz";
    const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number="1234567890";
    const symbol="!@#$%^&*()_+-=";

    let allowChar=lowerChar+upperCase+number+symbol;
    let password="";

    for(let i=0;i<n;i++){
        const index=Math.floor(Math.random()*allowChar.length);
        password+=allowChar[index];
    }
    result.textContent+=password;
}
