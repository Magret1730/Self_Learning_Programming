const socials = ['Facebook', 'Twitter', 'Instagram', 'Whatsapp', 'LinkedIn'];

// console.log(socials.__proto__);
socials.forEach(function (item)
{
    console.log(item);
});

// OR // multiple items require {}
socials.forEach((item, index) => 
{
    console.log(index);
    console.log(item);
});

// OR
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Passing in a named function
const social = ['Facebook', 'Twitter', 'Instagram', 'Whatsapp', 'LinkedIn'];

function logSocial(social)
{
    console.log(social);
}
social.forEach(logSocial);

// Array
const socialObj = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'Instagram', url: 'https://instagram.com'},
    {name: 'LinkedIn', url: 'https://linkedin.com'},
];
socialObj.forEach((item) => console.log(item));
socialObj.forEach((item) => console.log(item.url));
socialObj.forEach((item) => console.log(item.name));