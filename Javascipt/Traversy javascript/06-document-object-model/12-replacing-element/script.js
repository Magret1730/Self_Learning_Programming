function replaceFirstItem(subName)
{
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = `${subName}`;

    firstItem.replaceWith(li);
}

function replaceSecondItem()
{
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second</li>';
    // console.log(secondItem);
}

/*function replaceAll()
{
    const allItems = document.querySelectorAll('li');

    allItems.forEach((item, index) => 
    {
        if (index === 1)
        {
            item.innerHTML = 'Second Item';
        }
        else
        {
            // item.outerHTML = '<li>Replace All</li>';
            item.innerHTML = 'Replace All';
        }
    });
}*/

// A shorter form
function replaceAll()
{
    const allItems = document.querySelectorAll('li');

    allItems.forEach((item, index) => index === 1 ? item.innerHTML = 'Second Item' : item.innerHTML = 'Replace All');
}

// Replacing child
function replaceChildHeading()
{
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.textContent = 'Shopping Lists';
    h2.id = 'app-title';

    header.replaceChild(h2, h1); // Replace h2 with h1

    console.log(h1);
}

replaceFirstItem('Replace first');
replaceSecondItem();
replaceAll();
replaceChildHeading();