let bg;
let ball;
let players = [];
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
    createCanvas(board.width,board.height);
}

function draw() {
    background(bg);
    ball.draw();
    players.forEach((player) => player.draw());
    //validar que el arreglo de jugadores nunca llegue null
    if(players != null){
        ball.collision(players);
    }
}