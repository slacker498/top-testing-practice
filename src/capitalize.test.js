import { capitalize } from "./functions";

test("Capitalize a letter", () => {
    expect(capitalize("n")).toBe("N");
});

test("Capitalize a string with all letters in lowercase", () => {
    expect(capitalize("numbers")).toBe("Numbers");
})

test("Capitalize a string with all letters in uppercase", () => {
    expect(capitalize("REVOLUTION")).toBe("Revolution");
})

test("Capitalize numbers' string", () => {
    expect(capitalize("222")).toBe("222");
})

test("Capitalize numbers as type 'Number'", () => {
    expect(capitalize(23122)).toBe("23122");
})

test("Handle invalid types", () => {
    expect(() => capitalize({"key": "value"})).toThrow();
})