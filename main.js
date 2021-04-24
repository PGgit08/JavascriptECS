// output of entities
console.log(entities);

function MainLoop(){
    ClearBackground();

    for(var entityId in entities){
        // console.log(xInputMov, yInputMov);
        // get current entity
        var curEntity = entities[entityId];

        // get entities components
        const components = curEntity.components;
        
        // get bundles of entity
        const bundles = curEntity.bundles;
        // console.log(curEntity);

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
                    const {move, rotation} = components.userControlled;

                    if(move){
                        components.position.x += xInputMov * speed;
                        components.position.y += yInputMov * speed;
                    };

                    if(rotation){
                        // rotation for object
                        components.position.angle += angleMov * Math.PI / 180;
                    };
                };
            };

            // get x and y and color
            var { x, y, angle } = components.position;
            const { color, stroke } = components.color;
            const { rotation } = components.userControlled;

            ctx.lineWidth = 2;
            ctx.strokeStyle = stroke;
            ctx.fillStyle = color;

            // if angle mov is not 0
            if(angleMov && rotation){
                // movement here
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle);
            };

            if(components.rectangleSize){
                const {w, h} = components.rectangleSize;
              
                if(angleMov && rotation){
                    x = w / -2;
                    y = h / -2;
                };

                rectRender({
                    x,
                    y,
                    w,
                    h
                });

                // stroke the rectangle
                ctx.strokeRect(x, y, w, h);
            };

            if(components.circleSize){
                const { r } = components.circleSize;

                if(angleMov && rotation){
                    // x = -x;
                    // y = -y;
                };

                circleRender({
                    r,
                    x,
                    y
                });
            };

            if(angleMov && rotation){
                ctx.restore();
            };

            ctx.stroke();
            ctx.fill();
        };
    };
};

// start loop and render to screen 60 fps(create id as global variable)
window.IntervalId = window.setInterval(MainLoop, 1000/60);

