const { Stack } = require("./stack");

function expressionEvaluation(expression) {
  const operands = new Stack();
  const operators = new Stack();

  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];
    if (isOperand(char)) {
      operands.push(char);
    } else if (isOperator(char)) {
      while (
        !operators.isEmpty() &&
        precedence(operators.peek().value) >= precedence(char)
      ) {
        process(operands, operators);
      }
      operators.push(char);
    }
  }

  while (!operators.isEmpty()) {
    process(operands, operators);
  }

  const resultant = operands.pop();

  return operands.peek() === null ? resultant.value : null;
}

function process(operands, operators) {
  let num2 = operands.pop().value;
  let num1 = operands.pop().value;
  let operator = operators.pop().value;
  let result = eval(num1 + operator + num2);
  operands.push(result);
}

function isOperator(char) {
  return char === "*" || char === "/" || char === "+" || char === "-";
}

function isOperand(char) {
  return char >= "0" && char <= "9";
}

function precedence(operator) {
  if (operator === "*" || operator === "/") {
    return 2;
  } else if (operator === "+" || operator === "-") {
    return 1;
  } else {
    throw new Error("Invalid operator encountered in expression.");
  }
}

console.log(expressionEvaluation("2 + 1 - 6 / 2 - 6 * 8"));
