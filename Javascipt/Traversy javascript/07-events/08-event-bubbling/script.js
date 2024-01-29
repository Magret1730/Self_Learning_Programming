const button = document.querySelector('form button');
const div = document.querySelector('form .form-controls');
const form = document.querySelector('form');

button.addEventListener('click', (e) =>
{
    alert('The button was clicked')
    e.stopPropagation(); // This stops the bubbling. Comment this line and see it.
    // Another one is stopImmediatePropagation()
});
div.addEventListener('click', () => alert('The div was clicked'));
form.addEventListener('click', () => alert('The form was clicked'));

document.body.addEventListener('click', () => alert('The body was clicked'));

// console.log(div);

