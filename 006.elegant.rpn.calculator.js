const tokenizeSkipWhiteSpace = (input, current) => {
  return /\s/.test(input[current]) ? [1, null] : [0, null];
};

const tokenizeNumber = (input, current) => {
  const isNumber = char => /[0-9.]/.test(char);
  let char = input[current];
  let consumedChars = 0;
  if (isNumber(char)) {
    let value = "";
    while (char && isNumber(char)) {
      value += char;
      consumedChars++;
      char = input[current + consumedChars];
    }
    return [
      consumedChars,
      {
        type: "number",
        // parse integers and floats as well.
        value: new Number(value).valueOf()
      }
    ];
  }
  return [0, null];
};

const tokenizeNegativeNumber = (input, current) => {
  if (input[current] === "-") {
    let [consumedChars, numberToken] = tokenizeNumber(input, ++current);
    if (consumedChars > 0) {
      return [
        consumedChars + 1,
        {
          type: numberToken.type,
          value: numberToken.value * -1
        }
      ];
    }
  }
  return [0, null];
};

const tokenizeOperator = (input, current) => {
  const acceptedOperators = ["+", "-", "/", "*"];
  const isOperator = char => acceptedOperators.indexOf(char) > -1;
  return isOperator(input[current])
    ? [
        1,
        {
          type: "operator",
          value: input[current]
        }
      ]
    : [0, null];
};

const tokenizers = [
  tokenizeSkipWhiteSpace,
  tokenizeNumber,
  tokenizeNegativeNumber,
  tokenizeOperator
];

const tokenizer = input => {
  let current = 0;
  let tokens = [];
  while (current < input.length) {
    let tokenized = false;
    tokenizers.forEach(tokenizerFunction => {
      if (tokenized) return;
      let [consumedChars, token] = tokenizerFunction(input, current);
      if (consumedChars != 0) {
        tokenized = true;
        current += consumedChars;
      }
      if (token) tokens.push(token);
    });
    if (!tokenized) {
      throw new TypeError(
        `Invalid character in input: ${input[current]}, at ${current}.`
      );
    }
  }
  return tokens;
};

const isRPNValid = expression => {
  let isValid = true;
  const tokenizedExpression = tokenizer(expression);
  let stackSize = 0;
  tokenizedExpression.forEach(token => {
    stackSize++;
    // each operator takes two parameters.
    if (token.type === "operator") stackSize -= 2;
    if (stackSize <= 0) isValid = false;
  });
  return [isValid && stackSize == 1, tokenizedExpression];
};

const RPNCalculator = expression => {
  let [isValid, tokenizedExpression] = isRPNValid(expression);
  if (isValid) {
    let stack = [];
    tokenizedExpression.forEach(token => {
      if (token.type == "number") stack.push(token.value);
      if (token.type == "operator") {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        stack.push(eval(`(${operand1})${token.value}(${operand2})`));
      }
    });
    return stack.pop();
  }
  throw new TypeError("Expression is invalid!");
};

console.log(RPNCalculator("-15 7 1 1 + - / 3 * 2 1 1 + + -"));
