let output;

// Child Node
const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0];
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerHTML = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

// Parent node
const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Siblings node
const secondChild = document.querySelector('.child:nth-child(2)');

output = secondChild;
output = secondChild.nextSibling;
output = secondChild.previousSibling;

console.log(output); // console.log(parent.outerHTML); 