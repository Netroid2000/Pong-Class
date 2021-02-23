class Ball {
    constructor(coords){
        //Cordenadas
        this.x = coords.x;
        this.y = coords.y;
        //Altura y Anchura
        this.width = ballConsts.width;
        this.height = ballConsts.height;
        //imagen
        this.img = loadImage("/src/assets/sprites/ball.png");
        //velocidad
        this.speedx = 5 * randomPolarity();
        this.speedy = 4 * randomPolarity();
    }
    
    collision(players){
        //Comprobar si hubo colision con algun Paddle
        players.forEach((player) => {
            //Saber la direccion en la que se encuentra el jugador
            if(player.x == 0){
                if(this.x <= player.x + paddle.width && this.x >= player.x + paddle.width/2 && 
                    (
                        (this.y >= player.y && 
                            this.y <= player.y + paddle.height) || 
                        (this.y + ballConsts.height >= player.y && 
                            this.y + ballConsts.height <= player.y + paddle.height)
                    ))
                {
                    this.speedx *= -1;
                    //Cambio de direccion en Y
                    player.collision(this);
                }
            }else{
                if(this.x + ballConsts.width <= player.x + paddle.width && 
                    this.x + ballConsts.width >= player.x + paddle.width/2 && 
                    (
                        (this.y >= player.y && 
                            this.y <= player.y + paddle.height) || 
                        (this.y + ballConsts.height >= player.y && 
                            this.y + ballConsts.height <= player.y + paddle.height)
                    ))
                {
                    this.speedx *= -1;
                    player.collision(this);
                }
            }
        });
    }

    move(){
        
        if(this.x < 0 || this.x >= board.width - this.width){
            this.restart();
        }
        if(this.y < 0 || this.y >= board.height - this.height){
            this.speedy *= -1;
        }

        this.x += this.speedx;
        this.y += this.speedy;
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.move();
    }

    //Reinicia los valores de la bola por si se muere o se reinicia la partida
    restart() {
        this.x = ballIni.xIni;
        this.y = ballIni.yIni;
        this.speedx *= randomPolarity();
        this.speedy *= randomPolarity();
    }
}

const BallFactory = {
    coords: (x, y) => {
        return {
            x,
            y,
        };
    },
};