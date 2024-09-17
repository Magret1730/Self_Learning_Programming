const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

function addItem(event)
{
    event.preventDefault();

    const newItem = itemInput.value;

    // Validate input
    if (newItem === '')
    {
        alert('Please add an item!!!');
        return;
    }

    // Create List Item
    const li = document.createElement('li');
    const liText = document.createTextNode(newItem);
    li.appendChild(liText);

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);

    itemList.appendChild(li);
    itemInput.value = '';
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
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(event)
{
    if (event.target.parentElement.classList.contains('remove-item'))
    {
        event.target.parentElement.parentElement.remove();
    }
}

function clearItems(event)
{
    while (itemList.firstChild)
    {
        itemList.removeChild(itemList.firstChild);
    }
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
