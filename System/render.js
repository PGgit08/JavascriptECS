function ClearBackground(){
    // clear background
    ctx.clearRect(0, 0, canvas.height, canvas.width);
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
