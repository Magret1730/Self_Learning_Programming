const itemInput = document.getElementById('item-input');

const onKeyPress = event => console.log('keypress');
const onKeyUp = event => console.log('keyup');
const onKeyDown = event => 
{
    // key
    /*console.log(event.key);
    document.querySelector('h1').innerText = event.key;*/
    if (event.key === 'Enter')
    {
        alert('You pressed enter');
    }

    // KeyCode
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes // Link to keycodes - outdated
    // https://www.toptal.com/developers/keycode/table // Site to get keycodes
    if (event.keyCode === 13)
    {
        alert('You pressed enter');
    }

    // code
    // console.log(event.code);
    if (event.code === 'Digit1')
    {
        console.log('You pressed 1.');
    }

    // if you tap the key, it will be false but if you do a keyDown, it will be true.
    if (event.repeat)
    {
        console.log('You are holding down ' + event.key);
    }

    console.log('Shift: ' + event.shiftKey); // To tell if the shift key event is fired i.e happening.
    console.log('Shift: ' + event.ctrlKey); // To tell if the control key event is fired i.e happening.
    console.log('Shift: ' + event.altKey); // To tell if the alt key event is fired i.e happening.

    if (event.shiftKey && event.key === 'K')
    {
        console.log('You hit shift K');
    }
};

// itemInput.addEventListener('keypress', onKeyPress); // not working on my browser as expected.
// itemInput.addEventListener('keyup', onKeyUp); // when you release the button you entered e.g 'p', that is when this event happens.
itemInput.addEventListener('keydown', onKeyDown); // when you hold the button you entered e.g 'p', that is when this event happens.

