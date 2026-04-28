function calculator(number1, number2, operator) {
	let result;

	// switch (operator) {
	// 	case '+':
	// 		result = number1 + number2;
	// 		break;
	// 	case "-":
	// 		result = number1 - number2;
	// 		break;
	// 	case "*":
	// 		result = number1 * number2;
	// 		break;
	// 	case "/":
	// 		result = number1 / number2;
	// 		break;
	// 	default:
	// 		throw new Error("Invalid operator");
	// }

	if (operator === '+') {
		result = number1 + number2;
	} else if (operator === "-") {
		result = number1 - number2;
	} else if (operator === "*") {
		result = number1 * number2;
	} else if (operator === "/") {
		result = number1 / number2;
	} else {
		throw new Error("Invalid operator");
	}

	return result;
}

module.exports = calculator;
