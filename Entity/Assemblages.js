function Enemy(x, y, id){
    // make the enemy entity
    var Enemy = new Entity(id);

    // enemy components + bundles
    var enemy_components = [
    ...Appearance({shape:RectangleSize({w: 100, h:100}), x:x, y:y}),
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

    return Enemy;

};