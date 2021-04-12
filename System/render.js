// function for rendering entities to screen
function renderToScreen(entities){
    for(var entityId in entities){
        // get current entity
        curEntity = entities[entityId];

        // get curEntity's components
        const components = curEntity.components;

        // get current needed components
        const {x, y} = components.position;
        const {color} = components.color;
        const {w, h} = components.size;

        // fill up color of entity
        ctx.fillStyle = color;

        // make rectangle(for now) as entity
        ctx.fillRect(
            x,
            y,
            w,
            h
        );
    };
};