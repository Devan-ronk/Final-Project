

let opacity = 1;

var click = new Audio('click.mp3');

var music = new Audio('music.mp3');



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

function backtomenu() {
    music.play();
    music.loop = true;
    click.play();
    document.getElementById('game').innerHTML ='<img src="title.png" width="700px"><br>'
    document.getElementById('game').innerHTML += '<button id="play" onClick="gamestart()"><img src="play.png" width="250px"></button>'
    document.getElementById('game').innerHTML += '<button id="options" onClick="options()"><img src="options.png" width="250px"></button>'
}

function gamestart() {
    click.play();
    back();
    document.getElementById('game').innerHTML += '<img src="gamestart.png" width="400px"><br>'
    document.getElementById('game').innerHTML += '<button id="one" onClick="one()"><img src="one.png" width="100px"></button>'
    document.getElementById('game').innerHTML += '<button id="two" onClick="two()"><img src="two.png" width="100px"></button>'
    document.getElementById('game').innerHTML += '<button id="three" onClick="three()"><img src="three.png" width="100px"></button>'
    document.getElementById('game').innerHTML += '<button id="four" onClick="four()"><img src="four.png" width="100px"></button>'
    document.getElementById('game').innerHTML += '<button id="five" onClick="six()"><img src="six.png" width="100px"></button>'
    document.getElementById('game').innerHTML += '<button id="six" onClick="six()"><img src="six.png" width="100px"></button>'
    document.getElementById('game').innerHTML += '<br><br><button id="shop" onClick="shop()"><img src="shop.png" width="100px"></button>'
}

function back() {
    document.getElementById('game').innerHTML = '<button id="back" onclick="backtomenu()"><img src="back.png" width="100px"></button>';

}

function options() {
    click.play();
    back();
    document.getElementById('game').innerHTML += '<img src="optionstitle.gif" width="400px"><br>'
    document.getElementById('game').innerHTML += '<button id="fullscreen" onClick="fullscreen()"><img src="fullscreen.png" width="100px"></button>'
    document.getElementById('game').innerHTML += '<button id="credits" onClick="credits()"><img src="credits.png" width="250px"></button><br><br>'
    document.getElementById('game').innerHTML += '<img src="volumetitle.png" width="200px"><br><br>'
    document.getElementById('game').innerHTML += '<input type="range" min="0" max="100" value="100" id="volume" class="slider">'
    volume_slide();
}

function volume_slide() {
    let volume = document.getElementById('volume');
    volume.addEventListener('input', function(e) {
        click.volume = volume.value / 100;
        music.volume = volume.value / 100;
    })

}

function fullscreen() {
    click.play();
    document.documentElement.requestFullscreen();
}
let x=1;
function credits() {
    click.play();
    if (x==1) {
        document.getElementById('game').innerHTML += '<h1>Credits</h1><br><h2>Game: Benjamin F. Wu and Moebius</h2><br><h2>Teacher: Dr. Williams</h2><br><h2>Music: Royalty Free</h2>'
    x=0;
    } else {
        options();
        x=1;
    }
}
duction();
