function Enemy(){
    // make the enemy entity
    var Enemy = new Entity("Enemy");

    // enemy components + bundles
    var enemy_components = [
    ...Appearance({shape:RectangleSize({w: 100, h:100}), x:200, y:200}),
    ...Physics({speed:5, mass: 0}),
    UserControlled()
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