let output;

// whenever we do 'document.' something, we get an array like html collections
output = document.all; // accessing all html
output = document.all[11]; // accessing html per index
output = document.all.length; // accessing html per length

output = document.documentElement; // accessing all html

output = document.head; // accessing the head of the html
output = document.body; // accessing the body of the html

output = document.head.children; // accessing the children of the head of the html
output = document.body.children; // accessing the children of the body of the html

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// document.forms[0].id = 'New id';

// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// whenever we do 'document.' something, we get an array like html collections
// we cant use forEach on it.
// to use forEach on it, we need to convert it to an array i.e
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);