function calc(sCalc) {
  const isNumber = char => !isNaN(new Number(char));
  let stack = [];
  const allowedOperators = ["+", "-", "/", "*"];
  let operatorCount = 0;
  let operandCount = 0;
  for (let i = 0; i < sCalc.length; i++) {
    if (sCalc[i] == " ") continue;
    if (isNumber(sCalc[i])) {
      operandCount++;
      stack.push(new Number(sCalc[i]).valueOf());
      continue;
    } else {
      if (allowedOperators.indexOf(sCalc[i]) > -1) {
        operatorCount++;
        stack.push(sCalc[i]);
        continue;
      }
      throw new TypeError("not valid operator");
    }
  }
  if (operandCount != operatorCount + 1)
    throw new TypeError("Invalid expression");
  while (stack.length != 1) {
    const execCalc = (op1, op, op2) => {
      switch (op) {
        case "+":
          return op1 + op2;
        case "-":
          return op1 - op2;
        case "/":
          return op1 / op2;
        case "*":
          return op1 * op2;
      }
    };
    let operand1 = stack.shift();
    let operator = stack.shift();
    let operand2 = stack.shift();
    stack = [execCalc(operand1, operator, operand2), ...stack];
  }
  return stack.pop();
}

console.log(calc("1 + 1")); // return 2

console.log(calc("1 + 2 - 3")); // return 0;

console.log(calc('1 * 2 - 3')); // -1

// console.log(calc('1 ^ 3'));
