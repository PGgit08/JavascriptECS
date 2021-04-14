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

function Physics(speed=1, mass=0.02){
    return [Gravity(mass), Speed(speed)];
};
