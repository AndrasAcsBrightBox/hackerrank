/* Given an array, find the average of all subarrays of size ‘K’ in it. */
// [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// Based on sliding window stuffie..

function avgOfSubArrs(arr, k) {
  if (k > arr.length) return -1;
  let p1 = 0;
  let p2 = k - 1;
  const avgs = [];
  while (p2 < arr.length) {
    let summ = 0;
    for (let i = p1; i <= p2; i++) {
      summ += arr[i];
    }
    avgs.push(summ / k);
    p1++;
    p2++;
  }
  return avgs;
}


console.log(avgOfSubArrs([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));