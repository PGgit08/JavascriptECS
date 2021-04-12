var xInputMov = 0;
var yInputMov = 0;

// look for keydown on the screen
window.addEventListener('keydown', (event) => {
    // convert key to lowercase
    const pressed_key = event.key.toLowerCase();

    // switch statement for pressed key
    switch (pressed_key){
        case 'w': {
            yInputMov = -1;
        };

        case 's': {
            yInputMov = 1;
        };

        case 'a': {
            xInputMov = -1;
        };

        case 'd': {
            xInputMov = 1;
        };
    };
});

window.addEventListener('keyup', () => {xInputMov=0;yInputMov=0;});