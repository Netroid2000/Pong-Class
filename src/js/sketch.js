let bg;
let ball;
let players = [];
let mySoundLoop;
let ballSoundKick;
//Pre-carga
function preload() {
    soundFormats('wav');
    mySoundLoop = loadSound('src/assets/sfx/musicloop');
    ballSoundKick = loadSound('src/assets/sfx/kick');
}

function setup(){
    bg = loadImage("/src/assets/sprites/board.png");
    ball = new Ball(BallFactory.coords(ballIni.xIni, ballIni.yIni));
    
    //Creacion de Jugadores
    players.push(
        new Paddle(
            PaddleFactory.coords(0, board.height/2 - paddle.height / 2),
            PaddleFactory.controllSettings(87, 83),
        ),
        new Paddle(
            PaddleFactory.coords(
                board.width - paddle.width, 
                board.height/2 - paddle.height / 2
            ),
            PaddleFactory.controllSettings(38, 40),
        )
    );
    //Musica
    mySoundLoop.loop(music.start);
    
    createCanvas(board.width,board.height);
}

function draw() {
    background(bg);
    ball.draw(players, ballSoundKick);
    players.forEach((player) => player.draw());
}