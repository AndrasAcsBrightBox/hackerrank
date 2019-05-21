"use strict";

/*
    Constraints:
        input: arr is an array of strings, where a value has 6 space
        delimited values

        output: print the largest hourrglass sum

    Ideas:

        Reminds me of the sliding window problem, but this time this
        is in 2 dimensions.

        0: 0 1 2 3 4 5
        1: 0 1 2 3 4 5
        2: 0 1 2 3 4 5
        3: 0 1 2 3 4 5
        4: 0 1 2 3 4 5
        5: 0 1 2 3 4 5

        3 x 3 sub arrays of the original array contain the hourglasses.
        0 1 2
          1 
        0 1 2

        1. split the array to be actually an integer array of 6 x 6
        
        2.  Create the 16 sub arrays
            iterate in rows with startRowPointer and endRowPointer
            iterate in columns with startColumnPointer and endColumnPointer

        3. for each subarray we need to get the hourglass sum
        4. do a maxSelection for the summs, and return it

    Complexity:
        to int array --> N
        creating the sub-arrays: N^2
        summ: N^2
        
        Overall: O(N^2)

    Code:

    Tests:
*/

function maxHourglassSum(arr) {
    const cArr = [];
    for(let i = 0; i < arr.length; i++) {
        cArr[i] = arr[i].split(' ');
    }
    let startRowPointer = 0;
    let endRowPointer = 2;
  
    const subarrays = [];
    while(endRowPointer < cArr.length) {
        let startColumnPointer = 0;
        let endColumnPointer = 2;
        while(endColumnPointer < cArr[startRowPointer].length) {
            let sum = 0;
            for(let i = startRowPointer; i <= endRowPointer; i++) {
                for(let j = startColumnPointer; j <= endColumnPointer; j++) {
                     if((i == startRowPointer + 1 && (j == startColumnPointer ||  j == endColumnPointer))) continue;
                    sum += new Number(cArr[i][j]);
                }
            }
            subarrays.push(sum)
            startColumnPointer++;
            endColumnPointer++;
        }
        startRowPointer++;
        endRowPointer++;
    }
    return getMax(subarrays);
}

function getMax(arr) {
    let maxI = 0;
    for(let i = 0; i <arr.length; i++) {
        if(arr[i] > arr[maxI]) maxI = i;
    }
    return arr[maxI];
}

// This should return 28
console.log(
  maxHourglassSum([
    "-9 -9 -9 1 1 1",
    "0 -9 0 4 3 2",
    "-9 -9 -9 1 2 3",
    "0 0 8 6 6 0",
    "0 0 0 -2 0 0",
    "0 0 1 2 4 0"
  ])
);
