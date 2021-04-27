/* 
System collision detection for game
*/
function collision_check(){
    // using special algorithm
    // broad and narrow phases
};  

// AABB function(if hitboxes overlapping)
function AABB(box1, box2){
    /*
        example:
        box1: [10(xmin), 20(xmax)];
        box2: [15(xmin), 25(xmax)];
        ---
        check whether boxes are overlapping on x-axis;
        return condition based on above;
    */

    // inequality
    return box1[0] >= box2[0] && box1[0] <= box2[1] || box1[1] <= box2[1] && box1[1] >= box2[0];
    // return true;
};

function getMinMax(entity){
    // get the shapetype
    const shapeType = (entity.components.rectangleSize || entity.components.circleSize);

    // get minX and maxX values of entity
    const minX = entity.components.position.x - (shapeType.r || shapeType.w * 0);
    const maxX = minX + (shapeType.r * 2 || shapeType.w);

    return [minX, maxX];
};

// sweep and prune algorithm
function SAP(){
    // set the sorted entities variables and minMax variable
    let minMax = {};
    let sorted_entities = {};

    // set minMax of entities
    Object.values(entities).forEach((entity) => {minMax[entity.id] = getMinMax(entity)});
    
    // sort entities
    Object.entries(minMax).sort((a, b) => a[1][0] - b[1][0]).map(el => {sorted_entities[el[0]] = el[1]});

    // algorithm lists
    var activeList = [];
    var possibleOverlaps = [];

    Object.keys(sorted_entities).forEach(
        (entity_key) => {
            const entity_pos = sorted_entities[entity_key];
            // log(entity_pos);

            if(activeList.length > 0){
                if(AABB(sorted_entities[activeList[activeList.length - 1]], entity_pos)){
                    // push entity into activeList
                    activeList.push(entity_key);
                }
                
                // if activeList is full and collision for sure exists, refresh activeList 
                else{
                    // also check that activeList is more than just the init entity
                    if(activeList.length > 1){
                        possibleOverlaps.push(activeList);
                        activeList = [];
                    };
                };
            };

            if(activeList.length == 0){
                activeList.push(entity_key);
            };
        }
    );

    // return the possble overlapping items
    return possibleOverlaps;

};

function narrow_phase(e1, e2){
    // not sure what to put here yet
};
