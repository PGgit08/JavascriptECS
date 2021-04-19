function rand_coords(w, h){
    const width = canvas.width;
    const height = canvas.height;
    
    let ranX = Math.floor(Math.random() * (width - w));
    let ranY = Math.floor(Math.random() * (height - h));

    return {x: ranX, y:ranY};
};

// console.log(rand_coords(1, 1));
