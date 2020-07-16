import { numIdenticalPairs } from '../'

test('it calculates the number of identical pairs', () => {
  expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toEqual(4)
  expect(numIdenticalPairs([1, 1, 1, 1])).toEqual(6)
  expect(numIdenticalPairs([1, 2, 3])).toEqual(0)
})
