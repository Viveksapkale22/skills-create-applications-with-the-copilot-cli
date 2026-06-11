const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Calculator with multiple operands and floats', () => {
  test('add multiple: 1 + 2 + 3 = 6', () => {
    expect(add(1, 2, 3)).toBe(6);
  });

  test('multiply multiple: 2 * 3 * 4 = 24', () => {
    expect(multiply(2, 3, 4)).toBe(24);
  });

  test('subtract multiple: 10 - 2 - 3 = 5', () => {
    expect(subtract(10, 2, 3)).toBe(5);
  });

  test('divide multiple: 100 / 2 / 5 = 10', () => {
    expect(divide(100, 2, 5)).toBe(10);
  });

  test('floats: add 0.1 + 0.2 ~ 0.30000000000000004', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.30000000000000004);
  });
});

describe('Edge cases and errors', () => {
  test('division by zero throws', () => {
    expect(() => divide(10, 0)).toThrow(/Division by zero/);
  });

  test('invalid number input throws TypeError', () => {
    expect(() => add('a', 1)).toThrow(TypeError);
  });

  test('no-arg add returns 0', () => {
    expect(add()).toBe(0);
  });

  test('no-arg multiply returns 0', () => {
    expect(multiply()).toBe(0);
  });

  test('no-arg subtract returns 0', () => {
    expect(subtract()).toBe(0);
  });

  test('no-arg divide returns NaN', () => {
    expect(divide()).toBeNaN();
  });
});
