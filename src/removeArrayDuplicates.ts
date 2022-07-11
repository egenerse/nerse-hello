type arrayElement = number;

export function removeArrayDuplicates(arr: arrayElement[]) {
  // Accepts an array from which the duplicates
  // will be removed
  if (!Array.isArray(arr)) {
    arr = [];
  }
  const theSet = new Set(arr);
  const uniqueArr: arrayElement[] = [...theSet];

  return uniqueArr;
}
