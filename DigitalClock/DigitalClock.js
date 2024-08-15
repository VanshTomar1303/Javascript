function clock(){
    const date=new Date();

    let hrs=date.getHours();
    const amPm=hrs<=12?"AM":"PM";
    hrs=hrs%12||12;
    hrs=hrs.toString().padStart(2,0);

    const min=date.getMinutes().toString().padStart(2,0);
    const sec=date.getSeconds().toString().padStart(2,0);

    const str=`${hrs}:${min}:${sec} ${amPm}`;
    document.getElementById("clock").textContent=str;
}
clock();
setInterval(clock,1000);