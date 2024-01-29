// window.onload = function () // This helps the page to load first and then the javascript is executed. This is useful if the javascript is within the head and not body.
// {
//     document.querySelector('h1').textContent = 'Hello World';
// };

// This does the same thing as above
// window.addEventListener('load', document.querySelector('h1').textContent = 'Hello World');

// Same as above but the diffence between 'load' and 'DOMContentLoaded' is that load waits for the entire page to load before
// executing unlike 'DOMContentLoaded' which executes once the DOM has loaded.
// window.addEventListener('DOMContentLoaded', document.querySelector('h1').textContent = 'Hello World');

// window.addEventListener('load', console.log('Page Loaded'));
// window.addEventListener('DOMContentLoaded', console.log('DOM Loaded'));

// console.log('Run me');

// window.addEventListener('resize', () =>
// {
//     document.querySelector('h1').innerHTML = `Resized to ${window.innerWidth}px x ${window.innerHeight}px`;
// });

// window.addEventListener('scroll', () =>
// {
//     console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

//     if (window.scrollY > 150)
//     {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'red';
//     }
//     else
//     {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// });

window.addEventListener('focus', () =>
{
    document.querySelectorAll('p').forEach((p) =>
    {
        p.style.color = 'blue';
    });
});


window.addEventListener('blur', () =>                       // Not working
{
    document.querySelectorAll('p').forEach((p) =>
    {
        p.style.color = 'black';
    });
});
