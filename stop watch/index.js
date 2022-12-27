let seconds = 00;
let tens = 00;
let appendTens = document.querySelector('#tens');
let appendSeconds = document.querySelector('#seconds');

let startbtn = document.querySelector('#startbtn')
let stopbtn = document.querySelector('#stopbtn')
let resetbtn = document.querySelector('#resetbtn');

let interval;

function startTimer(){
    tens++;
    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0
        appendTens.innerHTML = "0" + 0;
    }

    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}

startbtn.addEventListener('click', function(){
    interval = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function(){
    clearInterval(interval)
})

resetbtn.addEventListener('click', function(){
    clearInterval(interval)
    tens = "00";
    seconds = "00"
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
})