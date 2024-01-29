let output;

// Get child element
const parent = document.querySelector('.parent');

output = parent.children;  // it gives html collections of the children of the parent in an array
output = parent.children[1];
output = parent.children[1].innerText; // answer: child 2
output = parent.children[1].className; // answer: child
output = parent.children[1].nodeName; // answer: DIV

parent.children[0].innerText = 'Child One';
parent.children[1].style.color = 'red';

parent.lastElementChild.innerText = 'Child Three';
parent.children[1].innerText = 'Child Two';

// Get parent element from child
const child = document.querySelector('.child');
//console.log(child);

output = child.parentElement; // outputing the parent element by using the child element
child.parentElement.style.border = '1px solid black';
child.parentElement.style.padding = '10px';

// Siblings elements
const secondSibling = document.querySelector('.child:nth-child(2)');

output = secondSibling;
output = secondSibling.nextElementSibling;

secondSibling.nextElementSibling.style.color = 'green';
secondSibling.previousElementSibling.style.color = 'orange';

console.log(output.outerHTML); // console.log(output.outerHTML);
