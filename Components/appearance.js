function Position(pos={x: pos.x, y: pos.y, angle:90}){
    // set position of entity as well as angle
    // angle defaults to 90
    return {
        "name": "position",
        "x": pos.x,
        "y": pos.y,
        "angle": pos.angle
    };
};

function Color(){
    // set color of entity(defaults to black)
    return {
        "name": "color",
        "color": "black"
    };
};

function RectangleSize(rectangleSize){
    // set size of entity
    return {
        "name": "rectangleSize",
        "w": rectangleSize.w,
        "h": rectangleSize.h
    };
};

function CircleSize(circleSize){
    return {
        "name": "circleSize",
        "r": circleSize.r
    };
};

function UserControlled(lookAtMouse=false){
    // make this controlled by wasd
    return {
        "name": "userControlled",
        "lookAtMouse": lookAtMouse
    };
};

// NOTE: add image component
function AddImage(path){
    return {
        "name": "image",
        "path": path
    };
}; 