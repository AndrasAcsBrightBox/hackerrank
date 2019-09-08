/*
    Given an integer array nums, find the contiguous subarray (containing at least one number)
    which has the largest sum and return its sum.

    Constraints:

    Ideas:

        we need to have a sliding window of variable size, and find all subarrays.
        for each we need to calculate the sum, and have a max register and at the end return the max register

    Complexity: O(N)


*/

function maxSubArray(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    let s = 0;
    for (let j = i; j < arr.length; j++) {
      s += arr[j];
      if (s > max) {
        max = s;
      }
    }
  }
  return max;
}

// Tests
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);

// windowStart = 3,
// windowEnd = 6
