let bg;
let ball;
let players = [];
let mySoundLoop;
let pts;
let gameFont;
//Pre-carga
function preload() {
    soundFormats('wav');
    mySoundLoop = loadSound('src/assets/sfx/musicloop');
    
}

function setup(){
    bg = loadImage("/src/assets/sprites/board.png");
    
    
    //Creacion de Jugadores
    players.push(
        new Paddle(
            PaddleFactory.coords(0, board.height/2 - paddle.height / 2),
            PaddleFactory.controllSettings(87, 83),
            playersId.player1,
        ),
        new Paddle(
            PaddleFactory.coords(
                board.width - paddle.width, 
                board.height/2 - paddle.height / 2
            ),
            PaddleFactory.controllSettings(38, 40),
            playersId.player2,
        )
    );
    //puntos
    pts = new Points(PointsFactory.coords(board.width/2, 50));
    //bola
    ball = new Ball(
        BallFactory.coords(ballIni.xIni, ballIni.yIni), 
        players,
        pts,
    );
    //Musica
    //mySoundLoop.loop(music.start);
    
    
    createCanvas(board.width,board.height);
}

function draw() {
    background(bg);
    ball.draw(players);
    players.forEach((player) => player.draw());
    pts.draw();
}