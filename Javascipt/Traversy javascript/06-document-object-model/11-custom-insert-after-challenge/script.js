// CHALLENGE
function insertAfter(newEl, existingEl)
{
    // console.log(existingEl.parentElement);

    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

const li = document.createElement('li');
li.textContent = 'Insert me after!';

const firstItem = document.querySelector('li:first-child');

// console.log(li);

insertAfter(li, firstItem);