class Points{
    constructor (coords, font){
        //Coordenadas
        this.x = coords.x;
        this.y = coords.y;
        //font
        this.font = font;
        //PUNTAJES
        this.p1 = 0;
        this.p2 = 0;
    }

    draw(){
        fill("#ffffff");
        textSize(35);
        textAlign(CENTER);
        //textFont(this.font);
        text(`${this.p1} - ${this.p2}`, this.x, this.y);
    }

    playerPointPlusPlus(playerId){
        this[playerId]++;
    }
}

const PointsFactory = {
    coords: (x, y) => ({
        x,
        y,
    }),
    
};