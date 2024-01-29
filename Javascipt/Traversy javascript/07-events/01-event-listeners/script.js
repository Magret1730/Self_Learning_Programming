const clearBtn = document.querySelector('#clear');

// function onClear()
// {
//     alert('Clear Items');
// }

// clearBtn.onclick = function ()
// {
//     alert('Clear Items');
// };

// This can be shortened into an arrow function
// clearBtn.addEventListener('click', function ()
// {
//     alert('Clear Items');
// });

// clearBtn.addEventListener('click', () => alert('Cleat Items'));

// Named function can be passed in
// clearBtn.addEventListener('click', onClear);

// addEventListener() can be done multiple times on an item
// clearBtn.addEventListener('click', () => alert('Cleat Items'));
// clearBtn.addEventListener('click', () => console.log('Clear Items'));

// remove eventListener after 5seconds
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// This runs programmertically
// Waiting 5secs and then the functrion runs. THe 5000 is in ml and when converted to seconds, it gives 5seconds.
// setTimeout(() => clearBtn.click(),5000);


// Challenge
// Click on 'Clear All' button and all the list items will disappear
/*
function onClearr()
{
    const itemList = document.querySelector('ul');

    itemList.innerHTML = '';
}
clearBtn.addEventListener('click', onClearr);
*/

/* Another method
function onClearr2()
{
    const itemList = document.querySelector('ul');
    const List = document.querySelectorAll('li');

    List.forEach((item) => item.remove());
}
clearBtn.addEventListener('click', onClearr2);
*/

// Another method
function onClearr3()
{
    const itemList = document.querySelector('ul');

    while(itemList.firstChild)
    {
        itemList.removeChild(itemList.firstChild);
    }
}
clearBtn.addEventListener('click', onClearr3);
