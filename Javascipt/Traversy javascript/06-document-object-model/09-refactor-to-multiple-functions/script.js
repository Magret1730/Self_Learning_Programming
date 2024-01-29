function createNewItem(item)
{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);

    document.querySelector('ul').appendChild(li);
}

function createButton(classes)
{
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes)
{
    const icon = document.createElement('icon');
    icon.className = classes;

    return icon;
}

createNewItem('Eggs');
createNewItem('Sauce');
