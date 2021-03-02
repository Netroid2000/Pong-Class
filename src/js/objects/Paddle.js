class Paddle {
    constructor(coords, controllSettings){
        //Coordenadas
        this.x = coords.x;
        this.y = coords.y;
        //Dimensiones
        this.width = paddle.width;
        this.height = paddle.height;
        //Imagen
        this.img = loadImage("/src/assets/sprites/paddle.png");
        //Velocidad
        this.speed = 5;
        //Controles
        this.controllSettings = controllSettings;
        //HitBoxs
        this.hbs = [ 
            new HitBoxSquare(
                HitBoxFactory.coords(this.x + 8, this.y + 8),
                HitBoxFactory.squareDims(paddleHitBox.width, paddleHitBox.height),
            ),
            new HitBoxSquare(
                HitBoxFactory.coords(this.x + 8, (this.y + paddleHitBox.height)  + 8),
                HitBoxFactory.squareDims(paddleHitBox.width, paddleHitBox.height),
            ),
            new HitBoxSquare(
                HitBoxFactory.coords(this.x + 8, this.y + (paddleHitBox.height*2)  + 8),
                HitBoxFactory.squareDims(paddleHitBox.width, paddleHitBox.height),
            ),
        ];
    }

    //Estructura basada en la del movimiento del Paddle
    moveUpCollision(ball){
        if(Math.sign(ball.speedy) == 1){
            ball.speedy *= -1;
            
        }
    }

    moveDownCollision(ball){
        if(Math.sign(ball.speedy) == -1){
            ball.speedy *= -1;
        }
    }

    /*Cambia la direccion en Y de la bola si el jugador se movia al lado 
    contrario*/
    collision(ball){
        this.controllSettings.forEach((controll) => {
            if(keyIsDown(controll.key)){
                this[controll.name+"Collision"](ball);
            }
        });
    }
    
    moveUp() {
        
        this.hbs.forEach(function(hb){
            console.log("entro FOR EACH");
            if(hb.y >= 0){
                //this.y -= this.speed;
                hb.y -= this.speed;
            }
        }.bind(this));

        if(this.y >= 0){
            this.y -= this.speed;
        }
        console.log("entro");
    }

    moveDown(){
          
        this.hbs.forEach(function(hb){
            console.log("entro ENTRO FOR EACH");
            if(hb.y <= board.height - hb.height){
                //this.y += this.speed;
                hb.y += this.speed;
            }
        }.bind(this));
        if(this.y <= board.height - paddle.height){
            this.y += this.speed;
        }
        console.log("entro"); 
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