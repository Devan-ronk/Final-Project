
let opacity = 1;

var click = new Audio('click.mp3');

var music = new Audio('music.mp3');

var error = new Audio('locked.mp3');

var onelose = new Audio('onelose.mp3');
var twolose = new Audio('twolose.mp3');
var threelose = new Audio('threelose.mp3');
var fourlose = new Audio('fourlose.mp3');
var fivelose = new Audio('fivelose.mp3');
var sixlose = new Audio('sixlose.mp3');
var losemusic = new Audio('losemusic.mp3');
var countdownsound = new Audio('countdownsound.mp3');

var winsound = new Audio('winsound.mp3');


var swimProgress = 0;

let swimSpeed = 8;

var coinsNum = 0;

music.play();
music.loop = true;

let currentVolume = 100;

let x = 1;

let levelNum = 1;

//SET TO FALSE IN FINAL RELEASE
let onedone = false;
let twodone = false;
let threedone = false;
let fourdone = false;
let fivedone = true;

function duction() {
    const intro = document.getElementById('intro');
    const game = document.getElementById('game');
}

function introduction() {

    backtomenu();
    opacity -= 0.01; 
    intro.style.opacity = opacity;
    if (opacity <= 0) {
        intro.style.display = 'none';
        game.style.display = 'block';
    } else {
        requestAnimationFrame(introduction);
    }
}

setTimeout(() => {
  requestAnimationFrame(introduction);
}, 1000);

function clickPlay() {
    click.pause();
    click.currentTime = 0;
    click.play();
}

function backtomenu() {
    clickPlay();
    document.getElementById('game').style.background = 'url("background.png")';
    document.getElementById('game').style.backgroundSize = '100% 100%';
    document.getElementById('game').style.backgroundRepeat = 'no-repeat';
    document.getElementById('game').style.margin = '0';
    // document.getElementById('progress').style.backgroundImage = 'url("")';
    // document.getElementById('progress').style.height = '0px';
    // document.getElementById('oppprogress').style.backgroundImage = 'url("")';
    // document.getElementById('oppprogress').style.height = '0px';
    document.getElementById('game').innerHTML ='<img src="title.png" width="700px"><br>'
    document.getElementById('game').innerHTML += '<button id="play" onClick="gamestart()"><img src="play.png" width="250px"></button>'
    document.getElementById('game').innerHTML += '<button id="options" onClick="options()"><img src="options.png" width="250px"></button>'
}

function gamestart() {
    clickPlay();
    back();
    coins();
    // document.getElementById('progress').style.backgroundImage = 'url("")';
    // document.getElementById('progress').style.height = '0px';
    // document.getElementById('oppprogress').style.backgroundImage = 'url("")';
    // document.getElementById('oppprogress').style.height = '0px';
    document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
    document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
    document.getElementById('game').innerHTML += '<button id="one" onClick="one()"><img src="one.png" width="500px"></button>'
    document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
    document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="ethan.png" width="200px">'
    document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. G-than Elong</h1><br><p>G-than swims at a moderate pace with normal breathing patterns<p>'
    document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
    levelNum = 1;
}

function back() {
    document.getElementById('game').innerHTML = '<button id="back" onclick="backtomenu()"><img src="back.png" width="100px"></button>';

}

function coins() {
    let coinsElement = document.getElementById('coinsNumber');
    if (!coinsElement) {
        // Create the coins display if it doesn't exist
        document.getElementById('game').innerHTML += '<img src="coins.png" id="coins" width="50px">' + `<pr id="coinsNumber">:${coinsNum}</pr>`;
    } else {
        // Update the coins display dynamically
        coinsElement.textContent = `:${coinsNum}`;
    }
}

function options() {
    clickPlay();
    back();
    document.getElementById('game').innerHTML += '<img src="optionstitle.gif" width="400px"><br>'
    document.getElementById('game').innerHTML += '<button id="fullscreen" onClick="fullscreen()"><img src="fullscreen.png" width="100px"></button>';
    document.getElementById('game').innerHTML += '<button id="credits" onClick="credits()"><img src="credits.png" width="250px"></button><br><br>';
    document.getElementById('game').innerHTML += '<img src="volumetitle.png" width="200px"><br><br>';
    document.getElementById('game').innerHTML += `<input type="range" min="0" max="100" value="${currentVolume}" id="volume" class="slider">`
    volume_slide();
    let x = 1;
}

