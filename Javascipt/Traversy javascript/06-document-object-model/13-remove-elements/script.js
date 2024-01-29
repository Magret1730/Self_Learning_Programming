// remove() on the element you want to remove
function removeClearButton()
{
    document.querySelector('#clear').remove();
}

// remove() child from parent
function removeFirstItem()
{
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    // console.log(li);
    ul.removeChild(li);
}

function removeItem(itemNumber)
{
    const li = document.querySelectorAll('.items li');

    li.forEach((item, index) =>
    {
        if (itemNumber === index)
        {
            // console.log(item);
            item.remove();
        }
    })
}

// Another way to removeItem
function removeItem2(itemNumber)
{
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

// Another way to removeItem
function removeItem3(itemNumber)
{
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
}

// Another way to removeItem
function removeItem4(itemNumber)
{
    const li = document.querySelectorAll('.items li');
    // console.log(li);
    li[itemNumber - 1].remove();
}

// A shorter way
const removeItem5 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();

// removeClearButton();
// removeFirstItem();
// removeItem(0);
// removeItem2(1);
// removeItem3(2);
// removeItem4(1);
removeItem5(3);