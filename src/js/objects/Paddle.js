class Paddle {
    constructor(coords, controllSettings, playerId){
        //Coordenadas
        this.x = coords.x;
        this.y = coords.y;
        //Dimensiones
        this.width = paddle.width;
        this.height = paddle.height;
        //Imagen
        this.img = loadImage("src/assets/sprites/paddle.png");
        //Velocidad
        this.speed = 5;
        //Controles
        this.controllSettings = controllSettings;
        //HitBoxs
        this.hbs = [ 
            new HitBoxSquare(
                HitBoxFactory.coords(this.x + 8, this.y + 8),
                HitBoxFactory.squareDims(paddleHitBox.width, paddleHitBox.height),
                paddleHitBoxActions.sumSpeedUp,
            ),
            new HitBoxSquare(
                HitBoxFactory.coords(this.x + 8, (this.y + paddleHitBox.height)  + 8),
                HitBoxFactory.squareDims(paddleHitBox.width, paddleHitBox.height),
                paddleHitBoxActions.normalBounce,
            ),
            new HitBoxSquare(
                HitBoxFactory.coords(this.x + 8, this.y + (paddleHitBox.height*2)  + 8),
                HitBoxFactory.squareDims(paddleHitBox.width, paddleHitBox.height),
                paddleHitBoxActions.sumSpeedDown,
            ),
        ];
        //Puntaje HB
        this.playerId = playerId;
        let pointHbCoords

        if(playerId === playersId.player1){
            pointHbCoords = HitBoxFactory.coords(board.width + boardHitBox.plusLimit, 0);
        } else {
            pointHbCoords = HitBoxFactory.coords(boardHitBox.plusLimit * (-1), 0);
        }

        this.pointsHb = new HitBoxSquare(
            pointHbCoords,
            HitBoxFactory.squareDims(10, board.height),
            paddleHitBoxActions.restartBall,
        );
    }

    moveUp() {
        
        this.hbs.forEach(function(hb, index){
            if(hb.y >= (index * hb.height) + 8 ){
                hb.y -= this.speed;
            }
        }.bind(this));

        if(this.y >= 0){
            this.y -= this.speed;
        }
    }

    moveDown(){
          
        this.hbs.forEach(function(hb, index){
            if(hb.y <= board.height - 8 - ((this.hbs.length - index) * hb.height)){
                hb.y += this.speed;
            }
        }.bind(this));
        if(this.y <= board.height - paddle.height){
            this.y += this.speed;
        }
    }

    move() {
        this.controllSettings.forEach((controll) => {
            if(keyIsDown(controll.key)){
                this[controll.name]();
            }
        });
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height)
        this.move();
        this.hbs.forEach((hb) => hb.draw());
    }
}

const PaddleFactory = {
    coords: (x, y) => {
        return {
            x,
            y,
        };
    },
    controllSettings: (moveUpKey, moveDownKey) => {
        return [
            {
                name: "moveUp",
                key: moveUpKey,
            },
            {
                name: "moveDown",
                key: moveDownKey,
            },
        ];
    },
};