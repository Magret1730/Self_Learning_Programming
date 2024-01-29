console.log(100);

console.log("Hello World");

console.log(100, true, "Hello World");

const x = 100;

console.log(x);

console.log(false);

console.error('Alert');

console.warn('Warn');

console.table({name: 'Magret', email: 'magret@gmail.com'});

console.group('simple');
console.log(x);
console.log(false);
// console.error('Alert');
// console.warn('Warn');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);