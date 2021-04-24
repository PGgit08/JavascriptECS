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

function Color(color, stroke){
    // set color of entity(defaults to black)
    return {
        "name": "color",
        "color": color,
        "stroke": stroke
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

function UserControlled(rotation=false, move=true){
    // make this controlled by wasd
    return {
        "name": "userControlled",
        "rotation": rotation,
        "move": move
    };
};

// NOTE: add image component
function AddImage(path){
    const image = new Image();
    image.src = path;

    // isn't quite working, check out later
}; 

// a "template" that holds some of these items together
function Appearance({shape, color="black", stroke="black", angle=90, x, y}){
    const shape_component = shape;
    const color_component = Color(color, stroke);
    const position_component = Position({x:x, y:y, angle:angle});

    return [shape_component, color_component, position_component];
};