function Position(pos){
    // set position of entity as well as angle
    // angle defaults to 90
    return {
        "name": "position",
        "x": pos.x,
        "y": pos.y,
        "angle": pos.angle
    };
};

function Color(color){
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

function UserControlled(lookAtMouse){
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

// a "template" that holds some of these items together
function Appearance(shape, x, y, color="black", angle=90){
    const shape_component = shape;
    const color_component = Color(color);
    const position_component = Position({x:x, y:y, angle:angle});

    return [shape_component, color_component, position_component];
};