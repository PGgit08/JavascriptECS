// output of entities
console.log(entities);

function MainLoop(){
    ClearBackground();
    // console.log(xInputMov);

    for(var entityId in entities){
        // console.log(xInputMov, yInputMov);
        // get current entity
        curEntity = entities[entityId];

        // get entities components
        const components = curEntity.components;
        
        // get bundles of entity
        const bundles = curEntity.bundles;

        // bundle checking
        if(APPEARANCE in bundles){
            // draw here
        };
    };
};

// start loop and render to screen every 5 milliseconds(low framerate)
const IntervalId = window.setInterval(MainLoop, 1000/60);
