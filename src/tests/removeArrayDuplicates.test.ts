import { removeArrayDuplicates } from "../removeArrayDuplicates";

test("removeArrayDuplicates", () => {
  const arrayWithDuplicates = [
    1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 4, 2, 3,
  ];
  const arrayWithNoDuplicates = [1, 2, 3, 4, 5];
  expect(removeArrayDuplicates(arrayWithDuplicates)).toEqual(
    arrayWithNoDuplicates
  );
});
