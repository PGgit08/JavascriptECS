// function for rendering entities to screen
// la la la
function renderRectangle(entities){
    ctx.fillStyle = "white";
    ctx.fillRect(
        0,
        0,
        canvas.widht,
        canvas.height
    );

    for(var entityId in entities){
        // get current entity
        curEntity = entities[entityId];

        // get curEntity's components
        const components = curEntity.components;
        const {x, y} = components.position;
        const {color} = components.color;
        if(components.rectangleSize){
        //rectangle size exists in components
        // get current needed components

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
            const r = components.circleSize;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI)
            ctx.stroke();

        }

        
    };
};


// circle rendering
function circleRender(){
    
};

// rectangle rendering
function rectRender(){

};
