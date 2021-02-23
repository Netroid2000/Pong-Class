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
    }

    //Estructura basada en la del movimiento del Paddle
    moveUpCollision(ball){
        if(Math.sign(ball.speedy) == 1){
            ball.speedy *= -1;
            console.log("pego");
        }
    }

    moveDownCollision(ball){
        if(Math.sign(ball.speedy) == -1){
            ball.speedy *= -1;
            console.log("pego");
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
        if(this.y >= 0){
            this.y -= this.speed;
        }
    }

    moveDown(){
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

    draw(ball) {
        image(this.img, this.x, this.y, this.width, this.height)
        this.move(ball);
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