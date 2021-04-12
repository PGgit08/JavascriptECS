function ClearBackground(){
    // clear background
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.rect(0, 0, canvas.width, canvas.height);
};

// circle rendering
function circleRender({r, x, y}){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
};

// rectangle rendering
function rectRender({w, h, x, y}){
    ctx.rect(
        x,
        y,
        w,
        h
    );
};
