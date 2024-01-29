const logo = document.querySelector('img');

/*
logo.addEventListener('click', function(event) // it can event or e or evt
{
    console.log(event);
});
*/

// It can also be a named function
function onClick(e)
{
    // console.log(e);
    // console.log(e.target); // when you click on the logo selected, you get its properties on console.
    // console.log(e.currentTarget); // In this case, it is the same with target.
    // console.log(e.type);
    // console.log(e.timeStamp);
    // console.log(e.clientX); //  X is horizontal i.e right to left postion relative to the window
    // console.log(e.clientY); //  Y is vertical i.e top to bottom position relative to the window
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log(e.screenX);
    // console.log(e.screenY); // screen is the entire monitor
    /* accessing event that is clicked on
    e.target.style.backgroundColor = 'black'; */
}

function onDrag(e)
{
    document.querySelector('h1').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

/* // Example to show difference between target and currentTarget
document.body.addEventListener('click', function (e)
{
    console.log(e.target); // Whatever that is clicked on
    console.log(e.currentTarget); // WHatever the event is attached to in this case, the body
});*/

document.querySelector('a').addEventListener('click', function (e)
{
    e.preventDefault(); // This prevents the default behaviour of the event that was clicked

    console.log('Link was clicked');
});

/*
- `target` - The element that triggered the event i.e the element you click on.
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/