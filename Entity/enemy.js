// make the enemy entity
var Enemy = new Entity("Enemy");

// enemy components + bundles
var enemy_components = [
    ...Appearance(RectangleSize({w: 100, h:100}), 200, 200, "black"),
    ...Physics({speed:5, mass: 0}),
    // UserControlled()
];

var enemy_bundles = [
    APPEARANCE,
    PHYSICS
];

// add components
Enemy.add_components(enemy_components);

// add bundles
Enemy.add_bundles(enemy_bundles);

// save the entity
makeEntity(Enemy.id, Enemy);
// removeEntity(Enemy.id);

