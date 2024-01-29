const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => 
{
    if (document.body.style.backgroundColor !== 'purple')
    {
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    }
    else
    {
         document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}
const onRightClick = () =>
{
    logo.style.backgroundColor = 'red';
    console.log('Right Click Event');
}
const onMouseDown = () => console.log('mouse down event');
const onMouseup = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');

// Event listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick); // contextmenu is right click event.
logo.addEventListener('mousedown', onMouseDown); // mouseDown is hold left click but the click event will happen also because once you hold down left click, you will automatically click.
logo.addEventListener('mouseup', onMouseup); // mouseup is hold left click but the click event and mouse down will happen also because once you hold down left click, mouse down will happen anf if you let go, mouse up and click will automatically click.
logo.addEventListener('mousewheel', onMouseWheel); // put the cursor on the logo and then scroll.
logo.addEventListener('mouseover', onMouseOver); // put the cursor on the logo and then an event will happen.
logo.addEventListener('mouseout', onMouseOut); // remove the cursor on the logo and then an event will happen.
logo.addEventListener('dragstart', onDragStart); // click and hold and then drag and then an event will happen.
logo.addEventListener('drag', onDrag); // click and hold and then drag and then an event will happen. As far as you did not drop the drag, the event will keep happening.
logo.addEventListener('dragend', onDragEnd); // opposite of dragstart. Once you leave the drag, this event happens
