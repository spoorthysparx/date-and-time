//1. Timer -> start (time: inputBox)
//2. Timer -> reset -> countdownLabel - time: inputBox

var set_interval;
let time = 0;
var countdown, minutes, seconds;

function set_countdown() {
    countdown = document.getElementById("countdown");
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
}

function start_timer() {
    var input = document.getElementById("inputArea").value;

    console.log(input);
    time = input * 60;

    set_interval = setInterval(timer, 1000);
}

function reset() {
    clearInterval(set_interval);
    countdown.innerHTML = `${'00'}: ${'00'}`;
}

function timer() {
    set_countdown();   
    countdown.innerHTML = `${minutes}: ${seconds}`;
    time--;
    if (time < 0) {
        clearInterval(set_interval);
    }
}



