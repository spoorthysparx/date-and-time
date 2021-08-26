let millisecond=0;
let second=0;
let minute=0;
let displaysecond=0;
let displayminute=0;
let interval=null;
let status="stopped";

function stopwatch(){

    millisecond++;
    if(millisecond/1000==1){
        millisecond=0;
        second++;
        
        if(second/60==1){
            second=0;
            minute++;
        }
    }
    if(second<10){
        displaysecond = "0" + second.toString();
    }
    else{
        displaysecond=second;
    }
    if(minute<10){
        displayminute = "0" + minute.toString();
    }
    else{
        displayminute=minute;
    }
    document.getElementById("display").innerHTML= displayminute + ":"+ displaysecond + ":" + millisecond
}

function startstop(){
    if(status=="stopped"){
        interval = window.setInterval(stopwatch,1);
        document.getElementById("startstop").innerHTML= "stop";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML= "start";
        status = "stopped";
    }
}

function reset(){
    window.clearInterval(interval);
    millisecond=0;
    second=0;
    minute=0;
    document.getElementById("display").innerHTML= "00:00:000"
    document.getElementById("startstop").innerHTML= "start"

}