var xInputMov = 0;
var yInputMov = 0;

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
    };
});

window.addEventListener('keyup', () => {xInputMov=0;yInputMov=0;});