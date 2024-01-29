const listItem = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItem.forEach((item) =>
// {
//     item.addEventListener('click', (event) =>
//     {
//         event.target.remove();
//     })
// });

list.addEventListener('click', (e) =>
{
    // console.log(e.target);
    if (e.target.tagName === 'LI')
    {
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e) =>
{
    // console.log(e.target);
    if (e.target.tagName === 'LI')
    {
        e.target.style.color = 'red';
    }
});

list.addEventListener('mouseout', (e) =>
{
    // console.log(e.target);
    if (e.target.tagName === 'LI')
    {
        e.target.style.color = 'black';
    }
});
