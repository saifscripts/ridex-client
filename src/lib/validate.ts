export function isValidNumber(value: string) {
  return !isNaN(Number(value)) && value.trim() !== '';
}

export function isPositiveNumber(value: string) {
  const number = parseFloat(value);
  return !isNaN(number) && number > 0 && value.trim() !== '';
}

export function isNormalNumber(value: string): boolean {
  const number = parseFloat(value);
  return !isNaN(number) && Number.isInteger(number) && number > 0;
}

export function isValidYear(value: string): boolean {
  const year = parseInt(value, 10);
  const minYear = 1900;
  return Number.isInteger(year) && year >= minYear;
}
