

let hour = document.getElementById("hourhand");
let minute = document.getElementById("minutehand");
let second = document.getElementById("secondhand");


function realTime(){
    let date =new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hourtime = 30*hr + min/2;
    let minutetime = 6*min;
    let secondtime = 6*sec;
    
    hour.style.transform = `rotate(${hourtime}deg)`;
    minute.style.transform = `rotate(${minutetime}deg)`;
    second.style.transform = `rotate(${secondtime}deg)`;
}

setInterval (realTime, 1000);
