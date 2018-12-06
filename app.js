function clock (){
const fullDate = new Date();
let hour = fullDate.getHours();
let minute = fullDate.getMinutes();
let second = fullDate.getSeconds();

if(hours < 10){
    hours = "0" + hours;
}
if(minute < 10){
    minute = "0" + minute;
}
if(second < 10){
    second = "0" + second;
}

document.getElementById('second').innerHTML = ": " + second;
document.getElementById('minute').innerHTML = ": " + minute;
document.getElementById('hours').innerHTML = hour;
}

setInterval(clock, 100);