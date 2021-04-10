// contains all the objects(entities) for the game
var GameObjects = [];

// function for drawing all of these objects
function DrawObjects (){
    for(let GameObject in GameObjects){
        GameObject.draw();
    };
};

// Loop for game(and it's id)
const IntervalId = window.setInterval(DrawObjects, 500);

