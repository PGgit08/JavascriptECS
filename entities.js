// create entities object
var entities = {};

// to add entity
const makeEntity = (id, entity_object) => {
    entities[id] = entity_object;
};

// to remove entity
const removeEntity = (id) => {
    delete entities[id];
};


