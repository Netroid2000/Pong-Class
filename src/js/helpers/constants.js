const board = {
    width: 1024,
    height: 512,
}

const paddle = {
    width: 37,
    height: 128.6,
}

const ballConsts = {
    width: 67,
    height: 67,
    speedAugmentx: 0.1,
    speedAugmenty: 0.5,
}

//Donde va a iniciar siempre la bola
const ballIni = {
    xIni: board.width/2 - ballConsts.width/2,
    yIni: board.height/2 - ballConsts.height/2,
    speedX: 5,
    speedY: 4,
}

const music =  {
    start: .2, 
}

const ballHitBox = {
    plusX: 19,
    plusy: 19,
}

const paddleHitBox = {
    width: 19,
    height: 36.83,
    contHitBoxs: 3,
}

const paddleHitBoxActions = {
    restartBall: "restartBall",
    sumSpeedUp: "sumSpeedUp",
    sumSpeedDown: "sumSpeedDown",
    normalBounce: "normalBounce",
}

const playersId = {
    player1: "p1",
    player2: "p2",
}

const boardHitBox = {
    plusLimit: 10,
}