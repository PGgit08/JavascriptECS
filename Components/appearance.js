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

function Color(color="black"){
    // set color of entity(defaults to black)
    return {
        "name": "color",
        "color": color
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
    const image = new Image();
    image.src = path;

    // isn't quite working, check out later
}; 