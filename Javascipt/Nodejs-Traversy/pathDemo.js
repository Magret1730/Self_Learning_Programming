import path from 'path';
import url from 'url';

const filePath = '.dir1/dir2/text.txt';

// basename()
console.log(path.basename(filePath)); // text.txt

// dirname()
console.log(path.dirname(filePath)); // .dir1/dir2

// extname()
console.log(path.extname(filePath)); // .txt

// parse()
console.log(path.parse(filePath));
// {
//   root: '',
//   dir: '.dir1/dir2',
//   base: 'text.txt',
//   ext: '.txt',
//   name: 'text'
// }

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// join() - constructs a path
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2); // /Users/temidayo/Desktop/software_classes/Self_Learning_Programming/Nodejs-Traversy/dir1/dir2/test.txt

// resolve() - constructs a path
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3); // /Users/temidayo/Desktop/software_classes/Self_Learning_Programming/Nodejs-Traversy/dir1/dir2/test.txt

