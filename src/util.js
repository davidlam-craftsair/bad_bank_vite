export function isStringNumber(t) {
  const regexp = /[^\d]+/ // 1 or more occurrence of non-digit character
  return !regexp.test(t);
}
export function convertFromStringToNumber(t) {
  return Number(t);
}
