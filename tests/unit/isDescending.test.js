import isDescending from "../../src/helper/checkDescendingOrder.js";

it('Should return true to a descending array', () => {
  const descendingArray1 = [3, 2, 1]
  const descendingArray2 = [5, 4, 1]
  const descendingArray3 = [10, 5, 2]
  const descendingArray4 = [10, 5, 5, 2, 2, 1]
  
  const checkArray1 = isDescending(descendingArray1)
  const checkArray2 = isDescending(descendingArray2)
  const checkArray3 = isDescending(descendingArray3)
  const checkArray4 = isDescending(descendingArray4)
  
  expect(checkArray1).toBe(true)
  expect(checkArray2).toBe(true)
  expect(checkArray3).toBe(true)
  expect(checkArray4).toBe(true)
})

it('Should return false to a ascending array', () => {
  const ascendingArray1 = [1, 2, 3, 4]
  const ascendingArray2 = [2, 6, 8]
  const ascendingArray3 = [3, 20, 12, 12, 16]
  
  const checkArray1 = isDescending(ascendingArray1)
  const checkArray2 = isDescending(ascendingArray2)
  const checkArray3 = isDescending(ascendingArray3)
  
  expect(checkArray1).toBe(false)
  expect(checkArray2).toBe(false)
  expect(checkArray3).toBe(false)
})