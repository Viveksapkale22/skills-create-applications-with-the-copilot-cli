/**
 * Simple calculator module
 * Supported operations:
 *  - add: addition
 *  - subtract: subtraction
 *  - multiply: multiplication
 *  - divide: division
 *
 * Each function accepts two or more numeric arguments (for add/multiply, zero or more is allowed
 * but at least one is typical). Division and subtraction are left-associative: subtract(a,b,c) = (a-b)-c
 * and divide(a,b,c) = (a/b)/c. Division by zero throws an Error.
 */

function toNumber(n) {
  const x = Number(n);
  if (Number.isNaN(x)) throw new TypeError(`Invalid number: ${n}`);
  return x;
}

function add(...nums) {
  // add: returns the sum of all arguments
  if (nums.length === 0) return 0;
  return nums.map(toNumber).reduce((a, b) => a + b, 0);
}

function subtract(...nums) {
  // subtract: left-associative subtraction
  if (nums.length === 0) return 0;
  const [first, ...rest] = nums.map(toNumber);
  return rest.reduce((a, b) => a - b, first);
}

function multiply(...nums) {
  // multiply: returns the product of all arguments
  if (nums.length === 0) return 0;
  return nums.map(toNumber).reduce((a, b) => a * b, 1);
}

function divide(...nums) {
  // divide: left-associative division, throws on division-by-zero
  if (nums.length === 0) return NaN;
  const [first, ...rest] = nums.map(toNumber);
  return rest.reduce((a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }, first);
}

module.exports = { add, subtract, multiply, divide };
