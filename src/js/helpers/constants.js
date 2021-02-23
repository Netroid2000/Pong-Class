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
    speedAugment: 0.1,
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