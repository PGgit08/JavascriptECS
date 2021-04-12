function ClearBackground(){
    // clear background
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.rect(0, 0, canvas.width, canvas.height);
};

<<<<<<< HEAD
        const {w, h} = components.rectangleSize;
        // fill up color of entity
        ctx.fillStyle = color;
        // make rectangle as entity
        ctx.fillRect(
            x,
            y,
            w,
            h
        );
        };
        
        if(components.circleSize){
            const {r} = components.circleSize;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI)
            ctx.stroke();
=======
// circle rendering
function circleRender({r, x, y}){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
};
>>>>>>> d188906ba951df2e4291fb8c94b9ee4c7026e031

// rectangle rendering
function rectRender({w, h, x, y}){
    ctx.rect(
        x,
        y,
        w,
        h
    );
};
