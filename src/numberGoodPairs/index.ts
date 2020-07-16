/**
 * https://leetcode.com/problems/number-of-good-pairs/
 *
 * Given an array of integers nums.
 *
 * A pair (i,j) is called good if nums[i] == nums[j] and i < j.
 *
 * Return the number of good pairs.
 *
 * Example 1:
 *  Input: nums = [1,2,3,1,1,3]
 *  Output: 4
 *  Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 *
 * Example 2:
 *  Input: nums = [1,1,1,1]
 *  Output: 6
 *  Explanation: Each pair in the array are good.
 *
 * Example 3:
 *  Input: nums = [1,2,3]
 *  Output: 0
 *
 * Constraints:
 *  1 <= nums.length <= 100
 *  1 <= nums[i] <= 100
 */
export function numIdenticalPairs(nums: number[]): number {
  let numPairs = 0
  const counts = new Map<number, number>()
  for (const num of nums) {
    const existingCount = counts.get(num)
    if (existingCount !== undefined) {
      counts.set(num, existingCount + 1)
    } else {
      counts.set(num, 1)
    }
  }

  counts.forEach((count) => {
    if (count === 1) {
      return
    }

    // This is calculating the number of combinations "count choose 2".
    numPairs = numPairs + (count * (count - 1)) / 2
  })

  return numPairs
}
