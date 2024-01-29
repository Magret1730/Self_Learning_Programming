// queryselectorAll()

const listItems = document.querySelectorAll('.items li');
console.log(listItems);
console.log(listItems[1].innerText);

// listItems[1].style.color = 'red';

// listItems.forEach((item, index) =>
// {
//     item.style.color = 'blue';

//     if (index === 0)
//     {
//         item.remove();
//     }
//     if (index === 1)
//     {
//         item.innerHTML = `Orange
//         <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     }
// });

const listItems2 = document.getElementsByClassName('items')[0].getElementsByTagName('li');
console.log(listItems2[0].innerText);

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item2) =>
{
    console.log(item2.innerText);
});
