// console.log(window);
// console.dir(window.document);
// console.log(window.document);
// console.log(document.body);
// console.log(document.body.innerHTML);
// console.log(document.body.innerText);
// console.log(document.links);
// console.log(document.links[0]);
// document.body.innerHTML = '<h1>Hello World</h1>'; // It replaces all the html with 'Hello World'

// METHODS ON DOCUMENT OBJECTS
// document.write('Hello from JS'); // this writes to the end of the file

/* METHODS TO SELECT CERTAIN ELEMENTS IN THE DOM
console.log(document.getElementById('main'));
const main = document.getElementById('main');
main.innerHTML = '<h1>Hello from main</h1>';
*/

// QUERY SELECTORS
document.querySelector('#main h1').innerText = 'Hello';
