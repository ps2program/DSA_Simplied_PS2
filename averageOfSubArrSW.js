/**
 * @param {number} n
 * @return {string[]}
 */
var findAvgOfSubArrs = function(k,arr) {
    let result = [];

    let windowStart = 0;
    let windowEnd = 0;
    let windowSum = 0;

    for(windowEnd; windowEnd< arr.length; windowEnd++) {
        // keep adding the arr elements to windowSum. it will act as the sliding windowEnd

        windowSum += arr[windowEnd];

        // now check if the windowEnd is equal to k. if it is average the window
        if(windowEnd > k) {
            result.push(windowSum/k)

            //slide the window by removing first value and increasing the start one
            windowSum -= arr[windowStart];

            // make the start point to the next value of the array

            windowStart++;
        }
    }

    return result;
}

// Example usage:
const k = 3;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const averages = findAvgOfSubArrs(k, arr);
console.log(averages);
