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

// * For Changing Color of Card on play.
// var oceanCard = document.getElementById("ocean-card");
// var birdCard = document.getElementById("bird-card");
// var rainCard = document.getElementById("rain-card");
// var thunderCard = document.getElementById("thunder-card");
// var windCard = document.getElementById("wind-card");
// var seagullCard = document.getElementById("seagull-card");
// var cricketCard = document.getElementById("cricket-card");
// var coffeeCard = document.getElementById("coffee-card");
// var campCard = document.getElementById("camp-card");
// var keyboardCard = document.getElementById("keyboard-card");
// var waterfallCa  rd = document.getElementById("waterfall-card");
// var meditateCard = document.getElementById("meditate-card");

// var CardOcean = document.getElementById(")

// var test = document.getElementsByClassName("sound-icon")[0];

function play(audioElem){
    audio = audioElem;
    audio.loop = true;

    if(audio.paused){
        audio.play();
        // test.style.background = "rgba(200, 200, 200, 1)";
        // document.getElementById(card).style.background = "rgba(200, 200, 200, 1)"
    }
    else{
        audio.pause();
        // test.style.background = "rgba(200, 200, 200, .2)";
        // document.getElementById(card).style.background = "rgba(200, 200, 200, 1)"
    }
    // changeGridColor("sound-icon");
}

function changeVol(volumeAmount, audioElem){
    
    audObj = audioElem;
    audObj.volume = volumeAmount;
}


// let toggle = true;
// function changeGridColor(divElemId){
//     const gridElem = document.getElementsByClassName(divElemId);
    
//     gridElem.style.backgroundColor = toggle ? "rgba(255,255,255,1)" : "rgba(255,255,255,.2)"
//     toggle = !toggle;

// }
let toggle = true;
function changeCardColor(id){
    const elem = document.getElementById(id);
    elem.style.backgroundColor = toggle ? "rgba(255,255,255,1 )" : "rgba(255,255,255,.2)";
    toggle = !toggle;
}