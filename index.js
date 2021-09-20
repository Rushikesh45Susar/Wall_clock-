function clock(){
    time = new Date();
    hour = time.getHours();
    seconds = time.getSeconds();
    minutes = time.getMinutes();
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minutes').innerHTML = minutes ;
    document.getElementById('seconds').innerHTML = seconds ;
}

setInterval(clock , 1000);


let hourHand = document.getElementById('hour2');
let minuteHand = document.getElementById('minute2');
let secondHand = document.getElementById('second2');

function setClock2(){
    clock2 = new Date();
    secondRatio = clock2.getSeconds() / 60 ;
    minuteRatio = (secondRatio + clock2.getMinutes()) / 60 ;
    hourRatio = (minuteRatio + clock2.getHours()) / 12 ;
    
    setRotation(secondHand , secondRatio);
    setRotation(minuteHand , minuteRatio);
    setRotation(hourHand , hourRatio)
}

function setRotation(element , rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio* 360)
}

setInterval(setClock2 , 1000);
setClock2()

