var ocean = document.getElementById("ocean-aud");
var bird = document.getElementById("bird-aud");
var rain = document.getElementById("rain-aud");
var thunder = document.getElementById("thunder-aud");
var wind = document.getElementById("wind-aud");
var seagull = document.getElementById("seagull-aud");
var crickets = document.getElementById("cricket-aud");
var coffee = document.getElementById("coffee-aud");
var campfire = document.getElementById("fire-aud");
var keyboard = document.getElementById("keyboard-aud");
var waterfall = document.getElementById("waterfall-aud");
var meditate = document.getElementById("meditate-aud");

function play(audioElem){
    audio = audioElem;
    audio.loop = true;

    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
}

function changeVol(volumeAmount, audioElem){
    
    audObj = audioElem;
    audObj.volume = volumeAmount;
}