function volume_slide() {
    let volume = document.getElementById('volume');
    volume.addEventListener('input', function(e) {
        currentVolume = volume.value;
        click.volume = volume.value / 100;
        music.volume = volume.value / 100;
    });
}

function fullscreen() {
    clickPlay();
    document.documentElement.requestFullscreen();
}

function credits() {
    clickPlay();
    back();
        document.getElementById('game').innerHTML += '<br><h1>Credits</h1><br><h2>Game: Benjamin F. Wu and Devan</h2><br><h2>Teacher: Dr. Williams</h2><br><h2>Music: Royalty Free</h2><br><img src="dr.png" width="300px">'
}

function forward() {
    clickPlay();
    if  (levelNum == 1) {
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        if (onedone == true) {
        document.getElementById('game').innerHTML += '<button id="two" onClick="two()"><img src="two.png" width="500px"></button>'
        } else {
        document.getElementById('game').innerHTML += '<button id="twolocked" onClick="error.play()"><img src="twolocked.png" width="500px"></button>'
        }
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="dorsey.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. Morsey Ditchell</h1><p>Morsey Ditchell runs on the water at a fast pace with normal resting patterns<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 2;
    } else if (levelNum == 2) {
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        if (twodone == true) {
            document.getElementById('game').innerHTML += '<button id="three" onClick="three()"><img src="three.png" width="500px"></button>'
        } else {
            document.getElementById('game').innerHTML += '<button id="threelocked" onClick="error.play()"><img src="threelocked.png" width="500px"></button>'
        }
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="david.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. David Chin</h1><p>David swims at a moderate pace with normal breathing patterns, however, he will swim into the wrong lane which boosts him using the lane lines<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 3;
    } else if (levelNum == 3) {
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        if (threedone == true) {
            document.getElementById('game').innerHTML += '<button id="four" onClick="four()"><img src="four.png" width="500px"></button>'
        } else {
            document.getElementById('game').innerHTML += '<button id="fourlocked" onClick="error.play()"><img src="fourlocked.png" width="500px"></button>'
        }
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="matthew.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. Trash Baby</h1><p>Trash Baby swims at a slow pace and needs exra breaths, however, he creates waves that slow you down<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 4;
    } else if (levelNum == 4) {
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        if (fourdone == true) {
            document.getElementById('game').innerHTML += '<button id="five" onClick="five()"><img src="five.png" width="500px"></button>'
        } else {
            document.getElementById('game').innerHTML += '<button id="fivelocked" onClick="error.play()"><img src="fivelocked.png" width="500px"></button>'
        }
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="ilyas.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. Elias Ilmanowie</h1><p>Elias swims at a moderate pace with normal breathing patterns, however, will boom himself forward at key points of the race<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 5;
    }else if (levelNum == 5) { 
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        if (fivedone == true) {
            document.getElementById('game').innerHTML += '<button id="six" onClick="six()"><img src="six.png" width="500px"></button>'
        } else {
            document.getElementById('game').innerHTML += '<button id="sixlocked" onClick="error.play()"><img src="sixlocked.png" width="500px"></button>'
        }
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="shark.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. A Shark</h1><p>Shark swims at a fast pace with no need to breathe<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 6;
    } else if (levelNum == 6) { 
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<button id="one" onClick="one()"><img src="one.png" width="500px"></button>'
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="ethan.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. G-than Elong</h1><p>G-than swims at a moderate pace with normal breathing patterns<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 1;

} else{
}
}

