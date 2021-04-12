// create the entity
var Player = new Entity("Player");

// add components to player
Player.add_component(Position({x: 100, y:100}));
Player.add_component(Color());
Player.add_component(CircleSize({r: 10}));
Player.add_component(Health());
Player.add_component(UserControlled());

// save the entity
makeEntity(Player.id, Player);