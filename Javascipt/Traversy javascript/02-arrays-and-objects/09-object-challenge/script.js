// step 1
const library = [
    {
        title: 'I made it',
        author: 'Magret',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'God did it',
        author: 'Temidayo',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Faithful Father',
        author: 'Ogo-Ire',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

// step 2 - Reassigning
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// step 3 - Destructuring
const {title: firstBook} = library[0];
console.log(firstBook);

// step 4 - convert to json
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);