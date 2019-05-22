/*
    Constraints:

        Find the subsets of non adjacent elements and sum them and get back with the max.


    Ideas:
        [-2, 1, 3, -4, 5]   1 1 1 1 1
        [-2, 3, 5]          1 0 1 0 1   21
        [-2, 3]             1 0 1 0 0   20
        [-2, -4]            1 0 0 1 0   18
        [-2, 5]             1 0 0 0 1   17
        [1, -4]             0 1 0 1 0   10
        [1, 5]              0 1 0 0 1    9
        [3, 5]              0 0 1 0 1    5
                           16 8 4 2 1

        Generate all binary numbers and filter them by adjacency 
        + they must each have two elements + filter out full set.
    
    Complexity:

    Code:

    Tests:



*/

function maxSumSubset(arr) {
    const mask = [];
    for(let i = 0; i < Math.pow(2, arr.length); i++) {
        const currBinary = i.toString(2).padStart(arr.length, '0'); 
        if(currBinary.indexOf('11') > -1) continue;
        mask.push(currBinary);
    }
    return mask;
}

console.log(maxSumSubset([-2, 1, 3, -4, 5]));