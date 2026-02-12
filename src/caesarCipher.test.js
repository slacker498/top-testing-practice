import { caesarCipher } from "./functions";

test("Shift a normal string without a circular loopback", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
});

test("Shift a string without a circular loopback", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test("Shift a string with mixed casing", () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test("Shift a string with punctuations, spaces and symbols", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test("Negative shift", () => {
    expect(caesarCipher('aBc', -1)).toBe('zAb');
})

test("Handle invalid param type errors", () => {
    expect(caesarCipher({}, "3")).toBe("ValueError: First param must be a string and shift must be number");
})