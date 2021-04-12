function Position(pos){
    // set position of entity
    return {
        "name": "position",
        "x": pos.x,
        "y": pos.y
    };
};

function Color(color="black"){
    // set color of entity(defaults to black)
    return {
        "name": "color",
        "color": color
    };
};

function RectangleSize(rectangleSize={w:10, h:10}){
    // set size of rect entity(defaults to 10,10)
    return {
        "name": "rectangleSize",
        "w": rectangleSize.w,
        "h": rectangleSize.h
    };
};

function CircleSize(circleSize={r:10}){
    // set size of circle entity(defaults to 10)
    return {
        "name": "circleSize",
        "r": circleSize.r
    };
};

// direction components can be here