function backward() {
    clickPlay();
    if  (levelNum == 1) {
         back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        if (fivedone == true) {
            document.getElementById('game').innerHTML += '<button id="six" onClick="six()"><img src="six.png" width="500px"></button>'
        } else {
            document.getElementById('game').innerHTML += '<button id="sixlocked" onClick="error.play()"><img src="sixlocked.png" width="500px"></button>'
        }
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="shark.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. A Shark</h1><p>Shark swims at a fast pace with no need to breathe<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 6;
    } else if (levelNum == 2) {
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<button id="one" onClick="one()"><img src="one.png" width="500px"></button>'
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="ethan.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. G-than Elong</h1><p>G-than swims at a moderate pace with normal breathing patterns<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 1;
    } else if (levelNum == 3) {
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        if (onedone == true) {
            document.getElementById('game').innerHTML += '<button id="two" onClick="two()"><img src="two.png" width="500px"></button>'
            } else {
            document.getElementById('game').innerHTML += '<button id="twolocked" onClick="error.play()"><img src="twolocked.png" width="500px"></button>'
            }
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
        document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="dorsey.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. Morse Ditchell</h1><p>Morsey Ditchell runs on the water at a fast pace with normal resting patterns<p>'
         document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 2;
    } else if (levelNum == 4) {
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        if (twodone == true) {
            document.getElementById('game').innerHTML += '<button id="three" onClick="three()"><img src="three.png" width="500px"></button>'
        } else {
            document.getElementById('game').innerHTML += '<button id="threelocked" onClick="error.play()"><img src="threelocked.png" width="500px"></button>'
        }
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
         document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="david.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. David Chin</h1><p>David swims at a moderate pace with normal breathing patterns, however, he will swim into the wrong lane which boosts him using the lane lines<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 3;
    }else if (levelNum == 5) {
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        if (threedone == true) {
            document.getElementById('game').innerHTML += '<button id="four" onClick="four()"><img src="four.png" width="500px"></button>'
        } else {
            document.getElementById('game').innerHTML += '<button id="fourlocked" onClick="error.play()"><img src="fourlocked.png" width="500px"></button>'
        }
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
         document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="matthew.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. Trash Baby</h1><p>Trash Baby swims at a slow pace and needs exra breaths, however, he creates waves that slow you down<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 4;
    } else if (levelNum == 6) {
        back();
        coins();
        document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
        document.getElementById('game').innerHTML += '<button id="backward" onClick="backward()"><img src="backward.png" width="60px"></button>'
        if (fourdone == true) {
            document.getElementById('game').innerHTML += '<button id="five" onClick="five()"><img src="five.png" width="500px"></button>'
        } else {
            document.getElementById('game').innerHTML += '<button id="fivelocked" onClick="error.play()"><img src="fivelocked.png" width="500px"></button>'
        }
        document.getElementById('game').innerHTML += '<button id="forward" onClick="forward()"><img src="forward.png" width="60px"></button>'
          document.getElementById('game').innerHTML += '<br><img src="ben.png" width="200px"><img src="vs.png" width="200px"><img src="ilyas.png" width="200px">'
        document.getElementById('game').innerHTML += '<br><h1>Wen Bu vs. Elias Ilmanowie</h1><p>Elias swims at a moderate pace with normal breathing patterns, however, will boom himself forward at key points of the race<p>'
        document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
        levelNum = 5;

}
}
function shop() {
    clickPlay();
    back();
    document.getElementById('game').innerHTML += '<img src="shoptitle.png" width="200px"><br>'
    document.getElementById('game').innerHTML += '<img src="upgradestitle.png" width="150px"><br>'
    document.getElementById('game').innerHTML += '<button id="Speed" onClick="buyspeed()" title="Speed 200 (Permantly increases distance per stroke)"><img src="speed.png" height="60px"><br><img src="buy.png" width="40px"></button>'
    document.getElementById('game').innerHTML += '<button id="Lungcapacity" onClick="buylungs()" title="Lung Capacity 200 (Permantly increases the time you are able to remain underwater)"><img src="lungs.png" height="60px"><br><img src="buy.png" width="40px"></button>'
    document.getElementById('game').innerHTML += '<button id="Coinboost" onClick="buycoinsup()" title="Coin Boost 400 (Permantly increases coins gained per level by 25)"><img src="coinsup.png" height="60px"><br><img src="buy.png" width="40px"></button><br>'
    document.getElementById('game').innerHTML += '<img src="itemstitle.png" width="100px"><br>'
    document.getElementById('game').innerHTML += '<button id="Oxytank" onClick="buytank()" title="Oxygen Tank 50 (You dont need to breathe for one level)"><img src="tank.png" height="60px"><br><img src="buy.png" width="40px"></button>'  
    document.getElementById('game').innerHTML += '<button id="Timestopper" onClick="buystop()" title="Time Stopper 50 (Temporarily pauses the opponent at the start for one level)"><img src="stop.png" height="60px"><br><img src="buy.png" width="40px"></button>'
    document.getElementById('game').innerHTML += '<button id="Carbonfibersuit" onClick="buysuits()" title="Carbon Primo 50 (Increase speed for one level)"><img src="suit.png" height="60px"><br><img src="buy.png" width="40px"></button>'
    document.getElementById('game').innerHTML += '<button id="Numbingpill" onClick="buypill()" title="Pill 50 (Opponents abilities are inable to effect you for one level)"><img src="pill.png" height="60px"><br><img src="buy.png" width="40px"></button>'
    coins();
}

