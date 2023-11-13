function smallestSubarrayWithSum(arr, targetSum) {
  let minLength = Infinity;
  let currentSum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    while (currentSum >= targetSum) {
      minLength = Math.min(minLength, end - start + 1);
      currentSum -= arr[start];
      start++;
    }
  }

  // If minLength is still Infinity, no subarray was found
  return minLength === Infinity ? 0 : minLength;
}

// Example usage:
const arr = [1, 4, 45, 6, 0, 19];
const targetSum = 51;

const result = smallestSubarrayWithSum(arr, targetSum);
console.log(`The smallest subarray with a sum of ${targetSum} is of length: ${result}`);





/*

Certainly! The algorithm uses the sliding window technique to efficiently find the smallest subarray with a sum greater than or equal to the given target sum.

Here's a step-by-step explanation of the algorithm:

1. **Initialization:**
   - `minLength`: Initialize a variable to store the length of the smallest subarray found. Set it to `Infinity` initially because we want to find the minimum.
   - `currentSum`: Initialize a variable to keep track of the current sum of the elements in the sliding window.
   - `start`: Initialize a pointer at the beginning of the array.

2. **Sliding Window:**
   - Use a `for` loop to iterate over the array from the beginning (`end` pointer).
   - Update `currentSum` by adding the current element in the array.

3. **Check Condition:**
   - Check if the `currentSum` is greater than or equal to the target sum.
   - If true, it means we may have found a subarray with a sum greater than or equal to the target sum.

4. **Shrink the Window:**
   - Enter a `while` loop to shrink the window from the left (`start` pointer) until the `currentSum` becomes less than the target sum.
   - Update `minLength` with the minimum length of the subarray found so far.

5. **Move the Window:**
   - Continue the outer loop, moving the `end` pointer to the next element and expanding the window.
   - Repeat the process of updating `currentSum` and checking if it's greater than or equal to the target sum.

6. **Final Result:**
   - Once the loop completes, the `minLength` variable holds the length of the smallest subarray with a sum greater than or equal to the target sum.

7. **Edge Case Handling:**
   - If `minLength` is still `Infinity` after the loop, it means no subarray was found, so return 0.

The time complexity of this algorithm is O(n), where n is the length of the input array, as each element is visited at most twice (once by the `end` pointer and once by the `start` pointer). The space complexity is O(1), as the algorithm uses only a constant amount of extra space.

*/
