function Speed(speed){
    return {
        "name": "speed",
        "speed": speed
    };
};

function Gravity(mass){
    return {
        "name": "gravity",
        "mass": mass,
        gravity_speed: 0
    };
};

function Physics(physics={speed:1, mass:0.02}){
    return [Gravity(physics.mass), Speed(physics.speed)];
};
