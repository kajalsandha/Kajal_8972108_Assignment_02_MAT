export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  if (isNaN(area) || isNaN(coveragePerLiter) || area <= 0 || coveragePerLiter <= 0) {
    return 0;
  }

  return area / coveragePerLiter;
}


