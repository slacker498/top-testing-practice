import { reverseString } from "./functions";

test("Reverse an empty string", () => {
    expect(reverseString("")).toBe("");
});

test("Reverse a single letter", () => {
    expect(reverseString("a")).toBe("a");
});

test("Reverse a string with lowercase and uppercase letters", () => {
    expect(reverseString("abCDe")).toBe("eDCba");
});

test("Reverse a number", () => {
    expect(reverseString(41949)).toBe("94914");
});

test("Handle invalid types", () => {
    expect(reverseString({})).toBeNull();
});