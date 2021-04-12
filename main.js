// output of entities
console.log(entities);

<<<<<<< HEAD
myEntity.add_component(Position({x: 100, y:100}));
myEntity.add_component(Color());
myEntity.add_component(CircleSize({r: 100}));
myEntity.add_component(Health({health: 10}))
=======
// main function which determines what systems
// apply to which enteties
function MainLoop(){
    // refresh background
    ClearBackground();
>>>>>>> d188906ba951df2e4291fb8c94b9ee4c7026e031

    // go through entities
    for(var entityId in entities){
        // get current entity
        curEntity = entities[entityId];

        // get entities components
        const components = curEntity.components;

        // get main components
        const {x, y} = components.position;
        const { color } = components.color;
    
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
const IntervalId = window.setInterval(MainLoop, 5);
