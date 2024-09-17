import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object
const urlObj = new URL(urlString);
console.log(urlObj);
console.log(urlObj.searchParams);

// format() - it takes the object and turns it back into a string
console.log(url.format(urlObj));

// import.meta.url
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search) // It turns it to an object
console.log(params);
console.log(params.get('q'));
params.append('limit', '5');
console.log(params);
params.delete('limit');
console.log(params);
