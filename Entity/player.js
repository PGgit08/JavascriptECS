// create the entity
var Player = new Entity("Player");

Player.add_component(Position({x: 100, y:100}));
Player.add_component(Color());
Player.add_component(CircleSize({r: 10}));
Player.add_component(Health({health: 10}))

// save the entity
makeEntity(Player.id, Player);