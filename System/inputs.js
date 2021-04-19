var xInputMov = 0;
var yInputMov = 0;

var angleMov = 0;

// look for keydown on the screen
window.addEventListener('keydown', (event) => {
    // convert key to lowercase
    const pressed_key = event.key.toLowerCase();

    // switch statement for pressed key
    switch (pressed_key){
        case 'w': 
            yInputMov = -1;
            break;

        case 's': 
            yInputMov = 1;
            break;

        case 'a': 
            xInputMov = -1;
            break;

        case 'd': 
            xInputMov = 1;
            break;

        case 'e':
            angleMov = 1;
            break;

        case 'q':
            angleMov = -1;
            break;

        case 'escape':
            // kill the game, using gloval interval id
            window.clearInterval(window.IntervalId);

            // alerts + console log
            alert("KILLED GAME!");
            console.log("KILLED GAME");
    };
});

window.addEventListener('keyup', () => {xInputMov=0;yInputMov=0;});