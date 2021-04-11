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

function Size(size){
    // set size of entity
    return {
        "name": "size",
        "w": size.w,
        "h": size.h
    };
};
