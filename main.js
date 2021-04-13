// output of entities
console.log(entities);

function MainLoop(){
    for(var entityId in entities){
        // get current entity
        curEntity = entities[entityId];

        // get entities components
        const components = curEntity.components;

        
        // check userControlled
        if(components.userControlled){
            components.position.x += xInputMov;
            components.position.y += yInputMov;

            // console.log(xInputMov);
        };

        // get main components
        var {x, y} = components.position;
        var { color } = components.color;
    
        // system determining
        // if coordinates and color(basic appearance)
        if(x && y && color){
            // change fill color
            ctx.fillStyle = color;

            // check shape
            if(components.rectangleSize){
                // get rectangle size
                const {w, h} = components.rectangleSize;

                // draw rectangle
                rectRender({w, h, x, y});
            };

            if(components.circleSize){
                // get radius
                const {r} = components.circleSize;

                // draw circle
                circleRender({r, x, y});
            };

            // after entity creation fill it
            ctx.fill();
        };
    };
};

// start loop and render to screen every 5 milliseconds(low framerate)
const IntervalId = window.setInterval(MainLoop, 0);
// while (true){
//     MainLoop();
// }