let purchaseSpeed = 1;

function buyspeed() {
if (purchaseSpeed == 1) {
    if (coinsNum >= 200) {
        clickPlay();
        coinsNum -= 200;
        purchaseSpeed = 0;
        swimSpeed += 4;
        coins();
        alert("You have purchased the speed upgrade, Balance: " + coinsNum);    
        limitedtimespeed = false;
    } else {
        error.play();
        alert("You do not have enough coins to purchase this upgrade");
    }
} else {
    error.play();
    alert("You have already purchased this upgrade");
}
}

let purchaseLungs = 1;
let breathsNeeded = 5

function buylungs() {
if (purchaseLungs == 1) {
    if (coinsNum >= 200) {
        clickPlay();
        coinsNum -= 200;
        purchaseLungs = 0;
        breathsNeeded = 3;
        coins();
        alert("You have purchased the lung capacity upgrade, Balance: " + coinsNum);
        limitedtimebreath = false;
    } else {
        error.play();
        alert("You do not have enough coins to purchase this upgrade");
    }
} else {
    error.play();
    alert("You have already purchased this upgrade");
}
}
let purchaseCoinsup = 1;
let coinsearned = 25;

function buycoinsup() {
if (purchaseCoinsup == 1) {
    if (coinsNum >= 400) {
        clickPlay();
        coinsNum -= 400;
        purchaseCoinsup = 0;
        coinsearned = 50;
        coins();
        alert("You have purchased the coin boost upgrade, Balance: " + coinsNum);
    } else {
        error.play();
        alert("You do not have enough coins to purchase this upgrade");
    }
} else {
    error.play();
    alert("You have already purchased this upgrade");
}
}

let limitedtimebreath = false;
function buytank() {
    if (coinsNum >= 50) {
        clickPlay();
        coinsNum -= 50;
        breathsNeeded = 0;
        coins();
        alert("You have purchased a oxygen tank, Balance: " + coinsNum);
        limitedtimebreath = true;
    } else {
        error.play();
        alert("You do not have enough coins to purchase this item");
    }
}

let oppdive = 0;
let limitedtimestop = false;
function buystop() {
    if (coinsNum >= 50) {
        clickPlay();
        coinsNum -= 50;
        oppdive = 3;
        coins();
        alert("You have purchased a time freezer, Balance: " + coinsNum);
        limitedtimestop = true;
    } else {
        error.play();
        alert("You do not have enough coins to purchase this item");
    }
}

let limitedtimespeed = false;

function buysuits() {   
    if (coinsNum >= 50) {
        clickPlay();
        coinsNum -= 50;
        swimSpeed += 2;
        coins();
        alert("You have purchased a carbon fiber suit, Balance: " + coinsNum);
        limitedtimespeed = true;
    } else {
        error.play();
        alert("You do not have enough coins to purchase this item");
    }
}

let effects = true;

