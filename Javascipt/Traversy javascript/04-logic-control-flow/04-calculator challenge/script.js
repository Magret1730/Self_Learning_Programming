function calculator(num1, num2, operator)
{
    switch (operator)
    {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            return 'Invalid operator';
    }
}

console.log(calculator(5, 4, '+'));
console.log(calculator(5, 4, '-'));
console.log(calculator(5, 4, '/'));
console.log(calculator(5, 4, '*'));
console.log(calculator(5, 4, '?'));