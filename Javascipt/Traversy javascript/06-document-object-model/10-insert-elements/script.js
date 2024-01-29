// insertAdjacentElement Example
function insertElement()
{
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('afterbegin', h1);
}
insertElement();

// insertAdjacentText Example
function insertText()
{
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('beforeEnd', 'insertAdjacentText');
}
insertText();

// insertAdjacentHTML Example
function insertHTML()
{
    const clearButton = document.querySelector('#clear');

    clearButton.insertAdjacentHTML('afterEnd', '<h2>insertAdjacentHTML</h2>');
}
insertHTML();

// insertBefore Example // This works like appendChild()
function insertBeforeItem()
{
    const ul = document.querySelector('ul'); // you need to pick the parent item

    const li = document.createElement('li'); // The  element you want to insert
    li.textContent = 'insertBefore';

    const button = document.createElement('i'); // Creating the button element
    button.className = 'fa-solid fa-xmark';
    button.style.color = 'red';

    li.appendChild(button); // appending the button to li

    const thirdItem = document.querySelector('li:nth-child(3)'); // The item you want to insert the li before.

    ul.insertBefore(li, thirdItem);
}
insertBeforeItem();


/*
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
</p>
<!-- afterend -->
*/
