function rand_coords(w, h){
    const width = canvas.width;
    const height = canvas.height;
    
    let ranX = Math.floor(Math.random() * (width - w));
    let ranY = Math.floor(Math.random() * (height - h));

    return {x: ranX, y:ranY};
};

function rotate_entity(components, angle){
    // save canvas's current items, and state
    ctx.save();

    // move canvas to center of entity
    ctx.translate(components.x, components.y);

    // rotate canvas
    ctx.rotate(angle);

    // restore canvas
    ctx.restore();
};
