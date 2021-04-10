class Entity {
    constructor (initPos, initSize){
        this.position = {
            x: initPos.x,
            y: initPos.y,
            angle: initPos.angle
        };

        this.size = {
            height: initSize.height,
            width: initSize.width
        };
    };
};