import paintRequiredCalculator from "../paintRequiredCalculator/paintRequiredCalculator"; 

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5);
  });

  test("should throw error for negative area", () => {
    expect(() => paintRequiredCalculator(-50, 10)).toThrow("Area and coverage per liter must be positive values.");
  });

  test("should throw error for zero coverage", () => {
    expect(() => paintRequiredCalculator(50, 0)).toThrow("Area and coverage per liter must be positive values.");
  });

  test("should throw error for negative coverage", () => {
    expect(() => paintRequiredCalculator(50, -10)).toThrow("Area and coverage per liter must be positive values.");
  });
});
