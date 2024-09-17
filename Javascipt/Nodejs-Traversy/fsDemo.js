// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./text.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readFile() - Synchronous
// const data = fs.readFileSync('./text.txt', 'utf-8');
// console.log(data);

// readFile() - Promise .then()
// fs.readFile('./text.txt', 'utf-8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// readFile() - async/await
const readFile = async() => {
    try {
        const data = await fs.readFile('./text.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

// writeFile() - async/await
const writeFile = async() => {
    try {
        await fs.writeFile('./text.txt', 'Hello, I am writing to this file');
        console.log('File written to...');
    } catch (error) {
        console.log(error);
    }
};

// appendFile() - async/await
const appendFile = async() => {
    try {
        await fs.appendFile('./text.txt', '\nHello, I am appending to this file');
        console.log('File appended to...');
    } catch (error) {
        console.log(error);
    }
};

writeFile();
appendFile();
readFile();
