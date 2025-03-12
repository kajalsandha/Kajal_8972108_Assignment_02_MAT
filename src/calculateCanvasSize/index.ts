import paintRequiredCalculator from "./paintRequiredCalculator";

export { default } from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5);
  });

  test("should return 0 when area is 0", () => {
    const result = paintRequiredCalculator(0, 10);
    expect(result).toEqual(0);
  });

  test("should return 0 when coveragePerLiter is 0", () => {
    const result = paintRequiredCalculator(50, 0);
    expect(result).toEqual(0);
  });

  test("should handle invalid inputs gracefully", () => {
    const result = paintRequiredCalculator(NaN, 10);
    expect(result).toEqual(0);
  });
});
