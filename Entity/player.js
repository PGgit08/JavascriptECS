// create the entity
var Player = new Entity("Player");

// player components
const player_components = Appearance(CircleSize({r: 10}), 10, 10, "green");

// add components to player
Player.add_components(player_components);

// add bundles to player(still testing this out)
Player.add_bundle(APPEARANCE);

// save the entity
makeEntity(Player.id, Player);