function ClearBackground(){
    // clear background
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// circle rendering
function circleRender({r, x, y}){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
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
