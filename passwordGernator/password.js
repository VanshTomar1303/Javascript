const passwordLength=8;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumber=true;
const includeSymbols=true;
const pass=document.getElementById("pass");

function generatePass(length,includeLowerCase,includeUpperCase,includeNumber,includeSymbols){
    const lowerChar="abcdefghijklmnopqrstuvwxyz";
    const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number="1234567890";
    const symbol="!@#$%^&*()_+-=";

    let allowChar="";
    let password="";

    allowChar+=includeLowerCase ? lowerChar:"";
    allowChar+=includeUpperCase ? upperCase:"";
    allowChar+=includeNumber ? number:"";
    allowChar+=includeSymbols ? symbol:"";

    for(let i=0;i<length;i++){
        const index=Math.floor(Math.random()*allowChar.length);
        password+=allowChar[index];
    }
    return password;
}
const password=generatePass(passwordLength,includeLowerCase,includeNumber,includeUpperCase,includeSymbols);
pass.textContent=password;
