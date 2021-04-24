// create the entity
var Turret = new Entity("Turret");

// Turret components + bundles
var turret_components = [
    ...Appearance({shape:RectangleSize({w: 40, h:10}), x:-10, y:5, color:"blue"}),
    ...Physics({speed:10, mass: 0}),
    UserControlled(rotation=true, move=true)
];

var turret_bundles = [
    APPEARANCE,
    PHYSICS
];

// add components to Turret
Turret.add_components(turret_components);

// add bundles to Turret(still testing this out)
Turret.add_bundles(turret_bundles);

// save the entity
// makeEntity(Turret.id, Turret);

