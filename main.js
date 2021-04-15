// output of entities
console.log(entities);

function MainLoop(){
    ClearBackground();

    for(var entityId in entities){
        // console.log(xInputMov, yInputMov);
        // get current entity
        curEntity = entities[entityId];

        // console.log(curEntity);

        // get entities components
        const components = curEntity.components;
        
        // get bundles of entity
        const bundles = curEntity.bundles;

        // bundle checking
        if(bundles.includes(APPEARANCE)){
            // if there is physics
            if(bundles.includes(PHYSICS)){
                // get speed
                const { speed } = components.speed;

                // gravity calculations
                const { mass } = components.gravity;
                components.gravity.gravity_speed += mass;
                
                const { gravity_speed } = components.gravity;
                
                // move based on gravity
                components.position.y += gravity_speed;

                // check if entity is user controlled
                if (components.userControlled){
                    components.position.x += xInputMov * speed;
                    components.position.y += yInputMov * speed;
                };
            };

            // get x and y and color
            const { x, y } = components.position;
            const { color } = components.color;

            // console.log(color);

            ctx.fillStyle = color;

            if(components.rectangleSize){
                const {w, h} = components.rectangleSize;
                rectRender({
                    x,
                    y,
                    w,
                    h
                });
            };

            if(components.circleSize){
                const { r } = components.circleSize;
                circleRender({
                    r,
                    x,
                    y
                });
            };

            ctx.fill();

        };
    };
};

// start loop and render to screen 60 fps
const IntervalId = window.setInterval(MainLoop, 20);
