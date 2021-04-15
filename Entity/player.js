// create the entity
var Player = new Entity("Player");

// player components + bundles
var player_components = [
    ...Appearance(CircleSize({r: 10}), 100, 100, "green"),
    ...Physics({speed:10, mass: 0}),
    UserControlled()
];

var player_bundles = [
    APPEARANCE,
    PHYSICS
];

// add components to player
Player.add_components(player_components);

// add bundles to player(still testing this out)
Player.add_bundles(player_bundles);

// save the entity
makeEntity(Player.id, Player);