function buypill() {   
    if (coinsNum >= 50) {
        clickPlay();
        coinsNum -= 50;
        effect = false;
        coins();
        alert("You have purchased a pill, Balance: " + coinsNum);
        limitedeffect = true;
    } else {
        error.play();
        alert("You do not have enough coins to purchase this item");
    }
}


function one() {
    clickPlay();
    document.getElementById('game').innerHTML = '';
    document.body.style.backgroundImage = 'url("levelonestart.png")'; //set the img for the swimmers getting ready to dive
    if (limitedtimestop == true) {
        countdownOneAlt();
    } else {
        countdownOne();
    }
    onedone = true;
}

function two() {
    clickPlay();
    document.getElementById('game').innerHTML = '';
    document.body.style.backgroundImage = 'url("leveltwostart.png")'; //set the img for the swimmers getting ready to dive
    countdownTwo();
    
    twodone = true;
}

function three() {
    clickPlay();
    document.getElementById('game').innerHTML = '';
    document.body.style.backgroundImage = 'url("levelthreestart.png")'; //set the img for the swimmers getting ready to dive
    countdownThree();

    threedone = true;
}

function four() {  
    clickPlay();
    document.getElementById('game').innerHTML = '';
    document.body.style.backgroundImage = 'url("levelfourstart.png")'; //set the img for the swimmers getting ready to dive
    countdownFour();

    fourdone = true;
}

function five() {  
    clickPlay();
    document.getElementById('game').innerHTML = '';
    document.body.style.backgroundImage = 'url("levelfivestart.png")'; //set the img for the swimmers getting ready to dive
    countdownFive();

    fivedone = true;
}

function six() {
    clickPlay();
    document.getElementById('game').innerHTML = '';
    document.body.style.backgroundImage = 'url("levelsixstart.png")'; //set the img for the swimmers getting ready to dive
    countdownSix();
}

let aiprogress = 0;
let progress = 0;

