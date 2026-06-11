#!/usr/bin/env node
/**
 * CLI entry for the calculator in src/calculator.js
 * Supported operations (by name):
 *  - add
 *  - subtract
 *  - multiply
 *  - divide
 *
 * Usage examples:
 *  node src/cli.js add 1 2
 *  node src/cli.js divide 10 2
 */

const { add, subtract, multiply, divide } = require('./calculator');

function usage(exitCode = 0) {
  console.error('Usage: node src/cli.js <operation> <num1> <num2> [<num3> ...]');
  console.error('Operations: add, subtract, multiply, divide');
  process.exit(exitCode);
}

function parseNumbers(arr) {
  return arr.map(s => {
    const n = Number(s);
    if (Number.isNaN(n)) {
      console.error(`Invalid number: ${s}`);
      process.exit(2);
    }
    return n;
  });
}

const argv = process.argv.slice(2);
if (argv.length < 2) usage(1);

const op = argv[0].toLowerCase();
const nums = parseNumbers(argv.slice(1));

try {
  let result;
  switch (op) {
    case 'add':
    case '+':
      result = add(...nums);
      break;
    case 'subtract':
    case 'sub':
    case '-':
      result = subtract(...nums);
      break;
    case 'multiply':
    case 'mul':
    case '*':
      result = multiply(...nums);
      break;
    case 'divide':
    case 'div':
    case '/':
      result = divide(...nums);
      break;
    default:
      console.error(`Unknown operation: ${op}`);
      usage(2);
  }
  // Print result (no extra text for easy scripting)
  console.log(result);
  process.exit(0);
} catch (err) {
  console.error('Error:', err.message || err);
  process.exit(3);
}
