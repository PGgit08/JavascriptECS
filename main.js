// create the entity
var myEntity = new Entity("Player");

myEntity.add_component(Position({x: 10, y:10}));
myEntity.add_component(Color());
myEntity.add_component(CircleSize({r: 100}));
myEntity.add_component(Health({health: 10}))

// save the entity
makeEntity(myEntity.id, myEntity);

// output of entities
console.log(entities);

// start loop and render to screen every 5 milliseconds(low framerate)
const IntervalId = window.setInterval(() => renderRectangle(entities), 5);