function countdownOne() {
    document.getElementById('game').innerHTML = '<img src="countdown.gif" width="400px"><br>'//animation of a 4 second countdown
    document.getElementById('game').style.backgroundImage = 'url("levelonestart.png")';
    countdownsound.play();
        setTimeout(() => {
            document.getElementById('game').innerHTML = ''; //remove the countdown
            document.getElementById('game').style.backgroundImage = 'url("levelonedive.gif")'//delay for the diving animation
                setTimeout(() => {
                    document.getElementById('game').innerHTML = `
                    <div id="progress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <div id="oppprogress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>
                    `;
                    document.getElementById('game').style.backgroundImage = 'url("ethanswimming.gif")' //swimming animation
                    document.getElementById('progress').style.backgroundImage = 'url("progbar.png")'; 
                    document.getElementById('progress').style.height = '70px';
                    document.getElementById('oppprogress').style.backgroundImage = 'url("progbar.png")'; 
                    document.getElementById('oppprogress').style.height = '70px';
                    document.getElementById('progress').innerHTML += '<img src="benhead.png" width="50px" id="head">'
                    document.getElementById('head').style.left = '0px';
                    document.getElementById('oppprogress').innerHTML += '<img src="ethanhead.png" width="50px" id="ghead">'
                    document.getElementById('ghead').style.left = '0px';
                    //document.getElementById('game').innerHTML += '<button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>' //click button to swim
                    ethanaiswim();
                }, 2000);
            }, 3800);
}
function countdownTwo() {
    document.getElementById('game').innerHTML = '<img src="countdown.gif" width="400px"><br>'//animation of a 4 second countdown
    document.getElementById('game').style.backgroundImage = 'url("leveltwostart.png")';
      countdownsound.play();
        setTimeout(() => {
            document.getElementById('game').innerHTML = ''; //remove the countdown
            document.getElementById('game').style.backgroundImage = 'url("leveltwodive.gif")'//delay for the diving animation
                setTimeout(() => {
                    document.getElementById('game').innerHTML = `
                    <div id="progress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <div id="oppprogress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>
                    `;
                    document.getElementById('game').style.backgroundImage = 'url("dorseyswimming.gif")' //swimming animation
                    document.getElementById('progress').style.backgroundImage = 'url("progbar.png")'; 
                    document.getElementById('progress').style.height = '70px';
                    document.getElementById('oppprogress').style.backgroundImage = 'url("doprogbar.png")'; 
                    document.getElementById('oppprogress').style.height = '70px';
                    document.getElementById('progress').innerHTML += '<img src="benhead.png" width="50px" id="head">'
                    document.getElementById('head').style.left = '0px';
                    document.getElementById('oppprogress').innerHTML += '<img src="dorseyhead.png" width="50px" id="dhead">'
                    document.getElementById('dhead').style.left = '0px';
                    //document.getElementById('game').innerHTML += '<button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>' //click button to swim
                    dorseyaiswim();
                }, 2000);
            }, 3800);
}
function countdownThree() {
    document.getElementById('game').innerHTML = '<img src="countdown.gif" width="400px"><br>'//animation of a 4 second countdown
    document.getElementById('game').style.backgroundImage = 'url("levelthreestart.png")';
      countdownsound.play();
        setTimeout(() => {
            document.getElementById('game').innerHTML = ''; //remove the countdown
            document.getElementById('game').style.backgroundImage = 'url("levelthreedive.gif")'//delay for the diving animation
                setTimeout(() => {
                    document.getElementById('game').innerHTML = `
                    <div id="progress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <div id="oppprogress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>
                    `;
                    document.getElementById('game').style.backgroundImage = 'url("davidswimming.gif")' //swimming animation
                    document.getElementById('progress').style.backgroundImage = 'url("progbar.png")'; 
                    document.getElementById('progress').style.height = '70px';
                    document.getElementById('progress').innerHTML += '<img src="davidhead.png" width="50px" id="dahead">'
                    document.getElementById('dahead').style.left = '0px';
                    document.getElementById('progress').innerHTML += '<img src="benhead.png" width="50px" id="head">'
                    document.getElementById('head').style.left = '0px';
                    //document.getElementById('game').innerHTML += '<button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>' //click button to swim
                    davidaiswim();
                }, 2000);
            }, 3800);
}
function countdownFour() {
    document.getElementById('game').innerHTML = '<img src="countdown.gif" width="400px"><br>'//animation of a 4 second countdown
    document.getElementById('game').style.backgroundImage = 'url("levelfourstart.png")';
    countdownsound.play();
        setTimeout(() => {
            document.getElementById('game').innerHTML = ''; //remove the countdown
            document.getElementById('game').style.backgroundImage = 'url("levelfourdive.gif")'//delay for the diving animation
                setTimeout(() => {
                    document.getElementById('game').innerHTML = `
                    <div id="progress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <div id="oppprogress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>
                    `;
                    document.getElementById('game').style.backgroundImage = 'url("temuswimming.gif")' //swimming animation
                    document.getElementById('progress').style.backgroundImage = 'url("progbar.png")'; 
                    document.getElementById('progress').style.height = '70px';
                    document.getElementById('oppprogress').style.backgroundImage = 'url("tprogbar.png")'; 
                    document.getElementById('oppprogress').style.height = '70px';
                    document.getElementById('progress').innerHTML += '<img src="benhead.png" width="50px" id="head">'
                    document.getElementById('head').style.left = '0px';
                    document.getElementById('oppprogress').innerHTML += '<img src="temuhead.png" width="50px" id="temuhead">'
                    document.getElementById('temuhead').style.left = '0px';
                    //document.getElementById('game').innerHTML += '<button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>' //click button to swim
                    temuaiswim();
                }, 2000);
            }, 3800);
}
function countdownFive() {
    document.getElementById('game').innerHTML = '<img src="countdown.gif" width="400px"><br>'//animation of a 4 second countdown
    document.getElementById('game').style.backgroundImage = 'url("levelfivestart.png")';
    countdownsound.play();
        setTimeout(() => {
            document.getElementById('game').innerHTML = ''; //remove the countdown
            document.getElementById('game').style.backgroundImage = 'url("levelfivedive.gif")'//delay for the diving animation
                setTimeout(() => {
                    document.getElementById('game').innerHTML = `
                    <div id="progress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <div id="oppprogress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>
                    `;
                    document.getElementById('game').style.backgroundImage = 'url("ilyasswimming.gif")' //swimming animation
                    document.getElementById('progress').style.backgroundImage = 'url("progbar.png")'; 
                    document.getElementById('progress').style.height = '70px';
                    document.getElementById('oppprogress').style.backgroundImage = 'url("iprogbar.png")'; 
                    document.getElementById('oppprogress').style.height = '70px';
                    document.getElementById('progress').innerHTML += '<img src="benhead.png" width="50px" id="head">'
                    document.getElementById('head').style.left = '0px';
                    document.getElementById('oppprogress').innerHTML += '<img src="ilyashead.png" width="50px" id="ilhead">'
                    document.getElementById('ilhead').style.left = '0px';
                    //document.getElementById('game').innerHTML += '<button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>' //click button to swim
                    ilyasaiswim();
                }, 2000);
            }, 3800);
}
function countdownSix() {
    document.getElementById('game').innerHTML = '<img src="countdown.gif" width="400px"><br>'//animation of a 4 second countdown
    document.getElementById('game').style.backgroundImage = 'url("levelsixstart.png")';
    countdownsound.play();
        setTimeout(() => {
            document.getElementById('game').innerHTML = ''; //remove the countdown
            document.getElementById('game').style.backgroundImage = 'url("levelsixdive.gif")'//delay for the diving animation
                setTimeout(() => {
                    document.getElementById('game').innerHTML = `
                    <div id="progress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <div id="oppprogress" style="position:relative; width:530px; height:70px; margin:auto;"></div>
                    <button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>
                    `;
                    document.getElementById('game').style.backgroundImage = 'url("sharkswimming.gif")' //swimming animation
                    document.getElementById('progress').style.backgroundImage = 'url("progbar.png")'; 
                    document.getElementById('progress').style.height = '70px';
                    document.getElementById('oppprogress').style.backgroundImage = 'url("progbar.png")'; 
                    document.getElementById('oppprogress').style.height = '70px';
                    document.getElementById('progress').innerHTML += '<img src="benhead.png" width="50px" id="head">'
                    document.getElementById('head').style.left = '0px';
                    document.getElementById('oppprogress').innerHTML += '<img src="sharkhead.png" width="50px" id="sharkhead">'
                    document.getElementById('sharkhead').style.left = '0px';
                    //document.getElementById('game').innerHTML += '<button id="swimbutton" onClick="swimPlay()"><img src="swim.png" width="200px"></button>' //click button to swim
                    sharkaiswim();
                }, 2000);
            }, 3800);
}

