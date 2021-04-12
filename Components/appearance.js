function Position(pos){
    // set position of entity
    return {
        "name": "position",
        "x": pos.x,
        "y": pos.y
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

// direction components can be here