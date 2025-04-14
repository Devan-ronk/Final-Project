let opacity = 1;
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
    document.getElementById('game').innerHTML ='<img src="title.png" width="700px"><br>'
    document.getElementById('game').innerHTML += '<button id="play" onClick="gamestart()"><img src="play.png" width="250px"></button>'
    document.getElementById('game').innerHTML += '<button id="options" onClick="options()"><img src="options.png" width="250px"></button>'
}

function gamestart() {
    back();

}

function back() {
    document.getElementById('game').innerHTML = '<button id="back" onclick="backtomenu()"><img src="back.png" width="100px"></button>';

}
duction();