function ethanaiswim(){
    if (aiprogress <= 480) {
    aiprogress += 1;
    document.getElementById('ghead').style.left = aiprogress + 'px';
    setTimeout(ethanaiswim, 35);
} else if (aiprogress <= 480 && progress >= 480) {
    win();
    aiprogress = 0;
    progress = 0;
} else {
    lose();
    aiprogress = 0;
    progress = 0;
}
}
setTimeout(ethanaiswim, 200);

function dorseyaiswim(){
    if (aiprogress <= 480) {
    aiprogress += 1;
    document.getElementById('dhead').style.left = aiprogress + 'px';
    setTimeout(dorseyaiswim, 25);
} else {
    lose();
    aiprogress = 0;
    progress = 0;
}
}
setTimeout(dorseyaiswim, 200);

function davidaiswim(){
    if (aiprogress <= 480) {
    aiprogress += 1;
    document.getElementById('dahead').style.left = aiprogress + 'px';
    setTimeout(davidaiswim, 20);
} else {
    lose();
    aiprogress = 0;
    progress = 0;
}
}
setTimeout(davidaiswim, 200);

function temuaiswim(){
    if (aiprogress <= 480) {
    aiprogress += 1;
    document.getElementById('temuhead').style.left = aiprogress + 'px';
    setTimeout(temuaiswim, 20);
} else {
    lose();
    aiprogress = 0;
    progress = 0;
}
}
setTimeout(temuaiswim, 200);

