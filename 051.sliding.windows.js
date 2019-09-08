/*
    Given an array, find the average of all subarrays of size ‘K’ in it.

    Idea: 
        Iterate through the array and get all 5 length subarrays and count avg on them and return

*/
const a = [1, 3, 2, 6, -1, 4, 1, 8, 2, 9, 10, 11];
const k = 5;

// brute for solution
const avgOfSubArrsBruteForce = (a, k) => {
  var r = [];
  // Biggest value can be a.lenght - k + 1, so i can address the first element of the last
  // K length subset
  for (let i = 0; i < a.length - k + 1 ; i++) {
    let sum = 0.0;
    for(let j = i; j < i + k; j++) {
        sum += a[j]
    }
    r.push(sum / k);
  }
  return r;
};

const avgOfSubArrsSlidingWindow = (K, arr) => {
    let windowStart = 0;
    let sum = 0.0;
    let r = [];
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        sum += arr[windowEnd];
        if(windowEnd >= K -1) {
            r.push(sum / K);
            // slide the window forward
            sum -= arr[windowStart];
            windowStart++;
        }
    }
    return r;
}
console.log(avgOfSubArrsBruteForce(a, k));
console.log(avgOfSubArrsSlidingWindow(k, a))
