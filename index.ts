type arrayElement = number;

let uniqueArr: arrayElement[] = [];
function removeArrayDuplicates(arr: arrayElement[]) {
  // Accepts an array from which the duplicates
  // will be removed
  if (!Array.isArray(arr)) {
    arr = [];
  }
  let theSet = new Set(arr);
  let uniqueArr = [...theSet];
  console.log("DEDEDEDE");
  return uniqueArr;
}

module.exports = removeArrayDuplicates;
