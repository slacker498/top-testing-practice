import { calculator } from "./functions";

test("Add two numbers", () => {
    expect(calculator.add(4,6)).toBe(10);
});

test("Add a single number to itself", () => {
    expect(calculator.add(4)).toBe(4);
});

test("Add with no numbers", () => {
    expect(calculator.add()).toBe(0);
});

test("Handle type errors for adding", () => {
    expect(calculator.add({})).toBe("Invalid params entered! Only number and bigint values allowed");
});



test("Subtract two numbers", () => {
    expect(calculator.subtract(4,6)).toBe(-2);
});

test("Subtract a single number to itself", () => {
    expect(calculator.subtract(4)).toBe(4);
});

test("Subtract with no numbers", () => {
    expect(calculator.subtract()).toBe(0);
});

test("Handle type errors for subtracting", () => {
    expect(calculator.subtract({})).toBe("Invalid params entered! Only number and bigint values allowed");
});




test("Multiply two numbers", () => {
    expect(calculator.multiply(4,6)).toBe(24);
});

test("Multiply a single number to itself", () => {
    expect(calculator.multiply(4)).toBe(4);
});

test("Multiply with no numbers", () => {
    expect(calculator.multiply()).toBe(0);
});

test("Handle type errors for multiplying", () => {
    expect(calculator.multiply({})).toBe("Invalid params entered! Only number and bigint values allowed");
});



test("Divide two numbers", () => {
    expect(calculator.divide(25,5)).toBe(5);
});

test("Divide a single number to itself", () => {
    expect(calculator.divide(25)).toBe(25);
});

test("Divide with no numbers", () => {
    expect(calculator.divide()).toBe(0);
});

test("Divide zero division error", () => {
    expect(calculator.divide(25,0)).toBe("Zero Division Error");
});

test("Handle type errors for dividing", () => {
    expect(calculator.divide({})).toBe("Invalid params entered! Only number and bigint values allowed");
});