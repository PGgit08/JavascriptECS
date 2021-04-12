// create the entity
var myEntity = new Entity("Player");

myEntity.add_component(Position({x: 10, y:10}));
myEntity.add_component(Color());
myEntity.add_component(Size({w: 100, h:100}));

// save the entity
makeEntity(myEntity.id, myEntity);

// output of entities
console.log(entities);

function MainLoop(){
    for(var entityId in entities){
        // get current entity
        curEntity = entities[entityId];

        // get entities components
        const components = curEntity.components;
    };
};

// start loop and render to screen every 5 milliseconds(low framerate)
const IntervalId = window.setInterval(MainLoop, 5);
