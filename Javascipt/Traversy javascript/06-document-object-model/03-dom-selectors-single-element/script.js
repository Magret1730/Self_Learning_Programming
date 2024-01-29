// document.getElementById();
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attribute
document.getElementById('app-title').title = 'shopping list';
document.getElementById('app-title').setAttribute('class', 'title');

// Putting it into a variable
const title = document.getElementById('app-title');
console.log(title);

// Get/Change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles i.e edit CSS
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.borderRadius = '10px';
title.style.padding = '10px';

// document.querySelector();
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText); // this gets the 2nd list

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'Blue';

// Use this method on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
console.log(firstItem);
const thirdItem = list.querySelector('li:nth-child(3)');
console.log(thirdItem);
thirdItem.style.color = 'green';