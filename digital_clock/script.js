let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

window.onload=startInterval;

function startInterval() {
    setInterval("startTime();",1);
}

function startTime() {
    const d = new Date();

    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();   
    let year = d.getFullYear();

    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    if (hour < 10 && minute < 10 && second <10 ) {
        document.getElementById('hour').innerHTML = '0'+hour + ":0"+minute + ":" + '0'+second;
    } else if (hour < 10 && minute < 10) {
        document.getElementById('hour').innerHTML = '0'+hour + ":" + '0'+minute + ":" + second;
    } else if (hour < 10 && second < 10) {
        document.getElementById('hour').innerHTML = '0'+hour + ":" + minute + ":" + '0'+second;
    } else if (minute < 10 && second <10) {
        document.getElementById('hour').innerHTML = hour + ":" + '0'+minute + ":" + '0'+second;
    } else if (hour < 10) {
        document.getElementById('hour').innerHTML = '0'+hour + ":" + minute + ":" + second;
    } else if (minute < 10) {
        document.getElementById('hour').innerHTML = hour + ":0"+minute + ":" + second;
    } else if (second < 10) {
        document.getElementById('hour').innerHTML = hour + ":" + minute + ":" + '0'+second;
    } else {
        document.getElementById('hour').innerHTML = hour + ":" + minute + ":" + second;
    }

    if (day == 1 || day == 21 || day == 31) {
        document.getElementById("date").innerHTML = days[day-1] +', the ' + date +'st of ' + months[month-1] +', ' + year;
    } else if (day == 2 || day == 22) {
        document.getElementById("date").innerHTML = days[day-1] +', the ' + date +'nd of ' + months[month-1] +', ' + year;
    } else if (day == 3 || day == 23) {
        document.getElementById("date").innerHTML = days[day-1] +', the ' + date +'rd of ' + months[month-1] +', ' + year;
    } else {
        document.getElementById("date").innerHTML = days[day-1] +', the ' + date +'th of ' + months[month-1] +', ' + year;
    }
}   

hourInDoc=document.getElementById("hour");
hourInDoc.innerHTML = hour + ":" + minute + ":" + second;

dateInDoc=document.getElementById("date");
dateInDoc.innerHTML = days[day-1] +', the ' + date +'th of ' + months[month-1] +', ' + year;

