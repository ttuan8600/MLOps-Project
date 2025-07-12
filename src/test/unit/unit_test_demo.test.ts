import {add, isEven, subtract} from "./unit_test_demo";

describe('math utils - unit tests', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('check if the number is even', () => {
    expect(isEven(2)).toBe(true);
  });
});
