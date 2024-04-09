import { findMissingNumberWithSum } from "../src/solution2";

describe("findMissingNumberWithSum function", () => {
  it("should return the missing number in the array for typical cases", () => {
    expect(findMissingNumberWithSum([5, 0, 1, 3, 2])).toBe(4);
    expect(findMissingNumberWithSum([7, 9, 10, 11, 12])).toBe(8);
    expect(findMissingNumberWithSum([0, 1, 2, 4])).toBe(3);
  });

  it("should return null for edge cases", () => {
    expect(findMissingNumberWithSum([])).toBeNull();
    expect(findMissingNumberWithSum([1])).toBeNull();
    expect(findMissingNumberWithSum([0, 1])).toBeNull();
  });

  it("should handle arrays with negative numbers", () => {
    expect(findMissingNumberWithSum([-1, -2, 0, 1, 2])).toBeNull();
  });

  it("should handle arrays with positive numbers", () => {
    expect(findMissingNumberWithSum([1, 2, 3, 5])).toBe(4);
  });

  it("should handle arrays with both negative and positive numbers", () => {
    expect(findMissingNumberWithSum([-2, -1, 0, 2])).toBe(1);
  });

  it("should handle arrays with random numbers", () => {
    expect(findMissingNumberWithSum([3, 1, 0, 2, 5])).toBe(4);
  });

  it("should handle arrays with numbers starting from a value other than 0", () => {
    expect(findMissingNumberWithSum([7, 8, 9, 11])).toBe(10);
  });
});
