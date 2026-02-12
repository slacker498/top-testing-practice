import { analyzeArray } from "./functions";

test("Return expected object for an array of numbers", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});

test("Return expected object for an empty array", () => {
    expect(analyzeArray([])).toEqual({average: 0, min: 0, max: 0, length: 0});
});

test("Handle error for an array with a non-number", () => {
    expect(analyzeArray([1,8,3,{},2,"6"])).toBe("Given array contains a non-number!");
});

test("Handle error for a non-array param", () => {
    expect(analyzeArray(() => {})).toBe("Param is not an array!");
});