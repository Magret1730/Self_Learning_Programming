// CHALLENGE ONE
const people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@mail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstname: 'Jane',
        lastname: 'Poe',
        email: 'jane@mail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstname: 'Bob',
        lastname: 'Foe',
        email: 'bob@mail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstname: 'Sara',
        lastname: 'Soe',
        email: 'sara@mail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstname: 'Jose',
        lastname: 'Koe',
        email: 'jose@mail.com',
        phone: '555-555-5555',
        age: 23,
    },
]

const youngPeople = [];
people.forEach(people =>
    {
        if (people.age <= 25)
        {
            youngPeople.push({name: people.firstname +' '+ people.lastname, email: people.email});
        }
    });
console.log(youngPeople);

// OR
const youngPeople2 = people
    .filter(people2 => people2.age <= 25)
    .map((people3) => ({
        name: people3.firstname +' '+ people3.lastname,
        email: people3.email
    }));
console.log(youngPeople2);

// CHALLENGE TWO
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
    .filter((positiveNumbers) => positiveNumbers >= 0)
    .reduce((prev, cur) => prev + cur, 0);
console.log(positiveSum);

// CHALLENGE THREE
const words = ['coder', 'programmer', 'developer'];

const capitalizedWord = [];
for (const word of words)
{
    const newWord = word[0].toUpperCase() + word.substring(1);
    capitalizedWord.push(newWord)
}
console.log(capitalizedWord);

// OR
const cWord = words.map(word2 =>
    {
        return word2[0].toUpperCase() + word2.slice(1, word2.length);
    });
console.log(cWord);