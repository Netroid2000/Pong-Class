class HitBoxSquare{
    constructor(coords, dims, action){
        this.x = coords.x;
        this.y = coords.y;
        this.width = dims.width;
        this.height = dims.height;
        //accion a realizar
        this.action = action;
    }
    //hbs = hitboxSquare
    wasHitSquare(hbs){
        return (
            hbs.x < this.x + this.width &&
            hbs.x + hbs.width > this.x &&
            hbs.y < this.y + this.height &&
            hbs.y + hbs.height > this.y
        );
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
    }

    restartBall(ball) {
        ball.x = ballIni.xIni;
        ball.hb.x = ball.x + ballHitBox.plusX;
        ball.y = ballIni.yIni;
        ball.hb.y = ball.y + ballHitBox.plusy;
        ball.speedx = ballIni.speedX * randomPolarity();
        ball.speedy = ballIni.speedY * randomPolarity();
        console.log("restartBall");
    }

    sumSpeedUp(ball) {
        //ball.speedx = speedAugment(ball.speedx);
        ball.speedy -= ballConsts.speedAugmenty;
        ball.speedx *= -1;
        console.log("Aumento a", ball.speedy);
        ball.x += ball.speedx;
    }

    sumSpeedDown(ball) {
        //ball.speedx = speedAugment(ball.speedx);
        ball.speedy += ballConsts.speedAugmenty;
        ball.speedx *= -1;
        console.log("Aumento a", ball.speedy);
        ball.x += ball.speedx;
    }

    normalBounce(ball){
        //ball.speedx = speedAugment(ball.speedx);
        ball.speedx *= -1;
        console.log("Aumento a", ball.speedy);
        ball.x += ball.speedx;
    }
}

const HitBoxFactory = {
    coords(x, y){
        return {
            x,
            y,
        };
    },
    squareDims(width, height){
        return {
            width,
            height,
        };
    },
    hitAction(action){
        return {
            action,
        };
    },
};