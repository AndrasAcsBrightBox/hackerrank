function RPNCalculator(expression) {
    const operators = ['+', '-', '/', '*'];
    let calculatorStack = [];
    const splittedAndCastedExpression = String.prototype.split.call(expression, ' ').map((item) => {
        let boxed = new Number(item);
        if (isNaN(boxed)) return item;
        return boxed.valueOf();
    });
    for(let i = 0; i < splittedAndCastedExpression.length; i++) {
        if(typeof(splittedAndCastedExpression[i]) === "number") {
            calculatorStack.push(splittedAndCastedExpression[i]);
        }
        else if (operators.indexOf(splittedAndCastedExpression[i]) > -1) {
            const operand1 = calculatorStack.pop();
            const operand2 = calculatorStack.pop();
            calculatorStack.push(eval(`(${operand1})${splittedAndCastedExpression[i]}(${operand2})`));
        }
    }
    return calculatorStack.pop();
}

console.log(RPNCalculator('-15 7 1 1 + - / 3 * 2 1 1 + + -'));
 // also will need to take into consideration the error scenarios as well