function ilyasaiswim(){
    if (aiprogress <= 480) {
    aiprogress += 1;
    document.getElementById('ilhead').style.left = aiprogress + 'px';
    setTimeout(ilyasaiswim, 20);
} else {
    lose();
    aiprogress = 0;
    progress = 0;
}
}
setTimeout(ilyasaiswim, 200);

function sharkaiswim(){
    if (aiprogress <= 480) {
    aiprogress += 1;
    document.getElementById('sharkhead').style.left = aiprogress + 'px';
    setTimeout(sharkaiswim, 20);
} else {
    lose();
    aiprogress = 0;
    progress = 0;
}
}
setTimeout(sharkaiswim, 200);

function lose() {
    document.getElementById('game').innerHTML = '';
    
    back();
    // document.getElementById('progress').innerHTML = '';
    // document.getElementById('oppprogress').innerHTML = '';
    document.getElementById('game').style.backgroundImage = 'url("sank.png")';
    // document.getElementById('progress').style.backgroundImage = 'url("remove.png")';
    // document.getElementById('oppprogress').style.backgroundImage = 'url("remove.png")';
    // document.getElementById('progress').style.height = '0px';
    // document.getElementById('oppprogress').style.height = '0px';
    if (levelNum == 1) {
    losemusic.play();
        onelose.play();
} else if (levelNum == 2) {
    losemusic.play();
        twolose.play(); 
} else if (levelNum == 3) {
    losemusic.play();
        threelose.play();
} else if (levelNum == 4) {
    losemusic.play();
        fourlose.play();
} else if (levelNum == 5) {
    losemusic.play();
        fivelose.play();
} else {
    losemusic.play();
        sixlose.play();
}
}

function win() {
    // document.getElementById('game').style.backgroundImage = 'url("remove.png")'
    // document.getElementById('game').innerHTML = '';
    // document.getElementById('progress').innerHTML = '';
    // document.getElementById('oppprogress').innerHTML = '';
    // document.getElementById('progress').style.backgroundImage = 'url("remove.png")';
    // document.getElementById('oppprogress').style.backgroundImage = 'url("remove.png")';
    // document.getElementById('progress').style.height = '0px';
    // document.getElementById('oppprogress').style.height = '0px';
    if (levelNum == 1) {
        back();
        document.getElementById('game').style.backgroundImage = 'url("onewin.png")'; //set the img for the swimmers getting ready to dive
        winsound.play();
        onedone = true;
        coinsNum += 50;
    } else if (levelNum == 2) {
        back();
        document.getElementById('game').style.backgroundImage = 'url("twowin.png")'; //set the img for the swimmers getting ready to dive
        winsound.play();
        twodone = true;
        coinsNum += 100;
    } else if (levelNum == 3) {       
        back();
        document.getElementById('game').style.backgroundImage = 'url("threewin.png")'; //set the img for the swimmers getting ready to dive
        winsound.play();
        threedone = true;
        coinsNum += 150;
    } else if (levelNum == 4) {
        back();
        document.getElementById('game').style.backgroundImage = 'url("fourwin.png")'; //set the img for the swimmers getting ready to dive
        winsound.play();
        fourdone = true;
        coinsNum += 200;
    }  else if (levelNum == 5) {
        back();
        document.getElementById('game').style.backgroundImage = 'url("fivewin.png")'; //set the img for the swimmers getting ready to dive
        winsound.play();
        fivedone = true;
        coinsNum += 250;
    } else if (levelNum == 6) {
        back();
        document.getElementById('game').style.backgroundImage = 'url("sixwin.png")'; //set the img for the swimmers getting ready to dive
        winsound.play();
        sixdone = true;
        coinsNum += 300;
    }

}


function swimPlay() {
    progress += swimSpeed;
    document.getElementById('head').style.left = progress + 'px';
    if (progress >= 480) {
        win();
        progress = 0;
        aiprogress = 0;
    } else {
    }
}
duction();
