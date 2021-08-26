var global_id;
function getId(id){
    global_id = id;
    set();

}

function getTime (id){
    document.getElementById("time").innerHTML= 
    new Date().toLocaleString("en-us",{timeZone:id,timeStyle:"medium",hourCycle:"h23"});    
}

function set(){
setInterval(function(){
    getTime(global_id);
})}