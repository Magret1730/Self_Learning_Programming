// Write a function that takes an integer n and returns the sum of 
// all even numbers up to n (inclusive). For example, if n is 10, the 
// function should return 2 + 4 + 6 + 8 + 10 = 30.

// let myFunction = (a, b) => a * b;

const intSum = (num) => {
    let total = 0;

    for (let x = 2; x <= num; x += 2 ) {
        total += x;
    }

    return total;
}

function main(num) {
    console.log(intSum(10));
}

main();
