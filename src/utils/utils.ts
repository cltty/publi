export function regexCheck(value: string) {
  return /component/.test(value);
}
export function lengthCheck(value: string) {
  const length: number = value.length;
  return length > 2 && length < 51;
}
