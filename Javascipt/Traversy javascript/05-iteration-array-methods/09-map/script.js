const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// same with for each
let numberArray = []
numbers.forEach((number) => 
{
    numberArray.push(number * 2);
});
console.log(numberArray);

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

// Create an array of company name
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an array with company and categories
const companyCategories = companies.map((company) => `${company.name} category is ${company.category}`);
console.log(companyCategories);

// or
const companyCategories2 = companies.map((company) => 
{
    return {
        name: company.name,
        category: company.category
    };
});
console.log(companyCategories2);

// Create an array of object with the name and length of each company in years.
const lengthCompany = companies.map((company) =>
{
    return {
        name: company.name,
        length: company.end - company.start + ' years'
    };
});
console.log(lengthCompany);

// Chain map method
const squareDouble = numbers
    .map((number) => Math.sqrt(number)) // the value for the squareroot which is number will be put inside 'doubled'
    .map((doubled) => doubled * 2);
console.log(squareDouble);

// Longer version
const squareDouble2 = numbers
    .map(function (number)
    {
        return Math.sqrt(number);
    })
    .map(function (sqrt)
    {
        return sqrt * 2;
    });
console.log(squareDouble2);

// chaining different methods
const evenDouble = numbers
    .filter((number) => number % 2 == 0)
    .map(square => square * 2);
console.log(evenDouble);
