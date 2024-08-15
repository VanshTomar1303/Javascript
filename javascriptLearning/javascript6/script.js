let input=document.querySelector('#input');
let img=document.querySelector('img');

function generate(){
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
}