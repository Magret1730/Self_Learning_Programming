const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/*
const evenNumbers = numbers.filter(function (number)
{
    return number % 2 === 0;
});
console.log(evenNumbers);
*/

/*
// Shoter version
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
*/

/*
// forEach
const evenNumbers = [];
numbers.forEach(number => 
{
    if (number % 2 === 0)
    {
        evenNumbers.push(number);
    }
});
console.log(evenNumbers);
*/

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 1991},
    {name: 'Company Two', category: 'Retail', start: 1982, end: 2005},
    {name: 'Company Three', category: 'Auto', start: 1983, end: 2006},
    {name: 'Company Four', category: 'Retail', start: 1984, end: 2007},
    {name: 'Company Five', category: 'Technology', start: 1985, end: 2008},
    {name: 'Company Six', category: 'Finance', start: 1986, end: 2009},
    {name: 'Company Seven', category: 'Auto', start: 1987, end: 2010},
    {name: 'Company Eight', category: 'Technology', start: 1988, end: 2011},
    {name: 'Company Nine', category: 'Retail', start: 1989, end: 2012},
];

// Get only retail companies
const retailCompanies = companies.filter((company) => company.category === 'Retail');
console.log(retailCompanies);

// const retailCompanies2 = companies.filter((retail) => console.log(retail.category));

// Get companies that started in or after 1986 and ended in or after 2010
const earlyCompanies = companies.filter((company) => company.start >= 1986 && company.end >= 2010);
console.log(earlyCompanies);

// companies that lasted 10 year exactly
const tenCompanies = companies.filter((company) => company.end - company.start === 10);
console.log(tenCompanies);