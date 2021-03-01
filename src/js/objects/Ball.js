class Ball {
    constructor(coords, players){
        //Cordenadas
        this.x = coords.x;
        this.y = coords.y;
        //Altura y Anchura
        this.width = ballConsts.width;
        this.height = ballConsts.height;
        //imagen
        this.img = loadImage("/src/assets/sprites/ball.png");
        //velocidad
        this.speedx = ballIni.speedX * randomPolarity();
        this.speedy = ballIni.speedY * randomPolarity();
        //Jugadores
        this.players = players;
        //HitBox
        this.hb = new HitBoxSquare(
            HitBoxFactory.coords(this.x + ballHitBox.plusX, this.y + ballHitBox.plusy),
            HitBoxFactory.squareDims(29, 29),
        );

    }
    

    move(){
        
        if(this.x < 0 || this.x >= board.width - this.width){
            this.restart();
        } else if(this.players.some((player) => player.hb.wasHitSquare(this.hb))){
            this.speedx = speedAugment(this.speedx);
            this.speedx *= -1;
        }
        if(this.y < 0 || this.y >= board.height - this.height){
            this.speedy *= -1;
        }

        this.x += this.speedx;
        this.hb.x += this.speedx;
        this.y += this.speedy;
        this.hb.y += this.speedy;
    }

    draw(players, ballSoundKick) {
        image(this.img, this.x, this.y, this.width, this.height);
        this.hb.draw();
        this.move();
    }

    //Reinicia los valores de la bola por si se muere o se reinicia la partida
    restart() {
        this.x = ballIni.xIni;
        this.hb.x = this.x + ballHitBox.plusX;
        this.y = ballIni.yIni;
        this.hb.y = this.y + ballHitBox.plusy;
        this.speedx = ballIni.speedX * randomPolarity();
        this.speedy = ballIni.speedY * randomPolarity();
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