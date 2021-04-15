// fix
function ClearBackground(){
    // clear background;
    // Store the current transformation matrix
    // ctx.save();

    // Use the identity matrix while clearing the canvas
    // ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Restore the transform
    // ctx.restore();
};

// circle rendering
function circleRender({r, x, y}){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
};

// rectangle rendering
function rectRender({x, y, w, h}){
    ctx.rect(
        x,
        y,
        w,
        h
    );
};

function drawImage({x, y, w, h, img}){
    // isn't quite working yet
    ctx.drawImage(
        img,
        x,
        y,
        w,
        h
    );
};
